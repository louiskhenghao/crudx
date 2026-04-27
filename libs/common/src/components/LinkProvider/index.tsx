/**
 * ===========================
 * LinkProvider
 * ===========================
 *
 * Lets the consumer plug in their preferred client-side `Link` component
 * (Next.js, React Router, TanStack Router, …) without the `@crudx/*`
 * libs taking a hard dependency on any specific framework.
 *
 * The default renders a plain `<a>`, which works in any React app —
 * consumers who want SPA navigation wrap their app in `<LinkProvider
 * Link={MyLink} />` once near the root.
 *
 * Library code uses `useLinkComponent()` (or imports the already-wired
 * `Link` re-export below) to read whatever the consumer registered.
 */

import {
  AnchorHTMLAttributes,
  ComponentPropsWithRef,
  ComponentType,
  createContext,
  forwardRef,
  ReactNode,
  Ref,
  useContext,
} from 'react';

export type LinkComponentProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children?: ReactNode;
};

export type LinkComponent = ComponentType<
  LinkComponentProps & { ref?: Ref<HTMLAnchorElement> }
>;

const DefaultLink: LinkComponent = forwardRef<
  HTMLAnchorElement,
  LinkComponentProps
>(function DefaultLink({ href, children, ...rest }, ref) {
  return (
    <a href={href} ref={ref} {...rest}>
      {children}
    </a>
  );
}) as LinkComponent;

const LinkContext = createContext<LinkComponent>(DefaultLink);

export type LinkProviderProps = {
  /**
   * The Link component used everywhere `@crudx/*` renders a navigable
   * link (breadcrumbs, page-header back button, row "view"/"update"
   * actions). When omitted, falls back to a plain `<a>`.
   *
   * Examples:
   *
   *   import NextLink from 'next/link';
   *   <LinkProvider Link={NextLink}>...</LinkProvider>
   *
   *   import { Link as RouterLink } from 'react-router-dom';
   *   <LinkProvider Link={RouterLink as any}>...</LinkProvider>
   */
  Link?: LinkComponent;
  children?: ReactNode;
};

export const LinkProvider = ({ Link, children }: LinkProviderProps) => (
  <LinkContext.Provider value={Link ?? DefaultLink}>
    {children}
  </LinkContext.Provider>
);

/** Read the currently-registered Link component. */
export const useLinkComponent = (): LinkComponent => useContext(LinkContext);

/**
 * Drop-in `Link` that resolves through the provider at render time.
 * Library components that previously imported `next/link` should swap
 * to importing this instead.
 */
export const Link = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithRef<LinkComponent>
>(function Link(props, ref) {
  const Resolved = useContext(LinkContext);
  return <Resolved {...props} ref={ref} />;
});

export default LinkProvider;
