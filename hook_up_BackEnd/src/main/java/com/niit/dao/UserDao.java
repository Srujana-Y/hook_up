package com.niit.dao;

import com.niit.model.User;

public interface UserDao 
{
	public void registerUser(User user);
	boolean isEmailUnique(String email);
	User login(User user);
	void update(User ValidUser);
	public User getUser(String email);
	void updateUser(User user);
	

}
