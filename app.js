var myNinjaApp = angular.module('myNinjaApp', [])
myNinjaApp.config(function(){

});

myNinjaApp.run(function(){

});

myNinjaApp.controller('NinjaController', ['$scope', function($scope){
    $scope.message = "Ninja for Hire!";
    $scope.ninjas = ['Shogun', 'Sekiro', 'Samurai', ]
    $scope.detailedNinjas = [
        {
            name: 'Shogun',
            belt: 'White',
            rate: '$10 Million',
            available: true
        },
        {
            name: 'Sekiro',
            belt: 'Yellow',
            rate: '$12 Million',
            available: true
        },
        {
            name: 'Samurai',
            belt: 'Black',
            rate: '$15 Million',
            available: true
        }
    ];
}]);