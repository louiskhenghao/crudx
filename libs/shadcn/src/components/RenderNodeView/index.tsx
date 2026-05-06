import React, { Fragment } from 'react';

import { cn } from '../../lib/cn';

import { RenderNodeViewProps } from './props';

const alignItemsClass: Record<
  NonNullable<RenderNodeViewProps['alignItems']>,
  string
> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

const justifyContentClass: Record<
  NonNullable<RenderNodeViewProps['justifyContent']>,
  string
> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const RenderNodeView: React.FC<RenderNodeViewProps> = (props) => {
  const {
    className,
    items = [],
    direction = 'row',
    alignItems = 'center',
    justifyContent,
    wrap,
    gap,
    style,
    ...rest
  } = props;

  const directionClass = direction === 'column' ? 'flex-col' : 'flex-row';

  // =============== VIEWS
  return (
    <div
      {...rest}
      className={cn(
        'flex',
        directionClass,
        alignItemsClass[alignItems],
        justifyContent && justifyContentClass[justifyContent],
        wrap && 'flex-wrap',
        className
      )}
      style={{ gap: gap != null ? `${gap * 0.25}rem` : undefined, ...style }}
    >
      {items.map((e) => {
        const { key, content } = e;
        return (
          <Fragment key={key}>
            {typeof content === 'function' ? content() : content}
          </Fragment>
        );
      })}
    </div>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default RenderNodeView;
