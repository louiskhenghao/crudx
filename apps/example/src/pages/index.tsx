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
  alpha,
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

/**
 * --------------------------
 * Visual theming per quadrant
 * --------------------------
 *
 * Each (transport, ui) combination gets its own colour pair so the
 * four cards read at a glance. Transport colour follows convention
 * (Apollo pink for GraphQL, amber for REST). UI colour distinguishes
 * MUI (Material blue) from shadcn (zinc/black).
 */
type Transport = 'GraphQL' | 'REST';
type Ui = 'MUI' | 'shadcn';

const TRANSPORT_COLOR: Record<Transport, string> = {
  GraphQL: '#E535AB', // Apollo pink
  REST: '#F76707', // amber-orange
};

const UI_COLOR: Record<Ui, string> = {
  MUI: '#1976D2', // Material blue
  shadcn: '#18181B', // zinc-900
};

type DemoCardProps = {
  badge: Transport;
  ui: Ui;
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
    title: 'GraphQL · Material UI',
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
    title: 'GraphQL · shadcn/ui',
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
    title: 'REST · Material UI',
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
    title: 'REST · shadcn/ui',
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

/**
 * Tiny mock UI rendered inside each demo card so the visual identity
 * of the chosen UI library reads at a glance — rounded blue MUI
 * controls vs. sharp zinc shadcn controls.
 */
function UiPreview({ ui, transport }: { ui: Ui; transport: Transport }) {
  const transportColor = TRANSPORT_COLOR[transport];

  if (ui === 'MUI') {
    return (
      <Box
        sx={{
          borderRadius: 2,
          border: 1,
          borderColor: alpha(UI_COLOR.MUI, 0.2),
          bgcolor: alpha(UI_COLOR.MUI, 0.04),
          p: 1.5,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            <Box
              sx={{
                width: 36,
                height: 8,
                borderRadius: '999px',
                bgcolor: alpha(UI_COLOR.MUI, 0.4),
              }}
            />
            <Box
              sx={{
                width: 24,
                height: 8,
                borderRadius: '999px',
                bgcolor: alpha(UI_COLOR.MUI, 0.2),
              }}
            />
          </Box>
          <Box
            sx={{
              fontSize: 10,
              fontWeight: 700,
              borderRadius: '999px',
              px: 1,
              py: 0.25,
              bgcolor: UI_COLOR.MUI,
              color: '#fff',
              boxShadow: 1,
            }}
          >
            CREATE
          </Box>
        </Box>
        {[0, 1, 2].map((i) => (
          <Box
            key={i}
            sx={{
              display: 'flex',
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '999px',
                bgcolor: alpha(transportColor, 0.18),
                border: 1,
                borderColor: alpha(transportColor, 0.45),
              }}
            />
            <Box
              sx={{
                flex: 1,
                height: 6,
                borderRadius: '999px',
                bgcolor: alpha(UI_COLOR.MUI, 0.12),
              }}
            />
            <Box
              sx={{
                width: 30,
                height: 6,
                borderRadius: '999px',
                bgcolor: alpha(UI_COLOR.MUI, 0.18),
              }}
            />
          </Box>
        ))}
      </Box>
    );
  }

  // shadcn variant — sharper, monospace, zinc-toned
  return (
    <Box
      sx={{
        borderRadius: 1,
        border: 1,
        borderColor: alpha(UI_COLOR.shadcn, 0.18),
        bgcolor: alpha(UI_COLOR.shadcn, 0.03),
        p: 1.5,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        fontFamily: 'monospace',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Box sx={{ display: 'flex', gap: 0.5 }}>
          <Box
            sx={{
              width: 36,
              height: 8,
              borderRadius: 0.5,
              bgcolor: alpha(UI_COLOR.shadcn, 0.6),
            }}
          />
          <Box
            sx={{
              width: 24,
              height: 8,
              borderRadius: 0.5,
              bgcolor: alpha(UI_COLOR.shadcn, 0.25),
            }}
          />
        </Box>
        <Box
          sx={{
            fontSize: 10,
            fontWeight: 600,
            borderRadius: 0.75,
            px: 1,
            py: 0.25,
            bgcolor: UI_COLOR.shadcn,
            color: '#fff',
          }}
        >
          + create
        </Box>
      </Box>
      {[0, 1, 2].map((i) => (
        <Box
          key={i}
          sx={{
            display: 'flex',
            gap: 1,
            alignItems: 'center',
            borderTop: i === 0 ? 0 : '1px dashed',
            borderColor: alpha(UI_COLOR.shadcn, 0.12),
            pt: i === 0 ? 0 : 0.75,
          }}
        >
          <Box
            sx={{
              width: 12,
              height: 12,
              borderRadius: 0.5,
              bgcolor: alpha(transportColor, 0.18),
              border: 1,
              borderColor: alpha(transportColor, 0.5),
            }}
          />
          <Box
            sx={{
              flex: 1,
              height: 6,
              borderRadius: 0.5,
              bgcolor: alpha(UI_COLOR.shadcn, 0.18),
            }}
          />
          <Box
            sx={{
              width: 30,
              height: 6,
              borderRadius: 0.5,
              bgcolor: alpha(UI_COLOR.shadcn, 0.32),
            }}
          />
        </Box>
      ))}
    </Box>
  );
}

function DemoCard(props: DemoCardProps) {
  const { badge, ui, title, tagline, packages, href, icon, endpoint } = props;
  const transportColor = TRANSPORT_COLOR[badge];
  const uiColor = UI_COLOR[ui];
  const isShadcn = ui === 'shadcn';

  return (
    <Card
      variant="outlined"
      sx={{
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: isShadcn ? 1 : 2,
        borderColor: alpha(transportColor, 0.25),
        transition: 'border-color 120ms, transform 120ms, box-shadow 120ms',
        '&:hover': {
          borderColor: transportColor,
          transform: 'translateY(-2px)',
          boxShadow: `0 8px 24px ${alpha(transportColor, 0.18)}`,
        },
        // Coloured stripe indicating the transport
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          height: 4,
          bottom: 'auto',
          background: `linear-gradient(90deg, ${transportColor} 0%, ${uiColor} 100%)`,
        },
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
            pt: 3, // breathing room below the gradient stripe
          }}
        >
          {/* Header row — icon + tags + title */}
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: isShadcn ? 1 : 1.5,
                bgcolor: alpha(transportColor, 0.12),
                color: transportColor,
                display: 'grid',
                placeItems: 'center',
              }}
            >
              {icon}
            </Box>
            <Box sx={{ minWidth: 0 }}>
              <Stack direction="row" spacing={0.75} alignItems="center">
                <Chip
                  size="small"
                  label={badge}
                  sx={{
                    bgcolor: transportColor,
                    color: '#fff',
                    fontWeight: 700,
                    height: 22,
                  }}
                />
                <Chip
                  size="small"
                  label={ui}
                  variant="outlined"
                  sx={{
                    fontFamily: 'monospace',
                    height: 22,
                    borderColor: uiColor,
                    color: uiColor,
                    bgcolor: alpha(uiColor, 0.04),
                    borderRadius: isShadcn ? 0.5 : '999px',
                    borderStyle: isShadcn ? 'dashed' : 'solid',
                  }}
                />
              </Stack>
              <Typography
                variant="h6"
                sx={{
                  mt: 0.5,
                  fontWeight: 700,
                  fontFamily: isShadcn ? 'monospace' : undefined,
                }}
              >
                {title}
              </Typography>
            </Box>
          </Stack>

          {/* UI preview tile */}
          <UiPreview ui={ui} transport={badge} />

          {/* Tagline */}
          <Typography variant="body2" color="text.secondary">
            {tagline}
          </Typography>

          <Box sx={{ flex: 1 }} />

          {/* Package chips */}
          <Stack direction="row" spacing={0.75} flexWrap="wrap" useFlexGap>
            {packages.map((p) => (
              <Chip
                key={p}
                size="small"
                label={p}
                variant="outlined"
                sx={{
                  fontFamily: 'monospace',
                  fontSize: 11,
                  height: 20,
                  borderRadius: isShadcn ? 0.5 : '999px',
                }}
              />
            ))}
          </Stack>

          {/* Footer row — endpoint + open demo */}
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mt: 1 }}
          >
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ fontFamily: 'monospace' }}
            >
              {endpoint}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Typography
                variant="button"
                sx={{ color: transportColor, fontWeight: 700 }}
              >
                Open demo
              </Typography>
              <ArrowForwardIcon fontSize="small" sx={{ color: transportColor }} />
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
              sx={{
                bgcolor: TRANSPORT_COLOR.GraphQL,
                '&:hover': { bgcolor: alpha(TRANSPORT_COLOR.GraphQL, 0.9) },
              }}
            >
              Try the GraphQL demo
            </Button>
            <Button
              component={Link}
              href="/test-crud-public-rest"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: TRANSPORT_COLOR.REST,
                '&:hover': { bgcolor: alpha(TRANSPORT_COLOR.REST, 0.9) },
              }}
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
          <Typography variant="h4" sx={{ fontWeight: 700, mt: 0.5 }}>
            Pick your transport, pick your UI
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 3, mt: 1 }}
          >
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

        {/* COMPONENT REFERENCE */}
        <Box sx={{ mb: { xs: 6, md: 10 } }}>
          <Typography variant="overline" color="text.secondary">
            Component reference
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, mt: 0.5 }}>
            Browse every component, live
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 3, mt: 1 }}
          >
            Each UI library exports the same 16 building blocks —{' '}
            <code>BreadcrumbView</code>, <code>Table</code>,{' '}
            <code>TabView</code>, <code>Dialog</code>, and friends. Render
            them live with copy-pasteable JSX.
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 3,
            }}
          >
            <Card
              variant="outlined"
              sx={{
                borderRadius: 2,
                borderColor: alpha(UI_COLOR.MUI, 0.3),
                transition: 'border-color 120ms, transform 120ms',
                '&:hover': {
                  borderColor: UI_COLOR.MUI,
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <CardActionArea
                component={Link}
                href="/components-mui"
                sx={{ p: 2 }}
              >
                <CardContent>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ mb: 1 }}
                  >
                    <Chip
                      size="small"
                      label="@crudx/mui"
                      sx={{
                        bgcolor: UI_COLOR.MUI,
                        color: '#fff',
                        fontWeight: 700,
                        height: 22,
                      }}
                    />
                    <Chip
                      size="small"
                      label="16 components"
                      variant="outlined"
                      sx={{ height: 22, fontFamily: 'monospace' }}
                    />
                  </Stack>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Material UI components
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    BreadcrumbView, ButtonDropdown, Dialog, Table, TabView,
                    TooltipView and the rest — all rendered with their
                    JSX snippet.
                  </Typography>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={0.5}
                    sx={{ mt: 2, color: UI_COLOR.MUI }}
                  >
                    <Typography variant="button" sx={{ fontWeight: 700 }}>
                      Open reference
                    </Typography>
                    <ArrowForwardIcon fontSize="small" />
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card
              variant="outlined"
              sx={{
                borderRadius: 1,
                borderColor: alpha(UI_COLOR.shadcn, 0.3),
                transition: 'border-color 120ms, transform 120ms',
                '&:hover': {
                  borderColor: UI_COLOR.shadcn,
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <CardActionArea
                component={Link}
                href="/components-shadcn"
                sx={{ p: 2 }}
              >
                <CardContent>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ mb: 1 }}
                  >
                    <Chip
                      size="small"
                      label="@crudx/shadcn"
                      sx={{
                        bgcolor: UI_COLOR.shadcn,
                        color: '#fff',
                        fontWeight: 700,
                        height: 22,
                        borderRadius: 0.5,
                      }}
                    />
                    <Chip
                      size="small"
                      label="16 components"
                      variant="outlined"
                      sx={{
                        height: 22,
                        fontFamily: 'monospace',
                        borderRadius: 0.5,
                        borderStyle: 'dashed',
                      }}
                    />
                  </Stack>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, fontFamily: 'monospace' }}
                  >
                    shadcn/ui components
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    API-compatible Tailwind + Radix variants — same names,
                    same callback shapes, same example coverage.
                  </Typography>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={0.5}
                    sx={{ mt: 2, color: UI_COLOR.shadcn }}
                  >
                    <Typography variant="button" sx={{ fontWeight: 700 }}>
                      Open reference
                    </Typography>
                    <ArrowForwardIcon fontSize="small" />
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
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
