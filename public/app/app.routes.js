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
			templateUrl : 'public/assets/views/books.html',
			controller : 'bookController',
			controllerAs: 'book'
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
