'use strict';

angular.module('observatory3App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile/:ID',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileCtrl'
      });
  });