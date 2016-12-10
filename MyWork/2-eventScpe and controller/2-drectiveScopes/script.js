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
      user:'='
    },
    controller: function($scope){
      $scope.knightMe = function(user){
     user.rank ="knight";
   }
     
   }
  }
})