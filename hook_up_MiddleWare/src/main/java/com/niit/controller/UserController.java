package com.niit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.niit.dao.UserDao;
import com.niit.model.User;

@Controller
public class UserController {
 
	@Autowired
  private UserDao userDao;
  public UserController()
  {
	  System.out.println("UserController bean is created");
  }
  
  @RequestMapping(value="/registeruser",method=RequestMethod.POST)
  public ResponseEntity<?> registerUser(@RequestBody User user)
  {
	  userDao.register(user);
	  return new ResponseEntity<User>(user,HttpStatus.OK);
  }
}
