/**
 * Landing page for the @crudx example app.
 *
 * Replaces the original Nx-welcome boilerplate with a clean entry
 * point that explains what the project is and links into the
 * working CRUD demos.
 */

import { ReactNode } from 'react';
import ApiIcon from '@mui/icons-material/Api';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HubIcon from '@mui/icons-material/Hub';
import LaunchIcon from '@mui/icons-material/Launch';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import Link from 'next/link';

import { DemoAppBar, REPO_URL } from '../components';

type DemoCardProps = {
  badge: string;
  ui: 'MUI' | 'shadcn';
  title: string;
  tagline: string;
  packages: string[];
  href: string;
  icon: ReactNode;
  endpoint: string;
};

const DEMOS: DemoCardProps[] = [
  {
    badge: 'GraphQL',
    ui: 'MUI',
    title: 'GraphQL CRUD',
    tagline:
      'Apollo Client wired through @crudx/graphql against the public GraphQLZero API. Read, create, update, delete — all live, no auth.',
    packages: ['@crudx/core', '@crudx/graphql', '@crudx/mui'],
    href: '/test-crud-public-graphql',
    icon: <HubIcon fontSize="large" />,
    endpoint: 'graphqlzero.almansi.me/api',
  },
  {
    badge: 'GraphQL',
    ui: 'shadcn',
    title: 'GraphQL CRUD',
    tagline:
      'Same GraphQLZero CRUD flow, rendered through @crudx/shadcn (Tailwind + Radix). API-compatible with the MUI variant.',
    packages: ['@crudx/core', '@crudx/graphql', '@crudx/shadcn'],
    href: '/test-crud-public-graphql-shadcn',
    icon: <HubIcon fontSize="large" />,
    endpoint: 'graphqlzero.almansi.me/api',
  },
  {
    badge: 'REST',
    ui: 'MUI',
    title: 'REST CRUD',
    tagline:
      'TanStack Query wired through @crudx/rest against the public JSONPlaceholder API. Mutations auto-invalidate the list cache via the adapter.',
    packages: ['@crudx/core', '@crudx/rest', '@crudx/mui'],
    href: '/test-crud-public-rest',
    icon: <ApiIcon fontSize="large" />,
    endpoint: 'jsonplaceholder.typicode.com',
  },
  {
    badge: 'REST',
    ui: 'shadcn',
    title: 'REST CRUD',
    tagline:
      'Same JSONPlaceholder CRUD flow, rendered through @crudx/shadcn (Tailwind + Radix). Drop-in alternative to the MUI variant.',
    packages: ['@crudx/core', '@crudx/rest', '@crudx/shadcn'],
    href: '/test-crud-public-rest-shadcn',
    icon: <ApiIcon fontSize="large" />,
    endpoint: 'jsonplaceholder.typicode.com',
  },
];

const PACKAGES: { name: string; description: string }[] = [
  {
    name: '@crudx/core',
    description:
      'Transport-agnostic CRUD orchestration: schema slots, paging strategies, mutation callbacks. No transport dependency.',
  },
  {
    name: '@crudx/common',
    description:
      'Shared hooks and utilities (pagination, row selection, formatting) consumed by the UI packages.',
  },
  {
    name: '@crudx/graphql',
    description:
      'GraphQL transport adapter on top of Apollo Client. Identity helpers + Apollo-narrowed type aliases.',
  },
  {
    name: '@crudx/rest',
    description:
      'REST transport adapter on top of TanStack Query. Cache invalidation, offset / cursor pagination presets.',
  },
  {
    name: '@crudx/mui',
    description:
      'Material UI + Emotion implementation of the CRUD surface (CrudPanelView, CrudTableView, …).',
  },
  {
    name: '@crudx/shadcn',
    description:
      'Tailwind + Radix (shadcn-style) implementation of the same surface; API-compatible with @crudx/mui.',
  },
];

function DemoCard(props: DemoCardProps) {
  const { badge, ui, title, tagline, packages, href, icon, endpoint } = props;

  return (
    <Card
      variant="outlined"
      sx={{
        height: '100%',
        transition: 'border-color 120ms, transform 120ms',
        '&:hover': { borderColor: 'primary.main', transform: 'translateY(-2px)' },
      }}
    >
      <CardActionArea
        component={Link}
        href={href}
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            flex: 1,
            width: '100%',
          }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 1.5,
                bgcolor: 'primary.50',
                color: 'primary.main',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              {icon}
            </Box>
            <Box>
              <Stack direction="row" spacing={0.75} alignItems="center">
                <Chip size="small" label={badge} color="primary" />
                <Chip
                  size="small"
                  label={ui}
                  variant="outlined"
                  sx={{ fontFamily: 'monospace' }}
                />
              </Stack>
              <Typography variant="h6" sx={{ mt: 0.5, fontWeight: 700 }}>
                {title}
              </Typography>
            </Box>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            {tagline}
          </Typography>
          <Box sx={{ flex: 1 }} />
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {packages.map((p) => (
              <Chip key={p} size="small" label={p} variant="outlined" />
            ))}
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mt: 1 }}
          >
            <Typography variant="caption" color="text.secondary">
              Endpoint: {endpoint}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Typography variant="button" color="primary.main">
                Open demo
              </Typography>
              <ArrowForwardIcon fontSize="small" color="primary" />
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function Index() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
      <DemoAppBar />
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        {/* HERO */}
        <Stack spacing={3} sx={{ mb: { xs: 6, md: 10 } }}>
          <Chip
            label="Transport-agnostic CRUD primitives for React"
            color="primary"
            variant="outlined"
            sx={{ alignSelf: 'flex-start' }}
          />
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              letterSpacing: '-0.02em',
              fontSize: { xs: '2.25rem', md: '3.5rem' },
              lineHeight: 1.1,
            }}
          >
            CRUD apps without the wiring tax.
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 720, fontWeight: 400 }}
          >
            <code>@crudx</code> gives you a tiny core that orchestrates list,
            detail, create, update, and delete operations — and pluggable
            transport adapters so you can ship the same UI on top of GraphQL,
            REST, or anything you wire up next.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              component={Link}
              href="/test-crud-public-graphql"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
            >
              Try the GraphQL demo
            </Button>
            <Button
              component={Link}
              href="/test-crud-public-rest"
              variant="outlined"
              size="large"
              endIcon={<ArrowForwardIcon />}
            >
              Try the REST demo
            </Button>
            <Button
              component="a"
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              size="large"
              endIcon={<LaunchIcon />}
            >
              View on GitHub
            </Button>
          </Stack>
        </Stack>

        {/* DEMO CARDS */}
        <Box sx={{ mb: { xs: 6, md: 10 } }}>
          <Typography variant="overline" color="text.secondary">
            Live demos
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mt: 0.5 }}
          >
            Pick your transport, pick your UI
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3, mt: 1 }}>
            The same CRUD orchestration, four entry points: GraphQL or REST,
            Material UI or shadcn/ui — fully interchangeable.
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 3,
            }}
          >
            {DEMOS.map((d) => (
              <DemoCard key={d.href} {...d} />
            ))}
          </Box>
        </Box>

        {/* PACKAGES */}
        <Box sx={{ mb: { xs: 6, md: 10 } }}>
          <Typography variant="overline" color="text.secondary">
            Packages
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, mt: 0.5 }}>
            Six packages, one mental model
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                md: '1fr 1fr 1fr',
              },
              gap: 2,
            }}
          >
            {PACKAGES.map((pkg) => (
              <Card key={pkg.name} variant="outlined">
                <CardContent>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: 700, fontFamily: 'monospace' }}
                  >
                    {pkg.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    {pkg.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* FOOTER */}
        <Box
          sx={{
            borderTop: 1,
            borderColor: 'divider',
            pt: 4,
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="caption" color="text.secondary">
            MIT licensed · maintained by{' '}
            <a
              href="https://github.com/louiskhenghao"
              target="_blank"
              rel="noreferrer"
            >
              louiskhenghao
            </a>
          </Typography>
          <Typography variant="caption" color="text.secondary">
            <a href={REPO_URL} target="_blank" rel="noreferrer">
              github.com/louiskhenghao/crudx
            </a>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Index;
