'use strict';

app.controller('IncomeCtrl', function ($scope) {
});

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

        return sum;
    };

    function init() {
        var types = window.types[$attrs.title];

        $scope.list = [ types[0] ];
        $scope.types = types;
        $scope.selected = types[1];

    }
}
