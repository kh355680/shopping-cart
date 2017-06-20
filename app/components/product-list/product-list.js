(function (angular) {
    'use strict';

    controllerFunction.$inject = ['$scope'];
    function controllerFunction($scope) {
        var vm = this;
    }

    function constructor() {

        return {
            restrict: 'E',
            replace: true,
            scope:{
                data:'='
            },
            templateUrl: 'app/components/product-list/product-list.html',
            controller: controllerFunction,
            controllerAs: 'vm'
        }
    }

    angular
        .module('shopping-cart')
        .directive('productList', constructor);

})(angular);