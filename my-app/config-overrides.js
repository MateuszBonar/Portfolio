const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    Assets: "src/assets",
    Components: "src/components",
    Utils: "src/utils",
    Constants: "src/constants",
  })(config);

  return config;
};
