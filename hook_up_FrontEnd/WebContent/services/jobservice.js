/**
 * 
 */

app.factory('JobService',function($http){
	var jobService={}
	
	jobService.addJob=function(job){
		return $http.post("http://localhost:8005/hook_up_MiddleWare/addjob",job)
	}
	
	jobService.getAllJobs=function(){
		return $http.get("http://localhost:8005/hook_up_MiddleWare/alljobs")
	}
	
	jobService.getJob=function(id){
		return $http.get("http://localhost:8005/hook_up_MiddleWare/getjob/"+id)
	}
	
	return jobService;
})