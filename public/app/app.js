angular.module('shopApp', ['userCtrl', 'mainCtrl', 'bookCtrl', 'movieCtrl',
               'gameCtrl', 'routerRoutes','ngAnimate',
               'authService','userService'])

 // application configuration to integrate token into requests
 .config(function($httpProvider) {

 	// attach our auth interceptor to the http requests
 	$httpProvider.interceptors.push('AuthInterceptor');



 });

console.log("created shopping app");
