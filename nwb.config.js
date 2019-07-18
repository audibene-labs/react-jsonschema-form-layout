module.exports = {
  type: 'react-component',
  babel: {
    presets: ['es2015', 'stage-0', 'react']
  },
  npm: {
    esModules: true,
    umd: true
  },
  webpack: {
    html: {
      template: `demo/src/index.html`
    },
    extra: {
      externals: [
        'react-bootstrap',
        'react-jsonschema-form',
        'react-addons-create-fragment',
        'react-addons-transition-group',
        {
          react: {
            root: 'React',
            commonjs2: './react',
            commonjs: ['./react'],
            amd: 'react',
          },
        },
        {
          'react-dom': {
            root: 'ReactDOM',
            commonjs2: './react-dom',
            commonjs: ['./react-dom'],
            amd: 'react-dom',
          },
        }
      ]
    }
  }
}
