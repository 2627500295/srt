const alias = require('rollup-plugin-alias');
const path = require('path');

module.exports = {
    rollup(config) {
        config.plugins.push(
            alias({
                resolve: ['.jsx', '.js', '.ts', '.tsx', '.json'],
                
                entries: [
                    { 
                        find: '@', 
                        replacement: path.resolve(__dirname, 'src/') 
                    },
                ],
            })
        );

        return config;
    },
};
