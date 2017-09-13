angular.module('shadeApp').service('mainService',function($http){
    this.getMakeup = function () {
        var promise = $http({
            method:'GET', 
            url:'http://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation'
        });
return promise;
console.log(promise);
}

    
});