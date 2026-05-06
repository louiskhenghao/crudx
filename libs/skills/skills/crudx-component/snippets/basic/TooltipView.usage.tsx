import { TooltipView } from '@crudx/{{UI_PACKAGE}}';

// TODO: wrap any focusable element. For disabled buttons wrap them in a
// <span> so the tooltip still attaches.
export function TooltipExample() {
  return (
    <>
      <TooltipView title="Edit this record" arrow>
        <button>Edit</button>
      </TooltipView>
      <TooltipView title="Disabled — no permission" arrow>
        <span>
          <button disabled>Save</button>
        </span>
      </TooltipView>
    </>
  );
}
