var webpack = require('webpack');

module.exports = {
    entry: {
        'app': './assets/app/main.ts'
    },

    resolve: {
        extensions: ['.js', '.ts'],
        alias: {
        // NOTE: You should set 'highcharts/highcharts.src.js'
        // if you are not going to use <chart type="StockChart"
        highcharts$: "highcharts/highstock.src.js"
        }
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader' }]
            },
            {
                test: /\.css$/,
                use: [{ loader: 'raw-loader' }]
            }
        ],
        exprContextCritical: false

    }
};
