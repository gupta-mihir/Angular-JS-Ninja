var myMarketplaceApp = angular.module('myMarketplaceApp', [])
myMarketplaceApp.config(function(){

});

myMarketplaceApp.run(function(){

});

myMarketplaceApp.controller('MarketController', ['$scope', function($scope){
    $scope.message = "Goods for Sale!";
    //$scope.ninjas = ['Shogun', 'Sekiro', 'Samurai', ]
    
    $scope.removeItem = function(item){
        var removedItem = $scope.detailedItems.indexOf(item);
        $scope.detailedItems.splice(removedItem, 1);
    }

    $scope.detailedItems = [
        {
            name: 'Toothbrush',
            belt: 'Blue',
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