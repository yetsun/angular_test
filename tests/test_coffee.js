// Generated by CoffeeScript 1.9.2
describe('StoreController', function() {
  var $controller;
  beforeEach(module('gemStore'));
  $controller = null;
  beforeEach(inject(function(_$controller_) {
    return $controller = _$controller_;
  }));
  return describe('controller properties', function() {
    return it('has a array of products. And its size is 3', function() {
      var controller;
      controller = $controller('StoreController', {});
      console.log(controller.products);
      return expect(controller.products.length).toEqual(3);
    });
  });
});
