module.config = {
    // ...
    entry: [
        // converted entry to an array
        // to allow me to unshift the client later
        path.resolve(__dirname, '../src/index.js')
    ],
    // ...
    module: {
        loaders: {
// ...

            // Use style loader instead of ExtractTextPlugin
            // To allow for style injection / hot reloading css
            exclude: /node_modules/,
            loaders: ['style', 'css', 'postcss', 'sass'],
            test: /\.scss$/
        },
// ...

    }
}