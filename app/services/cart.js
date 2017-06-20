(function (angular) {
    'use strict';

    function constructor(){

        var _carItems = [];

        function addToCart(item){
            _carItems.push(item);
        }
        //exports
    }

    angular
        .module('shopping-cart')
        .service('Cart', constructor);

})(angular);