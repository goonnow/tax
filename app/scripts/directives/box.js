'use strict';

/*global app */
app.directive('box', function() {
    return {
        templateUrl: 'views/box.html',
        restrict: 'E',
        replace: true,
        scope: {
            key: '@',
            title: '@',
            classModifier: '@',
            value: '=',
            valuePrefix: '@'
        },
        /*global BoxCtrl */
        controller: 'BoxCtrl'
    };
});
