const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;

// just attempt

module.exports = { /* ... */
    externals: {
        "zone.js": "Zone",
        "rxjs": "rxjs",
        "@angular/core": "ng.core",
        "@angular/common": "ng.common",
        "@angular/platform-browser": "ng.platformBrowser",
        "@angular/elements": "ng.elements"
    },
    entry: ['./src/app/page2/page2.module.ts'],
    module: {
        rules: [
            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                loader: '@ngtools/webpack'
            }
        ]
    },

    plugins: [
        new AngularCompilerPlugin({
            tsConfigPath: './tsconfig.app.json',
            entryModule: 'src/app/page2/page2.module.ts#Page2Module',
            sourceMap: true
        })
    ]
}