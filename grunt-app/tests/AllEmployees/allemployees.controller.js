(function(){

  /* global module, inject */

  'use strict';

  describe('Controller: AllEmployees', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.AllEmployees'));

    var ctrl;
    var scope;

    beforeEach(inject(function($controller, $injector){

      scope = $injector.get('$rootScope');

      ctrl = $controller('AllEmployees', {
        //add injectable services
      });

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());
