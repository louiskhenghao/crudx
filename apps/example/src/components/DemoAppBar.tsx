/**
 * DemoAppBar
 * --------------------------------
 *
 * Lightweight top bar shared by every demo page. Gives visitors a way
 * back to the landing page and a link to the GitHub repo without
 * having to retype URLs.
 */

import { ReactNode } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  AppBar,
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import Link from 'next/link';

export type DemoAppBarProps = {
  /** Short label rendered next to the brand mark — e.g. "GraphQL CRUD". */
  context?: string;
  /** Optional content rendered inline at the right of the bar. */
  actions?: ReactNode;
};

export const REPO_URL = 'https://github.com/louiskhenghao/crudx';

export function DemoAppBar({ context, actions }: DemoAppBarProps) {
  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{
        backdropFilter: 'saturate(180%) blur(8px)',
        backgroundColor: 'rgba(255,255,255,0.85)',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg" disableGutters>
        <Toolbar sx={{ gap: 2 }}>
          <Link
            href="/"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: 1,
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  display: 'grid',
                  placeItems: 'center',
                  fontWeight: 700,
                  fontSize: 14,
                  lineHeight: 1,
                }}
              >
                cx
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                @crudx
              </Typography>
            </Box>
          </Link>
          {context ? (
            <Chip size="small" label={context} variant="outlined" />
          ) : null}
          <Box sx={{ flex: 1 }} />
          {actions}
          <Button component={Link} href="/" size="small" variant="text">
            Demos
          </Button>
          <Tooltip title="View source on GitHub">
            <IconButton
              component="a"
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              size="small"
              aria-label="GitHub"
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default DemoAppBar;
