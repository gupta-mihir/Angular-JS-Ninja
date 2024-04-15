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
            belt: 'In Stock',
            rate: '$1.99',
            available: true,
            thumb: "img/toothbrush.jpeg"
        },
        {
            name: 'Shampoo',
            belt: 'In Stock',
            rate: '$10.50',
            available: true,
            thumb: "img/shampoo.jpeg"
        },
        {
            name: 'Conditioner',
            belt: 'In Stock',
            rate: '$15.99',
            available: true,
            thumb: "img/conditioner.jpeg"
        }
    ];
}]);