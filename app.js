angular.module('stripeMenu', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('stripeMenu').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.
        state('home', {
            url:'/home',
            views:{
                '@':{
                    templateUrl: 'partial/menu-header/menu-header.html',
                    // controller: 'MenuHeaderCtrl as vm'
                }
            }
        });

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('stripeMenu').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
