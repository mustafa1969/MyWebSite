



angular.module('app',[]);
angular.module('app').controller('mainCtrl', function($scope){

 $scope.handlePause= function(){
     console.log('video was paused!');
   }


 });


angular.module('app').directive('eventPause', function(){

  return {
    restrict: "A",
    scope: {
      eventPause: '&'
    },
   link: function(scope, el, attrs){
       el.on('pause', function(event){
         scope.$apply(function(){
           scope.eventPause();
         })
      })
    }  
  }
})




angular.module('app').directive('spacebarSupport', function(){

  return {
    restrict: "A",
    link: function(scope, el, attrs){
      $('body').on('keypress', function(evt){
        var vidEl = el[0];
        if(evt.keyCode === 32){
          if(vidEl.paused){
            vid.play();
          }else{
            vidEl.pause();
          }
          
        }
      })
    }
  }
});
