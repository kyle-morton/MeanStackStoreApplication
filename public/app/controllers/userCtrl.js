console.log("controller init");

angular.module('userCtrl', [])

.controller('userController', function() {

	var vm = this;

  vm.message = "Hello, World!";
	vm.userName = "";
	vm.loggedIn = false;

	vm.login = function (name) {
		vm.userName = name;
		vm.loggedIn = true;
	};

	vm.logout = function () {
			vm.userName = "";
			vm.loggedIn = false;
	}

});
