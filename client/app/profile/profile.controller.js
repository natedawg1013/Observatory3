'use strict';

angular.module('observatory3App')
  .controller('ProfileCtrl', function ($scope, Auth, User,  $location, $stateParams) {
    $scope.getUserByID = User.show;
    $scope.userID = $stateParams.ID;
    $scope.getCurrentUser = Auth.getCurrentUser;
  });
