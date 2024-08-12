const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'mf-shopping',

  exposes: {
    //'./Component': './src/app/app.component.ts',
    //'.Module': './src/app/app.module.ts',
    "./ProductsModule": "./src/app/products/products.module.ts",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
