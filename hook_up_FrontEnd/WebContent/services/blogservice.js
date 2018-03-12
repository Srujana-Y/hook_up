/**
 * 
 */

app.factory('BlogService',function($http){
	var blogService={}
	
	blogService.addBlog=function(blog){
		return $http.post("http://localhost:8085/hook_up_MiddleWare/addblogpost",blog)
	}
	
	blogService.getBlogsWaitingForApproval=function(){
		return $http.get("http://localhost:8085/hook_up_MiddleWare/getblogs/"+0)
	}
	
	blogService.getBlogsApproved=function(){
		return $http.get("http://localhost:8085/hook_up_MiddleWare/getblogs/"+1)
	}
	
	blogService.getBlog=function(id){
		return $http.get("http://localhost:8085/hook_up_MiddleWare/getblog/"+id)
	}
	
	blogService.hasUserLikedBlog=function(id){
		return $http.get("http://localhost:8085/hook_up_MiddleWare/hasuserlikedblog/"+id)
	}
	
	blogService.approve=function(blog){
		return $http.put("http://localhost:8085/hook_up_MiddleWare/approve",blog)
	}
	
	blogService.reject=function(blog,rejectionReason){
		return $http.put("http://localhost:8085/hook_up_MiddleWare/reject/"+rejectionReason,blog)
	}
	
	blogService.updateLikes=function(id){
		return $http.put("http://localhost:8085/hook_up_MiddleWare/updatelikes/"+id);
	}
	
	blogService.addComment=function(blogComment){
		return $http.post("http://localhost:8085/hook_up_MiddleWare/addcomment",blogComment);
	}
	
	blogService.getBlogComments=function(id){
		return $http.get("http://localhost:8085/hook_up_MiddleWare/blogcomments/"+id);
	}
	
	
	return blogService;
	
})