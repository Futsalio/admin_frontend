const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      "@primary-color": "#FF4D3D",
      "@font-size-base": "14px",
      "@layout-body-background": "#f8f8f8",
      // "@layout-sider-background": "#555555",
      // "@menu-dark-bg": "#555555"
    },
  })(config, env);
  return config;
};


// #E84855 RED
// #e64637 old futsalio
