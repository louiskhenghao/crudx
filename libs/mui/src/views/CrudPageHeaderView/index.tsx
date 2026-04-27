import { memo } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import cn from 'classnames';
import NextLink from 'next/link';

import { BreadcrumbView } from '../../components/BreadcrumbView';
import { RenderNodeView } from '../../components/RenderNodeView';

import { CrudPageHeaderViewProps } from './props';
import StyledWrapper from './styled';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const CrudPageHeaderView = memo((props: CrudPageHeaderViewProps) => {
  const {
    unstyled,
    className,
    title,
    items = [],
    actions = [],
    backPath,
    backIcon,
    titleProps,
    wrapperProps,
    backPathProps,
    breadcrumbProps,
    spacingMultiplier,
    ...restProps
  } = props;

  // =============== VARIABLES
  const hasActions = actions.length > 0;
  const hasBreadcrumbs = items.length > 0;

  // =============== VIEW
  if (!backPath && !hasActions && !hasBreadcrumbs && !title) {
    return null;
  }

  return (
    <StyledWrapper
      unstyled={unstyled}
      className={cn('crud-page-header-wrapper', className)}
      spacingMultiplier={spacingMultiplier}
      {...wrapperProps}
    >
      {/* ---- BREADCRUMBS */}
      {hasBreadcrumbs && (
        <BreadcrumbView
          className="crud-page-header-breadcrumbs"
          items={items}
          {...breadcrumbProps}
        />
      )}

      <Box
        className="crud-page-header-content"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        {/* ---- TITLE VIEW */}
        <Box className="crud-page-header-title">
          <Stack
            direction="row"
            justifyContent="start"
            alignItems="center"
            spacing={1}
            {...restProps}
          >
            {/* ---- BACK BUTTON */}
            {backPath && (
              <Link
                className="crud-page-header-title-back"
                sx={{ display: 'flex', alignItems: 'center' }}
                component={NextLink}
                href={backPath}
                {...backPathProps}
              >
                {backIcon ?? <ChevronLeftIcon color="inherit" />}
              </Link>
            )}

            {/* ---- TITLE */}
            {title && (
              <Typography
                className="crud-page-header-title-text"
                variant="h5"
                {...titleProps}
              >
                {title}
              </Typography>
            )}
          </Stack>
        </Box>

        {/* ---- ACTIONS VIEWS */}
        {hasActions && (
          <>
            <Box sx={{ flex: 'auto' }} />
            <Box className="crud-page-header-actions">
              <RenderNodeView direction="row" spacing={2} items={actions} />
            </Box>
          </>
        )}
      </Box>
    </StyledWrapper>
  );
});

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default CrudPageHeaderView;
