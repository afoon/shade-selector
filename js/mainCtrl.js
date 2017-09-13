angular.module('shadeApp').controller('mainCtrl', function($scope,mainService){
$scope.test = "Issa Test";
$scope.getMakeup = function(){
    $scope.makeup = mainService.getMakeup().then(
        function(response){
        console.log(response);
    })
} 
$scope.getMakeup();
})