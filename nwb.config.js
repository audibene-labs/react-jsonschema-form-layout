module.exports = {
  type: 'react-component',
  babel: {
    presets: ['es2015', 'stage-0', 'react']
  },
  npm: {
    esModules: true,
    umd: false
  },
  webpack: {
    html: {
      template: `demo/src/index.html`
    },
    uglify: {
      sourceMap: false,
      mangle: false,
      comments: false,
      compress: {
        screw_ie8: false,
        sequences: false,
        properties: false,
        dead_code: false,
        drop_debugger: true,
        unsafe: false,
        conditionals: false,
        comparisons: false,
        evaluate: false,
        booleans: false,
        loops: false,
        unused: false,
        hoist_funs: false,
        hoist_vars: false,
        if_return: false,
        join_vars: false,
        cascade: false,
        warnings: false,
        negate_iife: false,
        pure_getters: false,
        pure_funcs: false,
        drop_console: true,
        keep_fargs: false,
        keep_fnames: false
      }
    }
  }
}
