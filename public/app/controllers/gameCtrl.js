console.log("Init gameCtrl");

angular.module('gameCtrl', [])

.controller('gameController', function() {

    console.log("in game controller");

    var vm = this;

    this.message = "Hello from the gameCtrl!!!";

});
