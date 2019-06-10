angular.
    module('stripeMenu').
    service('menuDataService', menuDataService);
    
function menuDataService($http) {

    var service = {
        getMenuData: getMenuData
    };

    return service;

    function getMenuData(){
        return $http({
            method: 'GET',
            url: 'https://jsonblob.com/api/jsonBlob/6766327f-607d-11e9-95ef-9bcb815ba4a4'
        });
    }
}