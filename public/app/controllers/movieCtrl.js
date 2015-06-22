console.log("Init movieCtrl");

angular.module('movieCtrl', [])

.controller('movieController', function() {

    console.log("in movie controller");

    var vm = this;

    this.message = "Hello from the movieCtrl!!!";

});
