'use strict';

/*global app */
app.controller('ElementCtrl', function ( $scope, $rootScope ) {

    if( $scope.data.depend ) {

        $scope.$on('income-changed',function( event, newValue ){
            var actualValue = $scope.data.depend.percent * newValue;
            $scope.data.value = Math.min( actualValue , $scope.data.depend.maxValue );
        });
    }


});
