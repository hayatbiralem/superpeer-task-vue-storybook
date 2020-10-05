module.exports = {
  // Is your Vue app not working in IE 11? Here’s how to fix it.
  // https://jacklyons.me/how-to-fix-vuejs-not-working-in-ie11/
  //   configureWebpack: {
  //     optimization: {
  //       runtimeChunk: "single",
  //       splitChunks: {
  //         chunks: "all",
  //         maxInitialRequests: Infinity,
  //         minSize: 0,
  //         cacheGroups: {
  //           vendor: {
  //             test: /[\\/]node_modules[\\/]/,
  //             name(module) {
  //               // get the name. E.g. node_modules/packageName/not/this/part.js
  //               // or node_modules/packageName
  //               const packageName = module.context.match(
  //                 /[\\/]node_modules[\\/](.*?)([\\/]|$)/
  //               )[1];
  //               // npm package names are URL-safe, but some servers don't like @ symbols
  //               return `npm.${packageName.replace("@", "")}`;
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
};
