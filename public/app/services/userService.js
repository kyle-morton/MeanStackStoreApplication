angular.module('userService', [])

.factory('User', function($http) {

	// create a new object
	var userFactory = {};

	// get a single user
	userFactory.get = function(id) {
		return $http.get('https://nodestoreapp.herokuapp.com/api/users/' + id);
	};

	// get all users
	userFactory.all = function() {
		return $http.get('https://nodestoreapp.herokuapp.com/api/users/');
	};

	// create a user
	userFactory.create = function(userData){
		return $http.post('https://nodestoreapp.herokuapp.com/newUser', userData);
	};

	// update a user
	userFactory.update = function(id, userData) {
		return $http.put('https://nodestoreapp.herokuapp.com/api/users/' + id, userData);
	};

	// delete a user
	userFactory.delete = function(id) {
		return $http.delete('https://nodestoreapp.herokuapp.com/api/users/' + id);
	};

	// return our entire userFactory object
	return userFactory;

});
