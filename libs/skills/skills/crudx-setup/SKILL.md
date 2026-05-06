---
name: crudx-setup
description: One-time setup for a project integrating @crudx/* — installs deps, wires the transport provider, and configures MUI theme or shadcn Tailwind.
---

# /crudx-setup

You are helping the user wire `@crudx/*` into a fresh (or already-running)
React app. **Be deterministic** — follow the steps below in order. Do **not**
generate boilerplate from scratch; the templates in this skill's `templates/`
directory are the source of truth. Read → substitute placeholders → write.

## Step 0 — Confirm scope

Before running, briefly tell the user:
> "I'll ask 3–4 questions, then drop a transport provider plus theme/Tailwind
> config into your project. I won't run install commands — you'll see the
> exact command to run."

## Step 1 — Gather inputs (always ask, even if obvious)

Use **AskUserQuestion** with these four questions in **a single call**:

1. **Transport** — `GraphQL (Apollo)` | `REST (TanStack Query)`
2. **UI library** — `MUI (Material UI)` | `shadcn / Tailwind`
3. **Package manager** — `yarn` | `npm` | `pnpm`
4. **Endpoint URL** — free text via "Other". For GraphQL this is the GraphQL
   endpoint (e.g. `https://api.example.com/graphql`). For REST this is the
   API base URL (e.g. `https://api.example.com`).

If the user types a resource path or anything that isn't an absolute URL,
re-ask question 4.

## Step 2 — Print the install command (do NOT run it)

Match the (transport × UI lib) combo. The peer list is fixed — copy verbatim:

| Transport | UI lib | Command (yarn shown; swap `add` → `install` for npm, `add` for pnpm) |
|---|---|---|
| GraphQL | MUI | `yarn add @crudx/core @crudx/common @crudx/graphql-apollo-adapter @crudx/mui @apollo/client graphql @mui/material @emotion/react @emotion/styled` |
| GraphQL | shadcn | `yarn add @crudx/core @crudx/common @crudx/graphql-apollo-adapter @crudx/shadcn @apollo/client graphql @tanstack/react-table tailwind-merge` + dev: `yarn add -D tailwindcss postcss autoprefixer` |
| REST | MUI | `yarn add @crudx/core @crudx/common @crudx/rest-tanstack-adapter @crudx/mui @tanstack/react-query @mui/material @emotion/react @emotion/styled` |
| REST | shadcn | `yarn add @crudx/core @crudx/common @crudx/rest-tanstack-adapter @crudx/shadcn @tanstack/react-query @tanstack/react-table tailwind-merge` + dev: `yarn add -D tailwindcss postcss autoprefixer` |

Print the command in a fenced code block. Tell the user: "Run this in your
terminal, then I'll wire the provider."

## Step 3 — Write the transport provider

1. Read `templates/<transport>/provider.tsx.template` from this skill's
   directory (where `<transport>` is `graphql` or `rest`).
2. Replace these placeholders **using `Edit replace_all` after writing**, or
   substitute in-memory before `Write`:
   - `{{ENDPOINT}}` → user's answer to Q4
3. Write the result to `src/providers/CrudxProvider.tsx` (create dirs if
   missing). If the file already exists, ask the user before overwriting.

## Step 4 — Apply UI-library config

### If UI lib = MUI

1. Read `templates/mui/theme.tsx.template`.
2. Write to `src/theme/CrudxTheme.tsx`.
3. Tell the user to wrap their app root: `<CrudxProvider><CrudxTheme>{children}</CrudxTheme></CrudxProvider>`.

### If UI lib = shadcn

1. Read `templates/shadcn/tailwind.config.snippet.js`. Look for an existing
   `tailwind.config.{js,ts,cjs,mjs}` in the project root.
   - If one exists: ask the user, then `Edit` it to merge the `content` paths
     and `darkMode: 'class'` (do NOT overwrite — append/merge only).
   - If none exists: `Write` the snippet to `tailwind.config.js`.
2. Read `templates/shadcn/globals.css.snippet`. Look for `src/styles/globals.css`,
   `src/app/globals.css`, `app/globals.css`, or `src/index.css`. Append the
   snippet to the first match. If none exists, write to `src/styles/globals.css`
   and tell the user to import it from their app entry.
3. Tell the user to wrap their app root: `<CrudxProvider>{children}</CrudxProvider>`
   (no theme provider needed for shadcn).

## Step 5 — Verification checklist

Print this to the user:

```
✓ Provider written to src/providers/CrudxProvider.tsx
✓ <UI-lib config written>
Next:
  1. Run the install command from Step 2 if you haven't already.
  2. Wrap your app root with <CrudxProvider>.
  3. Run /crudx-resource to scaffold your first CRUD page.
```

## Escape hatch

If the user's project layout doesn't match (e.g. they use a non-standard
`src/` structure, a custom theme, or want a different provider shape),
**stop the templated path** and ask what they want, then proceed
conversationally. The templates are starting points, not mandates.
