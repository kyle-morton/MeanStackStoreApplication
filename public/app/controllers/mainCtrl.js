console.log("Init mainCtrl");

angular.module('mainCtrl', [])

.controller('mainController', function($rootScope, $location, Auth) {

    console.log("in main controller");

    var vm = this;

    vm.message = "main working...";

    vm.loggedIn = Auth.isLoggedIn();

    vm.loginData = {};

    console.log("log in value: " + vm.loggedIn);

  // check to see if a user is logged in on every request
	$rootScope.$on('$routeChangeStart', function() {
		vm.loggedIn = Auth.isLoggedIn();

		// get user information on page load
		Auth.getUser()
			.then(function(data) {
				vm.user = data.data;
        if (vm.user != null) {
          console.log(vm.user.name + " " + vm.user.username);
        }
			});
	});

  // function to handle login form
vm.doLogin = function() {
  vm.processing = true;

  // clear the error
  vm.error = '';

  Auth.login(vm.loginData.username, vm.loginData.password)
    .success(function(data) {

      console.log("returned to success");
      vm.processing = false;

      // if a user successfully logs in, redirect to users page
      if (data.success) {
        $location.path('/user');
      }
      else {
        console.log("inside else in the success block");
        vm.error = data.message;
        $('#myModal').modal('show');
      }


    })
    .error(function(data) {
      console.log("got back to the error in mainCtrl");
    });

    vm.loginData.username = '';
    vm.loginData.password = '';
  };


  // function to handle logging out
  vm.doLogout = function() {
    console.log("Logging out...");

    Auth.logout();
    vm.user = '';
    vm.loggedIn = false;

    $location.path('/');
  };

  vm.createSample = function() {
    Auth.createSampleUser();
    vm.createSample = true
  };


  vm.dismissSampleMessage = function() {
    vm.createSample = false;
  };


});
