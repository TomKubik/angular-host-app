const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;

module.exports = {
    "externals": {
        "zone.js": "Zone",
        "rxjs": "rxjs",
        "@angular/core": "ng.core",
        "@angular/common": "ng.common",
        "@angular/platform-browser": "ng.platformBrowser",
        "@angular/elements": "ng.elements"
    },
    "entry": {
        "non-working-lazy-bundle": "./src/app/page2/page2.module.ts"
    },
}