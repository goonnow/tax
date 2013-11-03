'use strict';

function BoxCtrl( $scope, $attrs ) {
    init();

    $scope.addRecord = function() {
        $scope.list.push( $scope.selected );
    };

    $scope.sum = function(){
        var sum = 0;
        angular.forEach( $scope.list, function(data, key){
            if( data.value ) {
                sum += parseInt(data.value, 10);
            }
        });

        $scope.value = sum || 0;
        return sum;
    };

    function init() {
        var types = window.types[$attrs.title];

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
}
