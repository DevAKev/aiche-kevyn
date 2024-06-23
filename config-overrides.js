const path = require("path");
const { override, addWebpackAlias } = require("customize-cra");

module.exports = override(
  addWebpackAlias({
    "@assets": path.resolve(__dirname, "src/assets"),
    "@components": path.resolve(__dirname, "src/components"),
    "@hooks": path.resolve(__dirname, "src/hooks"),
    "@pages": path.resolve(__dirname, "src/pages"),
    "@styles": path.resolve(__dirname, "src/styles"),
  })
);

// ### Alias Path :
// - @assets: src/assets
// - @components: src/components
// - @hooks: src/hooks
// - @pages: src/pages
// - @styles: src/styles
