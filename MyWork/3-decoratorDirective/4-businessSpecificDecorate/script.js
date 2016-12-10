//code goes

angular.module('app',[]);

angular.module('app').controller('mainCtrl', function($scope){

$scope.user1= {
  name: 'Mustafa',
  selected:false
}
     
});

angular.module('app').directive('userTile', function(){

  return {
   restrict: "E",
   scope: {
     user: '='
   }, 
   templateUrl:'userTile.html'
  } 

});

angular.module('app').directive('userClickSelect', function(){

  return {
   link: function(scope, el, attrs) {
    el.on('click', function() {
         scope.user.selected =  !scope.user.selected;
         scope.$apply();
    }) 
   }
  } 

  
})
