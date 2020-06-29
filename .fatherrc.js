export default {
  esm: 'rollup',
  cjs: 'rollup',
  entry:"src/index.tsx",
  cssModules: {
    camelCase: true
  },
  extractCSS:true,
  extraBabelPlugins: [
    ['babel-plugin-import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }]
  ]
}
