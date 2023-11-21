import React from 'react';
import Grid from '@mui/material/Grid';
import isArray from 'lodash/isArray';

import { RenderFlexViewProps } from './props';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const RenderFlexView: React.FC<RenderFlexViewProps> = (props) => {
  const { className, items = [], containerProps, itemProps } = props;

  // =============== VIEWS
  return (
    <>
      {items.map((row, rowIndex) => {
        const isItemArray = isArray(row);
        return (
          <Grid
            container
            className={className}
            key={`container-${rowIndex}`}
            spacing={2}
            {...containerProps}
            {...(isItemArray ? {} : row.props)}
          >
            {isItemArray
              ? row.map((item, itemIndex) => {
                  return (
                    <Grid
                      item
                      key={`grid-item-${rowIndex}-${itemIndex}`}
                      {...item}
                    />
                  );
                })
              : row.items.map((item, itemIndex) => {
                  return (
                    <Grid
                      item
                      key={`item-${rowIndex}-${itemIndex}`}
                      {...itemProps}
                      {...item}
                    />
                  );
                })}
          </Grid>
        );
      })}
    </>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default RenderFlexView;
