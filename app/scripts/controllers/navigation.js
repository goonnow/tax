'use strict';

/*global app */
/*global TAX */
app.controller('NavigationCtrl', function ($scope, $rootScope ) {
    $scope.steps = steps;

    $scope.shouldSelect = function( step ) {
        if ( step <= $rootScope.currentStep ) {
            return true;
        }
        return false;
    }

});
