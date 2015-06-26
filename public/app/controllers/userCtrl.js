console.log("controller init");

angular.module('userCtrl', [])

//only include $location here!!!
.controller('userController', function($rootScope, $location, Auth) {

	console.log("Created userController");

	var vm = this;

  vm.message = "Hello, World!";

  vm.user = {};

	//get user information
	 Auth.getUser()
				.then(function(data) {
							var user = data.data;
							if (user != null) {
								console.log(user.name + " " + user.username);
								vm.user = user;
							}
		});

		// function to handle logging out
	  vm.doLogout = function() {
	    console.log("Logging out...");

	    Auth.logout();
	    vm.user = '';

	    $location.path('/');
	  };


	// vm.loginPageMethod = function () {
	// 	console.log("loginPageMethod() called");
	// }
	//
	// vm.login = function () {
	// 	console.log("login called with: " + vm.tempUserName);
	//
	// 	console.log("TF: " + vm.tempUserName.localeCompare("Kyle"))
	//
	// 	if (vm.tempUserName.localeCompare("Kyle") === 0) {
	//
	// 		vm.userName = vm.tempUserName;
	// 		console.log("new username: " + vm.userName);
	// 		vm.loggedIn = true;
	// 		vm.welcomeMessage = "Hello, " + vm.userName;
	// 		vm.tempUserName = "";
	// 		vm.tempPassword = "";
	// 		console.log("welcomeMessage: " + vm.welcomeMessage);
	// 		$location.path('/');
	// 	}
	// 	else { //redirect if incorrect login
	// 		console.log("failed login with : " + vm.tempUserName);
	// 		//$location.path('/login');
	// 		//$("#loginNav").toggle();
	// 		vm.tempUserName = "";
	// 		vm.tempPassword = "";
	// 		$('#myModal').modal('show');
	// 	}
	//
	// };
	//
	// vm.logout = function () {
	// 		vm.userName = "";
	// 		vm.loggedIn = false;
	// 		vm.welcomeMessage = "";
	// 		$location.path('/');
	// }

});
