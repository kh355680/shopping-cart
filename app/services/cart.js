(function (angular) {
    'use strict';

    function constructor($rootScope) {

        var _carItems = [];

        function addToCart(item) {
            _carItems.push(item);
            $rootScope.$broadcast('event:show', { some: getTotal() });
        }

        function getCartItems() {
            return _carItems;
        }

        function getTotal() {
            var sum = 0;
            _carItems.forEach(function (item) {
                sum += item.price;
            });
            return sum;
        }
        //exports
        this.addToCart = addToCart;
        this.getCartItems = getCartItems;
        this.getTotal = getTotal;
    }

    angular
        .module('shopping-cart')
        .service('Cart', constructor);

})(angular);