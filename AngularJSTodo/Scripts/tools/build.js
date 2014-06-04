({
    appDir: '../app',
    baseUrl: '../',
    dir: '../build',
    paths: {
        jquery: 'lib/jquery-1.9.1.min',
        angular: 'lib/angular.min',
        angularResource: 'lib/angular-resource.min',
        angularRoute: 'lib/angular-route.min',
        mainApp: 'app/app.annotate',
        main: 'app/main.annotate'
    },
    shim: {
        jquery: { exports: 'jquery' },
        angular: { exports: 'angular' },
        angularResource: ['angular'],
        angularRoute: ['angular']
    },
    modules: [
        {
            name: 'main'
        }
    ],
    optimize: 'uglify2',
    uglify2: {
        mangle: false
    },
    preserveLicenseComments: false,
    wrap: true,
    optimizeCss: "standard",
    removeCombined: true,


})