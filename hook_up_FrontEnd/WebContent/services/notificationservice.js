/**
 * 
 */

app.factory('NotificationService',function($http){
	var notificationService={}
	
	notificationService.getNotificationsNotViewed=function(){
		return $http.get("http://localhost:8085/hook_up_MiddleWare/getnotifications");
	}
	
	notificationService.getNotification=function(id){
		return $http.get("http://localhost:8085/hook_up_MiddleWare/getnotification/"+id);
	}
	
	notificationService.updateNotification=function(id){
		return $http.put("http://localhost:8085/hook_up_MiddleWare/updatenotification/"+id);
	}
	
	return notificationService;
})