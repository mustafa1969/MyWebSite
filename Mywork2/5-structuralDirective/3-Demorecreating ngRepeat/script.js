angular.module('app',[]);

angular.module('app').controller('mainCtrl', function($scope){
   $scope.answers = {baseLocation: "mustafa"}   
});




angular.module('app').directive('myQuestion', function(){
	return {
	  	restrict: "E",
	  	transclude: true,
	  	templateUrl:'myQuestion.html',
		 scope:{
		   questionText:'@q'
		 }
	}
	})

