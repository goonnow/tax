'use strict';

/*global app */
app.directive('box', function() {
    return {
        templateUrl: 'views/box.html',
        restrict: 'E',
        replace: true,
        scope: {
            title: '@',
            classModifier: '@',
            value: '='
        },
        /*global BoxCtrl */
        controller: BoxCtrl
    };
});
