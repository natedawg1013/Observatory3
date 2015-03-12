'use strict';

angular.module('observatory3App')
  .factory('profile', function profile($http, User) {
    var currentUser = {};
    var oldID;

    return {

      show: function(_id) {
      	if(oldID!=_id){
      		currentUser=User.getUser({ id: _id });
      		oldID=_id;
      	}
      	return currentUser;
      }
    };
  });
