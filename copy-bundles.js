//
// This script copies over UMD bundles to the project's assets folder
// It's called by the npm script npx-build-plus:copy-assets
// If you call it manually, call it from your projects root
// > node /copy-bundles.js
//

const copy = require('copy');

console.log('Copy UMD bundles ...');

copy('node_modules/@webcomponents/**/*.js', 'src/assets/vendors/webcomponents', {}, _ => {});
copy('node_modules/@angular/*/bundles/*.js', 'src/assets/vendors/angular', {}, _ => {});
copy('node_modules/rxjs/bundles/*.js', 'src/assets/vendors/rxjs', {}, _ => {});
copy('node_modules/zone.js/dist/*.js', 'src/assets/vendors/zone.js', {}, _ => {});
copy('node_modules/core-js/client/*.js', 'src/assets/vendors/core-js', {}, _ => {});