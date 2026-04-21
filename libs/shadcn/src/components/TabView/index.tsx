import { memo, useEffect, useMemo, useState } from 'react';

import { cn } from '../../lib/cn';
import {
  TabsContent,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from '../../primitives/tabs';

import { TabLabel } from './components/TabLabel';
import { TabViewProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const TabView = memo((props: TabViewProps) => {
  const {
    value,
    defaultValue,
    items = [],
    className,
    variant = 'scrollable',
    orientation = 'horizontal',
    iconPosition = 'start',
    unstyled,
    tabsProps,
    tabLabelProps,
    onChange,
    renderContent,
  } = props;

  // =============== STATE
  const [valueState, setValueState] = useState<string | undefined>(
    value ?? defaultValue
  );

  // =============== EFFECTS
  useEffect(() => {
    if (value !== undefined) setValueState(value);
  }, [value]);

  // =============== VARIABLES
  const hasContent = useMemo(() => {
    return items.some((e) => !!e.content) || !!renderContent;
  }, [items, renderContent]);

  const listClass = useMemo(() => {
    if (unstyled) return '';
    return cn(
      variant === 'scrollable' && 'overflow-x-auto',
      variant === 'fullWidth' && 'w-full grid',
      variant === 'fullWidth' &&
        `grid-cols-${Math.max(items.filter((e) => e.enabled !== false).length, 1)}`
    );
  }, [variant, items, unstyled]);

  // =============== HOOKS
  if (items.length === 0) return null;

  return (
    <div className="tabview-wrapper">
      <TabsRoot
        value={valueState}
        defaultValue={defaultValue}
        orientation={orientation}
        onValueChange={(item) => {
          setValueState(item);
          onChange?.(item);
        }}
        className={className}
      >
        <TabsList className={cn('tabview-tabs', listClass)} {...tabsProps}>
          {items.map((e) => {
            const {
              key,
              enabled = true,
              disabled,
              label,
              count,
              countColor,
              icon,
            } = e;
            if (!enabled) return null;
            const iconNode = icon;
            const labelNode = (
              <TabLabel
                label={label}
                count={count}
                chipColor={countColor}
                {...tabLabelProps}
              />
            );
            return (
              <TabsTrigger
                id={`tabview-tabs-item-${key}`}
                className="tabview-tabs-item"
                key={key}
                value={key}
                disabled={disabled}
              >
                <span
                  className={cn(
                    'inline-flex items-center gap-1',
                    iconPosition === 'top' && 'flex-col',
                    iconPosition === 'bottom' && 'flex-col-reverse',
                    iconPosition === 'end' && 'flex-row-reverse'
                  )}
                >
                  {iconNode}
                  {labelNode}
                </span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {valueState && hasContent && (
          <div className="tabview-content-wrapper">
            {renderContent ? (
              <div className="tabview-content-item">
                {renderContent(valueState)}
              </div>
            ) : (
              items.map((e) => {
                const { key, enabled = true, content } = e;
                if (!enabled || !content) return null;
                return (
                  <TabsContent
                    key={key}
                    value={key}
                    className={cn('tabview-content-item', key)}
                  >
                    {typeof content === 'function' ? content() : content}
                  </TabsContent>
                );
              })
            )}
          </div>
        )}
      </TabsRoot>
    </div>
  );
});
TabView.displayName = 'TabView';

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default TabView;
