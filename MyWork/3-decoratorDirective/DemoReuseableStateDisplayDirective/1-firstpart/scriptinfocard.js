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
      var parms = attrs['stateDisplay'].split(' ');
      var linkVar = parms[0];
      var classes = parms.slice(1);
      
      scope.$watch(linkVar, function(newVal) {
          el.removeClass(classes.join( ' '));
           el.addClass(classes[newVal]);
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
       $scope.user.level = $scope.user.level % 4;
 
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


userInfoCard

<div class="panel panel-primary"> 
   <div class="panel-heading" ng-click="collapse()">
   <span state-display="user.level user-ok user-warning user-problem user-error"> {{user-name}}</span> </div>
     <div class="panel-body" ng-hide="collapsed">
 
       <address></address>
 
        <h4>Friends:</h4> 
        <ul>
           <li ng-repeat='friend in user.friends'>
            {{friend}}
            <remove-friend method="removeFriend(friend)"></remove-friend>
          
          </li>
        </ul>
        <div ng-show='!!user.rank'>
          Rank:{{user.rank}}
        </div>  
        <button ng-show="!user.rank" class="btn btn-success" ng-click="knightMe(user)">Knight me</button>
        <button ng-click="nextState()" class="btn btn-info">Next State</button>
    </div>
  </div>
