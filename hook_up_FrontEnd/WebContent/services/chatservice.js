/**
 * 
 */
app.filter('reverse', function() {
	  return function(items) {
	    return items.slice().reverse();
	  };
	});

	app.directive('ngFocus', function() {
	  return function(scope, element, attrs) {
	    element.bind('click', function() {
	      $('.' + attrs.ngFocus)[0].focus();
	    });
	  };
	});




app.factory('ChatService',function($rootScope){
	
	var socket=new SockJS("/hook_up_MiddleWare/chatmodule");
	var stompClient=Stomp.over(socket);
	stompClient.connect('','',function(frame){
		$rootScope.$broadcast('sockConnected',frame)
	})
	
	return{
		stompClient:stompClient
	}
})