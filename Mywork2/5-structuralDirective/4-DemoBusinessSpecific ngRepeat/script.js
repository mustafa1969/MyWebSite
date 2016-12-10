////code goes

angular.module('app',[]);
angular.module('app').controller('mainCtrl', function($scope){

       $scope.person1 = {
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
        $scope.person2 = {
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
        $scope.droid1 = {
          name:'R2-D2',
          specifications:{
            manufacturer: 'Industrial Automation',
            type:'Astromech',
            productLine: 'R2series'
          },
          level:1
          // owners.. etc
        }
  
}); 

angular.module('app').directive('stateDisplay', function(){
  return{
    link:function(scope, el, attrs) {
      var parms = attrs['stateDisplay'].split(' ');
      var linkVar = parms[0];
      var classes = parms.slice(1);
      
      scope.$watch(linkVar, function(newVal) {
           el.removeClass(classes.join(' '));
           el.addClass(classes[newVal]);
         
      });  
    }
  }
})

angular.module('app').directive('droidInfoCard', function(){

  return {
    templateUrl: "droidInfoCard.html",
    restrict: "E",
    scope: {
      droid: '=',
      initialCollapsed: '@collapsed'
    },
    controller: function($scope){
     // $scope.collapsed = false;
     $scope.collapsed = ($scope.initialCollapsed === true);
     $scope.nextState =function(){
       $scope.droid.level++;
       $scope.droid.level = $scope.droid.level % 4;
 
     } 
     
     $scope.collapse = function(){
    
     $scope.collapsed = !$scope.collapsed;  
     
     }
    }
  }
});



angular.module('app').directive('personInfoCard', function(){

  return {
    templateUrl: "personInfoCard.html",
    restrict: "E",
    scope: {
      person: '=',
      initialCollapsed: '@collapsed'
    },
    controller: function($scope){
     // $scope.collapsed = false;
     $scope.collapsed = ($scope.initialCollapsed === true);
     $scope.nextState =function(){
       $scope.person.level++;
       $scope.person.level = $scope.person.level % 3;
 
     } 
       $scope.knightMe = function(person){
        person.rank = "knight";
   }
     
     $scope.collapse = function(){
    
     $scope.collapsed = !$scope.collapsed;  
     
     }
     
     $scope.removeFriend = function(friend){
       var idx = $scope.person.friends.indexOf(friend);
       if(idx > -1) {
         
         $scope.person.friends.splice(idx,1);
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

