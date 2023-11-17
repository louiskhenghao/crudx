import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import cn from 'classnames';
import NextLink from 'next/link';

import { BreadcrumbViewProps } from './props';
import { StyledChip } from './styled';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export const BreadcrumbView: React.FC<BreadcrumbViewProps> = (props) => {
  const {
    type = 'default',
    current,
    className,
    items = [],
    chipProps,
    textProps,
    linkProps,
    ...restProps
  } = props;

  // =============== VIEWS
  return (
    <Breadcrumbs
      className={cn('breadcrumb-view-wrapper', className)}
      {...restProps}
    >
      {items.map((e, i) => {
        const { url, label, icon } = e;
        const isMatched = current === url;

        // if display type = chip
        if (type === 'chip') {
          if (url && !isMatched) {
            return (
              <Link
                key={i}
                href={url}
                color="inherit"
                component={NextLink}
                {...linkProps}
              >
                <StyledChip icon={icon} label={label} {...chipProps} />
              </Link>
            );
          }
          return (
            <StyledChip
              key={i}
              icon={icon}
              label={label}
              {...chipProps}
              disabled={isMatched}
            />
          );
        }

        // if no url provided, then use typography instead
        if (!url) {
          return (
            <Typography
              key={i}
              sx={{ display: 'flex', alignItems: 'center' }}
              color="inherit"
              {...textProps}
            >
              {icon}
              {label}
            </Typography>
          );
        }

        // if url is provided
        return (
          <Link
            key={i}
            href={url}
            sx={{ display: 'flex', alignItems: 'center' }}
            color="inherit"
            underline="hover"
            component={NextLink}
            {...linkProps}
          >
            {icon}
            {label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

/**
 * ===========================
 * EXPORTS
 * ===========================
 */
export * from './props';
export default BreadcrumbView;
