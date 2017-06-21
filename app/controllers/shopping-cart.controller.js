(function () {
    'use strict';

    constructor.$inject = ['$scope', '$http', 'Cart'];
    function constructor($scope, $http, Cart) {
        var vm = this;
        $http.get('mock/products.json').then(function (res) {
            vm.products = res.data;
        });

        $scope.$on('event:show', function (event, data) {
            $scope.total = data.some;
        })
    }

    angular
        .module('shopping-cart')
        .controller('ShoppingCartController', constructor);

})();