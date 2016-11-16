(function(){

  /* global module, inject */

  'use strict';

  describe('Controller: NewEmployee', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.NewEmployee'));

    var ctrl;
    var scope;

    beforeEach(inject(function($controller, $injector){

      scope = $injector.get('$rootScope');

      ctrl = $controller('NewEmployee', {
        //add injectable services
      });

    }));

    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());
