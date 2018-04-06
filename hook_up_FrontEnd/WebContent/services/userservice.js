/**
 * 
 */
app.factory('UserService',function($http){
	var userService={}
	
	userService.registerUser=function(user){
		return $http.post("http://localhost:8081/hook_up_MiddleWare/registeruser",user)
	}
	
	userService.login=function(user){
		return $http.post("http://localhost:8081/hook_up_MiddleWare/login",user)
	}
	
	userService.logout=function(){
		return $http.put("http://localhost:8081/hook_up_MiddleWare/logout")
	}
	
	
	userService.getUser=function(){
		return $http.get("http://localhost:8081/hook_up_MiddleWare/getuser")
	}
	
	userService.updateUser=function(user){
		return $http.put("http://localhost:8081/hook_up_MiddleWare/updateuser",user)
	}
	
	
	return userService
})