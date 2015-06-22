console.log("Init bookCtrl");

angular.module('bookCtrl', [])

.controller('bookController', function() {

    console.log("in book controller");

    var vm = this;

    this.message = "Hello from the bookCtrl!!!";

});
