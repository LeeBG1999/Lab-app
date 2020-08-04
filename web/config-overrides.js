const {
    override,
    fixBabelImports,
    overrideDevServer,
} = require('customize-cra');
const fs = require('fs');
const path = require('path');

const configureHttps = () => config => {
    return {
        ...config,
        https: {
            key: fs.readFileSync(
                path.resolve(__dirname, './cert/localhost-key.pem'),
            ),
            cert: fs.readFileSync(
                path.resolve(__dirname, './cert/localhost.pem'),
            ),
        },
    };
};

module.exports = {
    webpack: override(
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css',
        }),
        fixBabelImports('formik-antd', {
            libraryName: '@jbuschke/formik-antd',
            libraryDirectory: 'es',
            style: 'css',
        })
    ),
    devServer: overrideDevServer(
        // dev server plugin
        configureHttps(),
    ),
};
