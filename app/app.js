(function (angular) {
    'use strict';

    run.$inject = ['$log'];
    function run($log) {
        $log.info('message');
    }

    function configuration() {

    }

    angular
        .module('shopping-cart', [])
        .config(configuration)
        .run(run);

})(angular);