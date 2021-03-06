'use strict';

/*global app */
app.controller('BoxCtrl', function ($scope, $attrs) {
    init();

    $scope.addRecord = function() {
        $scope.list.push( $scope.selected );
    };

    $scope.sum = function(){
        var sum = 0;
        angular.forEach( $scope.list, function(data, key){
            if( data.value ) {
                sum += parseFloat(data.value, 10);
            }
        });

        $scope.value = sum || 0;
        return sum;
    };

    function init() {
        var types = window.types[$attrs.key];

        $scope.list = [];
        var predefined = 0;
        angular.forEach( types, function(data, key){
            if( data.predefined ) {
                $scope.list.push( data );
                predefined++;
            }
        });

        $scope.types = types;
        $scope.selected = types[predefined];

    }
});
