const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    watch: true,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style-loader!css-loader"
        },{ 
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" 
        },
        { 
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" 
        },{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          }]
    }
};

