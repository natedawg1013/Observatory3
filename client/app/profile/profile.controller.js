'use strict';

angular.module('observatory3App')
  .controller('ProfileCtrl', function ($scope, Auth, User,  $location, $stateParams, profile) {
    $scope.show = profile.show;
    $scope.userID = $stateParams.ID;

    $scope.user = User.getUser;
    $scope.getCurrentUser = Auth.getCurrentUser;
  });
