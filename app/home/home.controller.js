'use strict';

angular.module('myApp.home', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', ['$scope', '$firebaseSimpleLogin',function($scope, $firebaseSimpleLogin) {
  var firebaseObj = new Firebase("https://blistering-heat-2473.firebaseio.com");
  var loginObj = $firebaseSimpleLogin(firebaseObj);
  $scope.SignIn = function(event) {
    event.preventDefault();
    var username = $scope.user.email;
    var password = $scope.user.password;
    
    loginObj.$login("password", { 
      email: username,
      password: password
    }).then (function(user){
      console.log("Authentication success");
    }, function(error){
      console.log("Authentication Error"+error);
    });

    // Auth Logic will be here
}

}]);