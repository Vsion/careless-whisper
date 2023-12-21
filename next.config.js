const withLess = require("next-with-less");
const withMDX = require('@next/mdx')();

module.exports = withMDX(withLess({
  output: process.env.EXPORT === 'true' ? 'export' : undefined,
  // distDir: process.env.EXPORT === 'true' ? 'out' : undefined,
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true,
    },
  },
}));