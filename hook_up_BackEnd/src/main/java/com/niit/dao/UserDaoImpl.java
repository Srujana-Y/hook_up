package com.niit.dao;




import org.hibernate.Session;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.niit.model.User;

@Repository
@Transactional
public class UserDaoImpl implements UserDao
{
	@Autowired
	
	private SessionFactory sessionFactory;
	
	public UserDaoImpl()
	{
		System.out.println("UserDaoImpl Bean is created");
	}

	public void registerUser(User user) {
		Session session=sessionFactory.getCurrentSession();
		session.save(user);
	}

	public boolean isEmailUnique(String email) //the email entered by new use
	{
		Session session=sessionFactory.getCurrentSession();
		//generate the query 
		
		User user=(User)session.get(User.class,email);//this generates the query such as select * from user_180250 where email=?
		
		
		if(user==null)
			return true;
		else
			return false;
		
			
		
		
	
	}
	public User login(User user) {
		// TODO Auto-generated method stub
		Session session = sessionFactory.getCurrentSession();
		Query query=session.createQuery("from User where email=? and password=?");
		query.setString(0,user.getEmail());
		query.setString(1,user.getPassword());
		return (User)query.uniqueResult();
	}
	
	public void update(User validUser) 
	{
		// TODO Auto-generated method stub
		Session session = sessionFactory.getCurrentSession();
		session.update(validUser);
	}
	public User getUser(String email) {
		// TODO Auto-generated method stub
		Session session = sessionFactory.getCurrentSession();
		User user=(User)session.get(User.class,email);
		return user;
	}

	public void updateUser(User user) {
		Session session = sessionFactory.getCurrentSession();
		session.update(user);
		
	}
}

