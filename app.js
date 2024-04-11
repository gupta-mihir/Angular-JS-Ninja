var myNinjaApp = angular.module('myNinjaApp', [])
myNinjaApp.config(function(){

});

myNinjaApp.run(function(){

});

myNinjaApp.controller('NinjaController', function($scope){
    $scope.message = "hey y'all";
    $scope.ninjas = ['Shogun', 'Sekiro', 'Samurai', ]
});