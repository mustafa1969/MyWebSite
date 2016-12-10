////code goes

angular.module('app',[]);
angular.module('app').controller('mainCtrl', function($scope){

       $scope.user1 = {
        name: 'Mustafa Ayad',
        address: {
          street: '3399 Edison Dr.',
          city   : 'West Lafayette',
          planet: 'earth'
        },
        friends:[
        'Elyas',
         'Mohamed',
         'Alaa',
         'ayat'
        ],
        level:0
       }
        $scope.user2 = {
        name: 'Mustafa Ayad',
        address: {
          street: '3399 Edison Dr.',
          city   : 'West Lafayette',
          planet: 'earth'
        },
        friends:[
        'Elyas',
         'Mohamed',
         'Alaa',
         'ayat'
        ],
        level:1
       }
  
});

angular.module('app').directive('stateDisplay', function(){
  return{
    link:function(scope, el, attrs) {
      scope.$watch(attrs['stateDisplay'], function(newVal) {
   
       switch(newVal) {
         case 0:
           el.css('background-color', 'white');
           break;
         case 1:
           el.css('background-color', 'yellow');
           break;
         case 2:
           el.css('background-color', 'red');
           break;
         
       }
      });  
    }
  }
})



angular.module('app').directive('userInfoCard', function(){

  return {
    templateUrl: "userInfoCard.html",
    restrict: "E",
    scope: {
      user: '=',
      initialCollapsed: '@collapsed'
    },
    controller: function($scope){
     // $scope.collapsed = false;
     $scope.collapsed = ($scope.initialCollapsed === true);
     $scope.nextState =function(){
       $scope.user.level++;
       $scope.user.level = $scope.user.level % 3;
 
     } 
       $scope.knightMe = function(user){
        user.rank = "knight";
   }
     
     $scope.collapse = function(){
    
     $scope.collapsed = !$scope.collapsed;  
     
     }
     
     $scope.removeFriend = function(friend){
       var idx = $scope.user.friends.indexOf(friend);
       if(idx > -1) {
         
         $scope.user.friends.splice(idx,1);
       }
     
     }
    }
  }
});


angular.module('app').directive('removeFriend', function(){

   return {
     restrict: 'E',
     templateUrl:'removeFriend.html',
     scope:{
       
       notifyParent:'&method'
     },
     controller: function($scope){
      $scope.removing = false;
     $scope.startRemove = function(){
       
       $scope.removing = true;
     }
     
      $scope.cancelRemove = function(){
       
       $scope.removing = false;
     }
     
      $scope.confirmRemove = function(){
       
       $scope.notifyParent();
     }
     
     }
   }
    
});


angular.module('app').directive('address', function(){

  return {
    templateUrl: "address.html",
    restrict: "E",
    scope: true,
    controller: function($scope){
      $scope.collapsed = false;
      $scope.collapseAddress = function(){
          $scope.collapsed = true;
      }
      $scope.expandAddress = function(){
          $scope.collapsed = false;
      }
   }
  }  
});

