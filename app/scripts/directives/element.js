'use strict';

/*global app */
app.directive('element', function() {
    return {
        templateUrl: 'views/element.html',
        restrict: 'E',
        replace: true,
        scope: {
            data: '='
        },
        controller: 'ElementCtrl'
    };
});
