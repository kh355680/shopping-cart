var shoppingCart = (function () {
    'use strict';

    constructor.$inject = ['$http']
    function constructor($http) {
        var vm = this;
        console.log('S');
        $http.get('mock/products.json').then(function (res) {
            vm.products = res.data;
            console.log(vm.products);
        });
    }

    return constructor;
});

