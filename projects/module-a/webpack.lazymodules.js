const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const path = require('path');

module.exports = { /* ... */
    externals: {
        "zone.js": "Zone",
        "rxjs": "rxjs",
        "@angular/core": "ng.core",
        "@angular/common": "ng.common",
        "@angular/platform-browser": "ng.platformBrowser",
        "@angular/elements": "ng.elements"
    },
    entry: {
        lazy: './src/app/page2/page2.module.ts',
    },
    resolve: {
        mainFields: ['browser', 'module', 'main']
    },
    module: {
        rules: [
            { test: /\.ts$/, loaders: ['@ngtools/webpack'] },
            { test: /\.html$/, loader: 'html-loader', options: { minimize: true } },
            {
                test: /\.js$/,
                loader: '@angular-devkit/build-optimizer/webpack-loader',
                options: {
                    sourceMap: false
                }
            }
        ]
    },
    plugins: [
        new AngularCompilerPlugin({
            skipCodeGeneration: true,
            tsConfigPath: './tsconfig.lazymodules.json',
            entryModule: path.resolve(__dirname, './src/app/page2/page2.module#Page2Module')
        })
    ],
    mode: "production",
    output: {
        path: __dirname + '/dist/lazy',
        libraryTarget: "umd"
    },
}