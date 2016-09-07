(()=> {


let hello = document.getElementById('alert')

hello.addEventListener('click', () => {
  alert("Hi! I am alert from static!!");
});

angular.module('myApp', []).controller('myController', 
function($scope, $timeout) {
	$scope.clock = {};
	let updateClock = () => {
	    $scope.clock.now = new Date().toLocaleTimeString();
	    $timeout(function() {
	    updateClock();
	    }, 1000);
};
updateClock();
});



})();