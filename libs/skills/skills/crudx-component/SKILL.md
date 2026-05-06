---
name: crudx-component
description: Drop a single basic atom (Dialog, Table, ButtonDropdown, …) or major view (CrudPanelView, CrudFilterView, …) into an existing file using copy-pasteable snippets.
---

# /crudx-component

You are inserting a single component into the user's code. Use the
pre-baked snippets in this skill's `snippets/` directory. **Do not
generate the snippet body yourself** — the snippets are the source of
truth.

`@crudx/mui` and `@crudx/shadcn` expose the same component surface, so a
single snippet works for both. The only thing that changes between them
is the `from '@crudx/<ui>'` import line — substitute via `{{UI_PACKAGE}}`.

## Step 1 — Gather inputs

Use **AskUserQuestion** in a single call with up to four questions:

1. **UI library** — `MUI (Material UI)` | `shadcn / Tailwind`
2. **Component category** — `Basic atom (Dialog, Table, …)` | `Major view (CrudPanelView, CrudFilterView, …)`
3. **Component** — present the matching list:
   - **Basic atoms**: `BreadcrumbView`, `ButtonDropdown`, `Dialog`,
     `NumberFormatView`, `RenderFlexView`, `RenderNodeView`, `TabView`,
     `Table`, `TableHead`, `TablePagination`, `TableRow`,
     `TableSelectedBulkOptions`, `TableSettingsDensityOptions`,
     `TableSettingsOptions`, `TableSettingsSortingOptions`, `TooltipView`
   - **Major views**: `CrudPanelView`, `CrudTableView`, `CrudFilterView`,
     `CrudContentView`, `CrudContentHeaderView`, `CrudPageHeaderView`,
     `CrudRowItemActions`
4. **Target file path** — free text. If the user has a file open, suggest
   that path; otherwise ask.

If the list of components is too long for one AskUserQuestion call,
split it: ask category first, then ask the component name in a second
call with that category's options.

## Step 2 — Locate the snippet

Snippet path:
```
snippets/<category>/<Component>.usage.tsx
```
where `<category>` is `basic` or `major`.

`Read` the snippet file from this skill's directory.

## Step 3 — Substitute and insert

1. Replace `{{UI_PACKAGE}}` with `mui` or `shadcn`.
2. Use `Edit` on the user's target file:
   - If the file has no existing import from `@crudx/<ui>`, add the
     snippet's import line near other imports.
   - Insert the snippet body where the user wants it (at the cursor
     position if available; otherwise at the end of the component's
     return JSX with a comment marker).

If the file does not exist, ask the user before creating it.

## Step 4 — Print TODO checklist

Each snippet has `// TODO: ...` comments where customization is expected.
After inserting, print a short bullet list of those TODOs so the user
knows what to fill in.

## Escape hatch

If the user asks for a variation that isn't in the snippet (e.g.
"a Dialog with a stepper inside" or "a CrudPanelView that mixes two
schemas"), **stop and proceed conversationally**. The snippets cover the
~80% case; the rest is genuine custom work.
