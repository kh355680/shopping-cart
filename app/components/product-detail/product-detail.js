(function (angular) {
    'use strict';

    function controllerFunction($scope, Cart) {
        var vm = this;

        vm.addToCart = function (item) {
            Cart.addToCart(item);
        }
    }

    function constructor() {

        return {
            restrict: 'E',
            replace: true,
            scope: {
                info: '=',
                add: '&'
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