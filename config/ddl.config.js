// 第三方库 不打包
const vendors = {
  'react-router-dom': {
    amd: 'react-router-dom',
    root: 'ReactRouterDom',
    commonjs: 'react-router-dom',
    commonjs2: 'react-router-dom'
  },
  react: {
    amd: 'react',
    root: 'React',
    commonjs: 'react',
    commonjs2: 'react'
  },
  'react-dom': {
    amd: 'react-dom',
    root: 'ReactDOM',
    commonjs: 'react-dom',
    commonjs2: 'react-dom'
  }
}

module.exports = vendors;