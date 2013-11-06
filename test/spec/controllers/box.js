'use strict';

describe('Controller: BoxCtrl', function () {

    var key = 'income';

  // load the controller's module
  beforeEach(module('taxApp'));

  var BoxCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BoxCtrl = $controller('BoxCtrl', {
      $scope: scope,
      $attrs: { key: key }
    });
  }));


  it('initialize variable', function () {
    expect( scope.types ).toEqual( window.types[key] );
  });

  it('sum', function () {
    scope.list = [
        { value: '' }
    ]
    expect(scope.sum()).toBe(0);

    scope.list = [
        { value: 10.5 },
        { value: 10 }
    ]
    expect(scope.sum()).toBe(20.5);
  });

  it('addRecord', function() {
    scope.list = [],
    scope.selected = { a: 1};
    scope.addRecord();
    expect( scope.list ).toEqual( [ scope.selected ] );

  });

});
