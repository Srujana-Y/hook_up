/**
 * 
 */
app.factory('FriendService',function($http){
	var friendService={}
	
	friendService.getAllSuggestedUsers=function(){
		return $http.get("http://localhost:8081/hook_up_MiddleWare/suggestedusers")
	}
	
	friendService.addFriend=function(toId){
		return $http.post("http://localhost:8081/hook_up_MiddleWare/addfriend",toId)
	}
	
	friendService.getPendingRequests=function()
	{
		return $http.get("http://localhost:8081/hook_up_MiddleWare/pendingrequests");
	}
	
	friendService.acceptRequest=function(request){
		return $http.put("http://localhost:8081/hook_up_MiddleWare/acceptrequest",request);
	}
	
	friendService.deleteRequest=function(request){
		return $http.put("http://localhost:8081/hook_up_MiddleWare/deleterequest",request);
	}
	
	friendService.getAllFriends=function(){
		return $http.get("http://localhost:8081/hook_up_MiddleWare/friends");
	}
	
	
	return friendService;
})