//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

// `NEXT_PUBLIC_BASE_PATH` is set by the GitHub Pages deploy workflow
// (`/crudx`) and left empty for local dev. When it's set we treat the
// build as a static export: image optimization is disabled and the
// asset/base prefixes line up with the deployed sub-path.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  images: {
    unoptimized: !!basePath,
    domains: [process.env.NEXT_PUBLIC_API ?? ''],
  },
  ...(basePath
    ? { basePath, assetPrefix: basePath, trailingSlash: true }
    : {}),
  compiler: {
    // For other options, see https://nextjs.org/docs/architecture/nextjs-compiler#emotion
    emotion: true,
  },
  // Render docs by importing raw .md content (CONTRIBUTING.md, the
  // adapters guide, etc.) and feeding it to `react-markdown`. The
  // `asset/source` rule turns each `.md` import into its UTF-8 string.
  // The `?raw` query rule does the same for any other file — used by
  // the in-page "view source" panel on the demo pages.
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source',
    });
    config.module.rules.push({
      resourceQuery: /raw/,
      type: 'asset/source',
    });
    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
