const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: [
          // '/',
          // '/about',
          // '/contact',
          // '/binary-decimal-conversion',
          // '/hexadecimal-decimal-conversion',
          // '/hexadecimal-decimal-conversion',
          // '/ieee-754-conversion',
          // '/ones-and-twos-complement-conversion',
          // '/binary-addition-conversion',
          // '/binary-to-decimal-explanation',
          // '/decimal-to-binary-explanation',
          // '/decimal-to-hex-explanation',
          // '/hex-to-decimal-explanation',
          // '/ieee754-explanation',
          // '/ones-complement-explanation',
          // '/binary-addition-explanation',
          // '/binary-practice-problems',
          // '/hexadecimal-practice-problems',
          // '/ieee-754-practice-problems',
          // '/ones-and-twos-complement-practice-problems',
          // '/binary-addition-practice-problems'
        ]
      })
    ]
  }
}
