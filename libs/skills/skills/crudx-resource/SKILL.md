---
name: crudx-resource
description: Scaffold a complete CRUD page (types + adapter schema + page) for one resource. Highest-value scaffold. Branches on transport + UI lib.
---

# /crudx-resource

You are scaffolding a full CRUD page for a single resource (e.g. `Posts`,
`Users`, `Orders`). This skill is **deterministic templating**, not
generation. Read templates from this skill's `templates/` directory,
substitute placeholders, write to the user's project. Do **not** rewrite the
template content from scratch.

## Step 1 — Gather inputs

Use **AskUserQuestion** in a single call with these four questions:

1. **Transport** — `GraphQL (Apollo)` | `REST (TanStack Query)`
2. **UI library** — `MUI (Material UI)` | `shadcn / Tailwind`
3. **Resource name (singular, PascalCase)** — free text via "Other"
   (e.g. `Post`, `User`, `Order`).
4. **REST resource path** *(only when transport = REST)* — free text via
   "Other" (e.g. `posts`, `users/list`). Skip for GraphQL.

If the user passed a resource as the slash-command arg (e.g.
`/crudx-resource Posts`), pre-fill question 3 and still confirm via the
question UI.

## Step 2 — Compute derived names

From the resource name, compute these placeholders **once**:

| Placeholder | Derivation | Example (input: `Post`) |
|---|---|---|
| `{{Resource}}` | input as-is, PascalCase singular | `Post` |
| `{{resource}}` | camelCase singular | `post` |
| `{{Resources}}` | PascalCase plural (append `s`, or `ies` for `*y`) | `Posts` |
| `{{resources}}` | camelCase plural | `posts` |
| `{{RESOURCE_PATH}}` | REST: user's Q4 answer; GraphQL: `{{resources}}` | `posts` |
| `{{UI_PACKAGE}}` | `mui` or `shadcn` based on Q2 | `mui` |

## Step 3 — Read templates and write files

Resolve the template directory by transport (`templates/rest` or
`templates/graphql`). For **each** template file below, follow this loop:

1. `Read` the template file from this skill's directory.
2. Replace placeholders **in memory** (or use `Write` followed by `Edit`
   `replace_all` for each placeholder).
3. `Write` to the destination path.

### REST file map

| Template | Destination |
|---|---|
| `templates/rest/types.ts.template` | `src/resources/{{resource}}/types.ts` |
| `templates/rest/schema.ts.template` | `src/resources/{{resource}}/schema.ts` |
| `templates/rest/page.tsx.template` | `src/pages/{{resources}}/index.tsx` |

### GraphQL file map

| Template | Destination |
|---|---|
| `templates/graphql/operations.ts.template` | `src/resources/{{resource}}/operations.ts` |
| `templates/graphql/types.ts.template` | `src/resources/{{resource}}/types.ts` |
| `templates/graphql/schema.ts.template` | `src/resources/{{resource}}/schema.ts` |
| `templates/graphql/page.tsx.template` | `src/pages/{{resources}}/index.tsx` |

If any destination already exists, ask the user before overwriting.

## Step 4 — Print results and field-customization hint

Print:

```
✓ Scaffolded {{Resource}} CRUD page:
   src/resources/{{resource}}/types.ts
   src/resources/{{resource}}/schema.ts
   src/pages/{{resources}}/index.tsx
   <+ operations.ts for GraphQL>

⚠ The templates use placeholder fields: id, name, description.
   Tell me the real fields for {{Resource}} (e.g. "id, title:string, body:string, userId:number")
   and I'll patch types.ts + the columns array.
```

When the user replies with their fields, **do** generate the corresponding
type members and column entries — that part is genuinely custom and worth
the LLM cost. Limit edits to `types.ts` (the type body) and the `columns=[...]`
array in `page.tsx`. Don't rewrite the rest of the file.

## Step 5 — Verification

Suggest the user:
- Add a route for the new page (Next.js: file-based; React Router: register
  `/{{resources}}` to the new page component).
- Wrap the app root with `<CrudxProvider>` (from `/crudx-setup`) if not done.
- Run `yarn dev` (or equivalent).

## Escape hatch

If the user wants anything beyond standard CRUD — custom filters with
backend support, computed columns, multi-step forms, optimistic updates with
custom rollback — **stop the templated path** and proceed conversationally.
The templates are starting points.
