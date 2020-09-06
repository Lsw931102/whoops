/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
 
exports.modifyWebpackConfig = ({ config, stage }) => {
    if (stage === 'build-javascript') {
        const timestamp = Date.now();
 
        config.merge({
            devtool: false,
            output: {
                filename: `name-${timestamp}-[chunkhash].js`,
                chunkFilename: `name-${timestamp}-[chunkhash].js`
            }
        });
    }
 
    return config;
};
