(function (angular) {
    'use strict';

    function controllerFunction($scope) {
        var vm = this;
    }

    function constructor() {

        return {
            restrict: 'E',
            replace: true,
            scope: {
                info: '='
            },
            templateUrl: 'app/components/product-detail/product-detail.html',
            controller: controllerFunction,
            controllerAs: 'vm'
        }
    }

    angular
        .module('shopping-cart')
        .directive('productDetail', constructor);

})(angular);