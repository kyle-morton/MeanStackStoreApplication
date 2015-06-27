// inject ngRoute for all our routing needs
angular.module('routerRoutes', ['ngRoute'])
// configure our routes
.config(function($routeProvider, $locationProvider) {


  console.log("configuring routerRoutes")

	//apply routes to the routeProvider object
	$routeProvider

    //REM: use the formal name for controller here
    //not the short hand mainCtrl

		// route for the home page
		.when('/', {
			templateUrl : 'public/assets/views/home.html',
			controller : 'mainController',
			controllerAs: 'main'
		})

		// // route for the about page
		.when('/books', {
			templateUrl : 'public/assets/views/items.html',
			controller : 'bookController',
			controllerAs: 'itemCtlr'
		})
    .when('/movies', {
      templateUrl : 'public/assets/views/items.html',
      controller : 'movieController',
      controllerAs: 'itemCtlr'
    })
    .when('/games', {
			templateUrl : 'public/assets/views/items.html',
			controller : 'gameController',
			controllerAs: 'itemCtlr'
		})
    .when('/user', {
			templateUrl : 'public/assets/views/user.html',
			controller : 'userController',
			controllerAs: 'userCtlr'
		})
     .when('/newUser', { //apply route to a new page (Not just template!)
		 	templateUrl : 'public/assets/views/newUser.html',
		 	controller : 'userController',
		 	controllerAs: 'userCtrl'
		 })


		// // route for the contact page
		// .when('/contact', {
		// 	templateUrl : 'views/contact.html',
		// 	controller : 'contactController',
		// 	controllerAs: 'contact'
		// });

	// set our app up to have pretty URLS
	$locationProvider.html5Mode(true);
});
