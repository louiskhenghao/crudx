import { memo, useEffect, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import cn from 'classnames';

import { TabLabel } from './components/TabLabel';
import { TabViewProps } from './props';
import { StyledTab } from './styled';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const TabView = memo((props: TabViewProps) => {
  const {
    value,
    items = [],
    className,
    variant = 'scrollable',
    orientation = 'horizontal',
    iconPosition = 'start',
    scrollButtons = 'auto',
    unstyled,
    tabsProps,
    tabLabelProps,
    onChange,
    renderContent,
    ...restProps
  } = props;

  // =============== STATE
  const [valueState, setValueState] = useState<string>();

  // =============== EFFECTS
  useEffect(() => {
    setValueState(value ?? items?.[0]?.key ?? null);
  }, [value, items]);

  // =============== VARIABLES
  const hasContent = useMemo(() => {
    return items.some((e) => !!e.content) || !!renderContent;
  }, [items, renderContent]);

  // =============== HOOKS
  if (items.length === 0) return null;
  return (
    <Box className="tabview-wrapper">
      {/* ==== TABS */}
      <Tabs
        className={cn('tabview-tabs', className)}
        value={valueState || false}
        variant={variant}
        orientation={orientation}
        scrollButtons={scrollButtons}
        {...restProps}
        {...tabsProps}
        onChange={(e, item) => {
          e.stopPropagation();
          e.preventDefault();
          setValueState(item);
          onChange?.(item);
        }}
      >
        {/* ==== TAB ITEM */}
        {items.map((e) => {
          const {
            key,
            enabled = true,
            content,
            label,
            count,
            countColor,
            ...restItemProps
          } = e;
          if (!enabled) return null;
          return (
            <StyledTab
              id={`tabview-tabs-item-${key}`}
              className="tabview-tabs-item"
              key={key}
              value={key}
              unstyled={unstyled}
              iconPosition={iconPosition}
              label={
                <TabLabel
                  label={label}
                  count={count}
                  chipColor={countColor}
                  {...tabLabelProps}
                />
              }
              {...restItemProps}
            />
          );
        })}
      </Tabs>

      {/* ==== TAB CONTENT */}
      {valueState && hasContent && (
        <Box className="tabview-content-wrapper">
          {renderContent ? (
            <Box className="tabview-content-item">
              {renderContent(valueState)}
            </Box>
          ) : (
            items.map((e) => {
              const { key, enabled = true, content } = e;
              if (!enabled || !content) return null;
              return (
                <Box key={key} className={cn('tabview-content-item', key)}>
                  {typeof content === 'function' ? content() : content}
                </Box>
              );
            })
          )}
        </Box>
      )}
    </Box>
  );
});

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default TabView;
