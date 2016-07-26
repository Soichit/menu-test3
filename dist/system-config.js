// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    'firebase': 'vendor/firebase/firebase.js',
    'angularfire2': 'vendor/angularfire2',
    '@angular2-material': 'vendor/@angular2-material',
    'ng2-charts': 'vendor/ng2-charts',
    'chart.js': 'node_modules/chart.js'
};
/** User packages configuration. */
var packages = {
    angularfire2: {
        defaultExtension: 'js',
        main: 'angularfire2.js'
    },
    'ng2-charts': {
        main: 'bundles/ng2-charts.min.js'
    },
    'chart.js': {
        defaultExtension: 'js',
        main: 'src/chart.js' // you can also use core.umd.js here, if you want faster loads
    }
};
// material design packages
var materialPkgs = [
    'core',
    'button',
    'card',
    'icon',
    'list',
    'toolbar',
    'checkbox',
    'grid-list',
    'input',
    'progress-bar',
    'progress-circle',
    'radio',
    'sidenav',
    'slide-toggle',
    'tabs'
];
materialPkgs.forEach(function (pkg) {
    packages[("@angular2-material/" + pkg)] = {
        format: 'cjs',
        defaultExtension: 'js',
        main: pkg + ".js"
    };
});
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/forms',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/shared',
    'app/menu',
    'app/menu/food-detail',
    'app/menu/food-list',
    'app/menu/food-type',
    'app/menu/food-types-list',
    'app/menu/food-items-list',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map