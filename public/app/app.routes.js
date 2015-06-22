// inject ngRoute for all our routing needs
angular.module('routerRoutes', ['ngRoute'])
// configure our routes
.config(function($routeProvider, $locationProvider) {


  console.log("configuring routerRoutes")

	//apply routes to the routeProvider object
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'public/assets/views/home.html',
			controller : 'mainCtrl',
			controllerAs: 'main'
		})

		// // route for the about page
		// .when('/about', {
		// 	templateUrl : 'views/about.html',
		// 	controller : 'aboutController',
		// 	controllerAs: 'about'
		// })
		// // route for the contact page
		// .when('/contact', {
		// 	templateUrl : 'views/contact.html',
		// 	controller : 'contactController',
		// 	controllerAs: 'contact'
		// });

	// set our app up to have pretty URLS
	$locationProvider.html5Mode(true);
});
