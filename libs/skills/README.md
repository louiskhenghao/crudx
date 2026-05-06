# @crudx/skills

Installable [Claude Code](https://docs.claude.com/en/docs/claude-code/overview)
skills for `@crudx/*`. Drops three slash commands into your project's
`.claude/skills/` directory so Claude can scaffold the repetitive parts
of a crudx integration **from templates**, not by re-generating
boilerplate from scratch — drastically lower token cost per scaffold.

## Why use this

Without skills, asking Claude to "scaffold a Posts CRUD page" regenerates
hundreds of lines of TSX every time. With these skills installed, the
same request becomes a deterministic copy-and-substitute against
pre-baked templates: a handful of file ops + a few placeholder edits.

The skills also enforce the right shape for `@crudx/*`:

- correct adapter wiring per transport (Apollo or TanStack)
- correct schema tuple typing (`[Response, Variables, Item?]`)
- correct UI lib import path (`@crudx/mui` or `@crudx/shadcn`)
- correct provider + Tailwind / theme setup

## Install

```bash
# One-shot via npx (recommended)
npx @crudx/skills install

# Or as a devDependency you can re-run later
yarn add -D @crudx/skills
npx crudx-skills install
```

This drops three skills into `./.claude/skills/`:

| Skill | Purpose |
| --- | --- |
| `/crudx-setup` | First-time project setup: install deps, wire transport provider, configure MUI theme or shadcn Tailwind. |
| `/crudx-resource` | Scaffold a complete CRUD page (types + adapter schema + page) for one resource. The highest-value scaffold. |
| `/crudx-component` | Drop a single basic atom (`Dialog`, `Table`, …) or major view (`CrudPanelView`, `CrudFilterView`, …) into an existing file. |

## Usage

Open Claude Code in your project and type the slash command. Each skill
asks 2–4 short questions (transport, UI lib, resource name, …) and then
copies the relevant template into your project.

```
/crudx-setup
> Transport? REST (TanStack Query)
> UI library? shadcn / Tailwind
> Package manager? yarn
> Endpoint URL? https://api.example.com
✓ Provider written to src/providers/CrudxProvider.tsx
✓ Tailwind config + globals.css updated
```

```
/crudx-resource Posts
> Transport? REST (TanStack Query)
> UI library? shadcn / Tailwind
> REST resource path? posts
✓ Scaffolded Post CRUD page:
   src/resources/post/types.ts
   src/resources/post/schema.ts
   src/pages/posts/index.tsx
⚠ Templates use placeholder fields (id, name, description). Tell me your
  real fields and I'll patch types.ts + the columns array.
```

```
/crudx-component
> UI library? MUI
> Category? Major view
> Component? CrudFilterView
> Target file? src/pages/posts/index.tsx
✓ Inserted CrudFilterView. TODOs to fill:
   - replace `filterNode` with your inputs
   - wire `onApply` to your refetch
```

## Cost-saving mechanics

Each skill follows the same pattern:

1. **Ask** (2–4 fixed `AskUserQuestion` calls — no LLM thinking).
2. **Look up** the matching template by transport / UI lib (no search).
3. **Substitute** placeholders deterministically (`Edit replace_all`).
4. **Write** the file.

LLM creativity is reserved for the parts that genuinely vary per app
(custom column renderers, custom validators, computed columns) — and
each SKILL.md has an explicit escape hatch: *"If the user asks for
anything beyond standard CRUD, stop the templated path and proceed
conversationally."*

## Available commands

```bash
npx @crudx/skills install [--target <dir>] [--force] [--skip-existing]
npx @crudx/skills update                    # alias for install --force
npx @crudx/skills list                      # show available skills
npx @crudx/skills --help
```

Default target: `./.claude/skills`.

## Updating

When a new version of `@crudx/skills` ships, re-run:

```bash
npx @crudx/skills update
```

This overwrites the three skill folders with the latest templates. Your
own skills in `.claude/skills/` are not touched.

## Uninstalling

```bash
rm -rf .claude/skills/crudx-setup .claude/skills/crudx-resource .claude/skills/crudx-component
yarn remove @crudx/skills    # if installed as devDep
```

## Versioning

`@crudx/skills` is versioned independently from the rest of the
monorepo. Skill templates track the public API of `@crudx/core`,
`@crudx/common`, and the adapter / UI packages. Major bumps signal a
template-shape change; patch / minor bumps are template tweaks or
additions.

## Contributing

See [`CONTRIBUTING.md`](../../CONTRIBUTING.md) for branch / commit /
release conventions. Use scope `skills` for changes to this package:

```
feat(skills): add crudx-resource cursor pagination template
fix(skills): forward --target flag through update alias
docs(skills): clarify shadcn Tailwind merge step
```

The example app under `apps/example/` is the source-of-truth for the
templates. When the example surface changes, regenerate the
corresponding template here.
