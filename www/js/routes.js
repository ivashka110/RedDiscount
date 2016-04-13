angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider
    
  

      .state('tabsController.homeTabDefaultPage', {
    url: '/page2',
    views: {
      'tab5': {
        templateUrl: 'templates/homeTabDefaultPage.html',
        controller: 'homeTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.locationTabDefaultPage', {
    url: '/page3',
    views: {
      'tab6': {
        templateUrl: 'templates/locationTabDefaultPage.html',
        controller: 'locationTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.productTabDefaultPage', {
    url: '/page4',
    views: {
      'tab7': {
        templateUrl: 'templates/productTabDefaultPage.html',
        controller: 'productTabDefaultPageCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});
