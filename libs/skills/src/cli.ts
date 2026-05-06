#!/usr/bin/env node
/**
 * @crudx/skills CLI
 *
 * Zero-runtime-dep Node 18+ CLI that copies the bundled `skills/` directory
 * into a target `.claude/skills/` folder so Claude Code can pick them up.
 *
 * Commands:
 *   crudx-skills install [--target <dir>] [--force] [--skip-existing]
 *   crudx-skills update                # alias for install --force
 *   crudx-skills list                  # print available skills
 *   crudx-skills --help
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as readline from 'node:readline';

const SKILLS_DIRNAME = 'skills';
const DEFAULT_TARGET = path.join('.claude', 'skills');

type Cmd = 'install' | 'update' | 'list' | 'help';

interface Args {
  cmd: Cmd;
  target: string;
  force: boolean;
  skipExisting: boolean;
}

function parseArgs(argv: string[]): Args {
  const out: Args = {
    cmd: 'help',
    target: DEFAULT_TARGET,
    force: false,
    skipExisting: false,
  };
  if (argv.length === 0 || argv[0] === '--help' || argv[0] === '-h') {
    return out;
  }
  const [first, ...rest] = argv;
  if (first === 'install' || first === 'update' || first === 'list') {
    out.cmd = first;
  } else {
    return { ...out, cmd: 'help' };
  }
  for (let i = 0; i < rest.length; i++) {
    const a = rest[i];
    if (a === '--target' || a === '-t') {
      out.target = rest[++i] ?? out.target;
    } else if (a === '--force' || a === '-f') {
      out.force = true;
    } else if (a === '--skip-existing') {
      out.skipExisting = true;
    }
  }
  if (out.cmd === 'update') out.force = true;
  return out;
}

/**
 * Resolve the source `skills/` directory. We try, in order:
 *   1. <cwd>/node_modules/@crudx/skills/skills  (installed as devDep)
 *   2. <__dirname>/../skills                    (run via npx; cli.js sits next to skills/)
 *   3. <__dirname>/skills                       (defensive fallback)
 */
function resolveSourceDir(): string | null {
  const candidates = [
    path.join(process.cwd(), 'node_modules', '@crudx', 'skills', SKILLS_DIRNAME),
    path.join(__dirname, SKILLS_DIRNAME),
    path.join(__dirname, '..', SKILLS_DIRNAME),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c) && fs.statSync(c).isDirectory()) return c;
  }
  return null;
}

function listSkillNames(sourceDir: string): string[] {
  return fs
    .readdirSync(sourceDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();
}

function readDescription(skillDir: string): string {
  const md = path.join(skillDir, 'SKILL.md');
  if (!fs.existsSync(md)) return '';
  const head = fs.readFileSync(md, 'utf8').split('\n').slice(0, 12).join('\n');
  const m = head.match(/^description:\s*(.+)$/m);
  return m ? m[1].trim() : '';
}

function copyDir(src: string, dst: string): void {
  fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dst, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else if (entry.isFile()) fs.copyFileSync(s, d);
  }
}

function rmDir(p: string): void {
  fs.rmSync(p, { recursive: true, force: true });
}

async function prompt(q: string): Promise<string> {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) => rl.question(q, (a) => { rl.close(); resolve(a); }));
}

async function cmdInstall(args: Args): Promise<number> {
  const src = resolveSourceDir();
  if (!src) {
    console.error('[crudx-skills] could not locate bundled skills/ directory.');
    console.error('  Expected at one of:');
    console.error(`    ${path.join(process.cwd(), 'node_modules', '@crudx', 'skills', SKILLS_DIRNAME)}`);
    console.error(`    ${path.join(__dirname, SKILLS_DIRNAME)}`);
    return 1;
  }
  const targetRoot = path.resolve(args.target);
  fs.mkdirSync(targetRoot, { recursive: true });
  const names = listSkillNames(src);
  if (names.length === 0) {
    console.error('[crudx-skills] source directory has no skills.');
    return 1;
  }
  console.log(`[crudx-skills] installing ${names.length} skill(s) into ${targetRoot}`);
  let installed = 0;
  let skipped = 0;
  for (const name of names) {
    const srcSkill = path.join(src, name);
    const dstSkill = path.join(targetRoot, name);
    const exists = fs.existsSync(dstSkill);
    if (exists && !args.force) {
      if (args.skipExisting) {
        console.log(`  ~ ${name} (exists, skipped)`);
        skipped++;
        continue;
      }
      const ans = (await prompt(`  ? ${name} exists. overwrite? [y/N] `)).trim().toLowerCase();
      if (ans !== 'y' && ans !== 'yes') {
        console.log(`  ~ ${name} (kept)`);
        skipped++;
        continue;
      }
    }
    if (exists) rmDir(dstSkill);
    copyDir(srcSkill, dstSkill);
    console.log(`  + ${name}`);
    installed++;
  }
  console.log(`[crudx-skills] done — ${installed} installed, ${skipped} skipped.`);
  console.log('');
  console.log('Next: open Claude Code in this project and try:');
  console.log('  /crudx-setup       # one-time: deps + provider + theme');
  console.log('  /crudx-resource    # scaffold a CRUD page');
  console.log('  /crudx-component   # drop in a single component');
  return 0;
}

function cmdList(): number {
  const src = resolveSourceDir();
  if (!src) {
    console.error('[crudx-skills] could not locate bundled skills/ directory.');
    return 1;
  }
  console.log('Available skills:');
  for (const name of listSkillNames(src)) {
    const desc = readDescription(path.join(src, name));
    console.log(`  /${name}${desc ? `  — ${desc}` : ''}`);
  }
  return 0;
}

function cmdHelp(): number {
  console.log(`@crudx/skills — installable Claude Code skills for @crudx/*

Usage:
  npx @crudx/skills install [--target <dir>] [--force] [--skip-existing]
  npx @crudx/skills update              alias for "install --force"
  npx @crudx/skills list                show available skills
  npx @crudx/skills --help

Options:
  --target, -t <dir>   target directory (default: .claude/skills)
  --force, -f          overwrite existing skills without prompting
  --skip-existing      keep existing skills without prompting

Source resolution:
  1. <cwd>/node_modules/@crudx/skills/skills  (when installed as devDep)
  2. <bin>/skills                             (when run via npx)
`);
  return 0;
}

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));
  let code = 0;
  if (args.cmd === 'install' || args.cmd === 'update') code = await cmdInstall(args);
  else if (args.cmd === 'list') code = cmdList();
  else code = cmdHelp();
  process.exit(code);
}

main().catch((err) => {
  console.error('[crudx-skills] unexpected error:', err);
  process.exit(1);
});
