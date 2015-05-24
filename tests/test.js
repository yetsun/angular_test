
describe('StoreController', function() {
  var $controller;
  beforeEach(module('gemStore'));

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));
  
  describe('controller properties', function() {
    it('has a array of products. And its size is 3', function() {
      var controller = $controller('StoreController', {});
      console.log(controller.products);
      return expect(controller.products.length).toEqual(3);
    });
  });
});
