import * as React from 'react';

import { cn } from '../lib/cn';

export const Skeleton: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...rest
}) => (
  <div
    className={cn(
      'animate-pulse rounded-md bg-[hsl(var(--muted))]',
      className
    )}
    {...rest}
  />
);
