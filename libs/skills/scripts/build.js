#!/usr/bin/env node
/* eslint-disable */
/**
 * Build script for @crudx/skills.
 *
 * - Compiles src/cli.ts -> dist/libs/skills/cli.js via local tsc
 * - Copies the static skills/ payload verbatim
 * - Copies README.md and a publishable package.json
 * - Marks cli.js executable
 */
const fs = require('node:fs');
const path = require('node:path');
const cp = require('node:child_process');

const ROOT = path.resolve(__dirname, '..', '..', '..');
const PKG_DIR = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'dist', 'libs', 'skills');

function log(msg) {
  process.stdout.write(`[skills:build] ${msg}\n`);
}

function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dst, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else if (entry.isFile()) fs.copyFileSync(s, d);
  }
}

function run(cmd, args) {
  const r = cp.spawnSync(cmd, args, { stdio: 'inherit', cwd: ROOT });
  if (r.status !== 0) {
    process.exit(r.status ?? 1);
  }
}

// 1. Compile TypeScript
log('tsc compile');
run('npx', ['tsc', '-p', path.join('libs', 'skills', 'tsconfig.lib.json')]);

// 2. Copy static skills/ payload
const skillsSrc = path.join(PKG_DIR, 'skills');
const skillsDst = path.join(OUT_DIR, 'skills');
if (fs.existsSync(skillsSrc)) {
  log('copy skills/');
  copyDir(skillsSrc, skillsDst);
}

// 3. Copy README.md
const readmeSrc = path.join(PKG_DIR, 'README.md');
if (fs.existsSync(readmeSrc)) {
  log('copy README.md');
  fs.copyFileSync(readmeSrc, path.join(OUT_DIR, 'README.md'));
}

// 4. Write a publishable package.json (drop unrelated fields)
log('write package.json');
const pkg = JSON.parse(fs.readFileSync(path.join(PKG_DIR, 'package.json'), 'utf8'));
fs.writeFileSync(
  path.join(OUT_DIR, 'package.json'),
  JSON.stringify(pkg, null, 2) + '\n',
);

// 5. Make CLI executable
const cliPath = path.join(OUT_DIR, 'cli.js');
if (fs.existsSync(cliPath)) {
  log('chmod +x cli.js');
  fs.chmodSync(cliPath, 0o755);
}

log('done -> ' + path.relative(ROOT, OUT_DIR));
