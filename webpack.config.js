module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["env", "stage-0", "react"]
                }
            }
        ]
    },
    resolve: {
        alias: {
            "react-native": "react-native-web"
        }
    }
};
