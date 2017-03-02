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
    }
  }
}
