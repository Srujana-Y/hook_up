/**
 * 
 */

app.factory('UserService',function($http){
	var userService={}
	
	userService.registerUser=function(user){
		
		console.log(user)
		$http.post("http://localhost:8080/hook_up_MiddleWare/registerUser",user)
	}
	return userService;
})