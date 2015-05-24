describe 'StoreController', ->
  beforeEach module 'gemStore'

  $controller = null

  beforeEach inject (_$controller_)->
    $controller = _$controller_


  describe 'controller properties', ->
    it 'has a array of products. And its size is 3', ->
      controller = $controller 'StoreController', {}
      console.log controller.products
      expect(controller.products.length).toEqual 3