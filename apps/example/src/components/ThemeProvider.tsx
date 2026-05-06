/**
 * ThemeProvider
 * --------------------------------
 *
 * Wires a single light/dark mode toggle into both rendering systems
 * the example app uses:
 *
 *  • Tailwind / `@crudx/shadcn` — flips the `.dark` class on `<html>`
 *    so the shadcn CSS variables swap palette.
 *  • MUI / `@crudx/mui` — provides a `MuiThemeProvider` whose theme's
 *    `palette.mode` follows the same state.
 *
 * Mode is persisted to `localStorage` and seeded from
 * `prefers-color-scheme` on first load. A no-flash inline script in
 * `_document.tsx` applies the class before hydration so SSR pages
 * don't briefly flash the wrong theme.
 */

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

export type ThemeMode = 'light' | 'dark';

type Ctx = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  toggle: () => void;
};

const ThemeContext = createContext<Ctx>({
  mode: 'light',
  setMode: () => undefined,
  toggle: () => undefined,
});

export const useThemeMode = () => useContext(ThemeContext);

export const THEME_STORAGE_KEY = 'crudx-example-theme';

const applyMode = (mode: ThemeMode) => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.classList.toggle('dark', mode === 'dark');
  root.style.colorScheme = mode;
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  // SSR renders light by default. The inline script in _document.tsx
  // already applied the class before hydration, so we hydrate to the
  // same value the DOM already shows.
  const [mode, setModeState] = useState<ThemeMode>('light');

  useEffect(() => {
    const saved =
      (typeof window !== 'undefined'
        ? (localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null)
        : null) ?? null;
    const system =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    const next = saved ?? system;
    setModeState(next);
    applyMode(next);
  }, []);

  const setMode = useCallback((next: ThemeMode) => {
    setModeState(next);
    applyMode(next);
    if (typeof window !== 'undefined') {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    }
  }, []);

  const toggle = useCallback(() => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  }, [mode, setMode]);

  const muiTheme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  const value = useMemo(
    () => ({ mode, setMode, toggle }),
    [mode, setMode, toggle]
  );

  return (
    <ThemeContext.Provider value={value}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
