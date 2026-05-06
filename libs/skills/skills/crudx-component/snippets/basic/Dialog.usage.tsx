import { useRef } from 'react';
import { Dialog, DialogRefProps } from '@crudx/{{UI_PACKAGE}}';

// TODO: hook the primary/secondary actions to your real handlers.
// `type` can be 'confirmation' | 'alert' | 'custom'.
export function DialogExample() {
  const ref = useRef<DialogRefProps>(null);
  return (
    <>
      <button onClick={() => ref.current?.open()}>Open dialog</button>
      <Dialog
        ref={ref}
        type="confirmation"
        title="Delete this record?"
        message="This action can't be undone. Are you sure?"
        primaryText="Delete"
        secondaryText="Cancel"
        onClickPrimaryAction={() => {
          /* TODO: confirm action */
        }}
        onClickSecondaryAction={() => {
          /* TODO: cancel action */
        }}
      />
    </>
  );
}
