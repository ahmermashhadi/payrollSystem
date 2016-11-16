(function(){

  /* global module, inject */

  'use strict';

  describe('Controller: Employee', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.Employee'));

    var ctrl;
    var scope;

    beforeEach(inject(function($controller, $injector){

      scope = $injector.get('$rootScope');

      ctrl = $controller('Employee', {
        //add injectable services
      });

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());
