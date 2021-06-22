const merge = require('webpack-merge');

module.exports = merge(require('./webpack.config.base'), {
    externals: {
        "react": "react",
        "react-dom": "react-dom",
        "prop-types": "prop-types",
    }
});
