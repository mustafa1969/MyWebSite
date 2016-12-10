//code goes

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
        ]
       }
   
       $scope.user2 = {
        name: 'Hsna Kzam',
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
        ]
       }
 });

angular.module('app').directive('userInfoCard', function(){

  return {
    templateUrl: "userInfoCard.html",
    restrict: "E",
    scope:{
      user:'=',
      intialCollapsed: '@collapsed'
    },
    controller: function($scope){
      $scope.collapsed = ($scope.intialCollapsed === false);
      $scope.knightMe = function(user){
         user.rank ="knight";
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
       
       $scope.notifyParent({friend : 'Elyas'  , parm2: 'value'    });
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

