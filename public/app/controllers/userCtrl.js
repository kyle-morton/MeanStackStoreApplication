console.log("controller init");

angular.module('userCtrl', [])

//only include $location here!!!
.controller('userController', function($location) {

	console.log("Created userController");

	var vm = this;

  vm.message = "Hello, World!";
	vm.userName = "";
	vm.loggedIn = false;
	vm.tempUserName = "";
	vm.tempPassword = "";
	vm.welcomeMessage = "";

	vm.login = function () {
		console.log("login called with: " + vm.tempUserName);

		console.log("TF: " + vm.tempUserName.localeCompare("Kyle"))

		if (vm.tempUserName.localeCompare("Kyle") === 0) {

			vm.userName = vm.tempUserName;
			console.log("new username: " + vm.userName);
			vm.loggedIn = true;
			vm.welcomeMessage = "Hello, " + vm.userName;
			vm.tempUserName = "";
			vm.tempPassword = "";
			console.log("welcomeMessage: " + vm.welcomeMessage);
			$location.path('/');
		}
		else { //redirect if incorrect login
			console.log("failed login with : " + vm.tempUserName);
			$location.path('/login');
			//$("#loginNav").toggle();
			vm.tempUserName = "";
			vm.tempPassword = "";
		}

	};

	vm.logout = function () {
			vm.userName = "";
			vm.loggedIn = false;
			vm.welcomeMessage = "";
			$location.path('/');
	}

});
