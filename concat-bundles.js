const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    
    const files = [
        './src/assets/vendors/webcomponents/custom-elements/src/native-shim.js',
        './src/assets/vendors/webcomponents/custom-elements/custom-elements.min.js',
        './src/assets/vendors/core-js/core.js',
        './src/assets/vendors/zone.js/zone.js',
        './src/assets/vendors/rxjs/rxjs.umd.js',
        //
        //  TODO:
        //  - "core" library can't be considered as external otherwise all lazy load modules are removed as well
        //  - we should keep it like that or create lazy module by ourself in webpack config
        //
        './src/assets/vendors/angular/core/bundles/core.umd.js',
        './src/assets/vendors/angular/common/bundles/common.umd.js',
        './src/assets/vendors/angular/platform-browser/bundles/platform-browser.umd.js',
        './src/assets/vendors/angular/elements/bundles/elements.umd.js',
    ]

    const minifiedFiles = [
        './src/assets/vendors/webcomponents/custom-elements/src/native-shim.js',
        './src/assets/vendors/webcomponents/custom-elements/custom-elements.min.js',
        './src/assets/vendors/core-js/core.min.js',
        './src/assets/vendors/zone.js/zone.min.js',
        './src/assets/vendors/rxjs/rxjs.umd.min.js',
        //
        //  TODO:
        //  - "core" library can't be considered as external otherwise all lazy load modules are removed as well
        //  - we should keep it like that or create lazy module by ourself in webpack config
        //
        './src/assets/vendors/angular/core/bundles/core.umd.min.js',
        './src/assets/vendors/angular/common/bundles/common.umd.min.js',
        './src/assets/vendors/angular/platform-browser/bundles/platform-browser.umd.min.js',
        './src/assets/vendors/angular/elements/bundles/elements.umd.min.js',
    ]

    await fs.ensureDir('src/assets/vendors');

    await concat(files, 'dist/shell/assets/vendors/umd.vendors.js');
})();