import { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const usePrompt = () => {
  // ========== DIALOG
  const dialog = async (props: PromptProps): Promise<boolean> => {
    const { node, onHide } = props;

    return new Promise((resolve) => {
      let open = true;
      const mountRoot = createRoot(document.createElement('div'));

      // ---------- EVENTS
      const hideHandler = () => {
        open = false;
        render();
        resolve(true);
        onHide?.();
      };

      // ---------- RETURN
      const render = () => {
        const view = node({
          hide: hideHandler,
        });
        mountRoot.render(view);
      };

      render();
    });
  };

  return dialog;
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export type PromptProps = {
  onHide?: () => void;
  node: (props: { hide: () => void }) => ReactNode;
};

export default usePrompt;
