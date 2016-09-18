(()=> {
let myApp = angular.module('myApp', []);


myApp.controller('myController', ($scope, $timeout) => {
	$scope.clock = {};
	let updateClock = () => {
	    $scope.clock.now = new Date().toLocaleTimeString();
	    $timeout(() => {
	    updateClock();
	    }, 1000);
};
updateClock();
});

myApp.controller('TableCtrl', ($scope) => {
	$scope.writers = [
	{"id":1,"name":"Ivan Franko","address":"Ukraine","email":"kamenyar@gmail.com","phone":"3(800)123-45-00"},
	{"id":2,"name":"Franz Kafka","address":"Austria","email":"theatre@gmail.com","phone":"3(800)123-45-67"},
	{"id":3,"name":"Chuck Palahniuk","address":"USA","email":"shock@gmail.com","phone":"3(800)123-45-67"},
	{"id":4,"name":"Ernest Hemingway ","address":"USA","email":"ernest@gmail.com","phone":"3(800)123-45-67"},
	{"id":5,"name":"Leo Tolstoy","address":"Russia","email":"leo@gmail.com","phone":"3(800)123-45-67"},
	{"id":6,"name":"Mark Twain","address":"USA","email":"mark@gmail.com","phone":"3(800)123-45-66"}
	];
});

})();