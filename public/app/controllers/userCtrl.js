console.log("controller init");

angular.module('userCtrl', [])

.controller('userController', function() {

	console.log("Created userController");

	var vm = this;

  vm.message = "Hello, World!";
	vm.userName = "";
	vm.loggedIn = false;
	vm.tempUserName = "";
	vm.welcomeMessage = "";

	vm.login = function () {
		console.log("login called with: " + vm.tempUserName);
		vm.userName = vm.tempUserName;
		console.log("new username: " + vm.userName);
		vm.loggedIn = true;
		vm.welcomeMessage = "Hello, " + vm.userName;
		vm.tempUserName = "";
		console.log("welcomeMessage: " + vm.welcomeMessage);
	};

	vm.logout = function () {
			vm.userName = "";
			vm.loggedIn = false;
			vm.welcomeMessage = "";
	}

});
