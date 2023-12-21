const withLess = require("next-with-less");
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});
const basePath = require('./public/constants.js').basePath;

console.log('basePath', basePath)
console.log('assetPrefix', process.env.TARGET === 'gh-pages' ? basePath + '/' : undefined)

module.exports = withMDX(withLess({
  output: process.env.TARGET === 'gh-pages' ||
    process.env.EXPORT === 'true' ? 'export' : undefined,
  // distDir: process.env.TARGET === 'gh-pages' ? 'out' + basePath : undefined,
  assetPrefix: process.env.TARGET === 'gh-pages' ? basePath + '/' : undefined,
  basePath,
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true,
    },
  },
}));