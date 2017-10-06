var sree2 = '';
fujiApp.factory('ChartServiceFactory', function($http) {

    var getData = function(url) {

        // Angular $http() and then() both return promises themselves 
        return $http({method:"GET", url:url}).then(function(result){

            // What we return here is the data that will be accessible 
            // to us after the promise resolves
            return result.data;
        });
    };


    return { getData: getData };
});

