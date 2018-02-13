package com.niit.dao;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.niit.model.User;

@Repository
@Transactional
public class UserDaoImpl implements UserDao {

	
	
	public UserDaoImpl()
	{
		System.out.println("UserDaoImpl bean is created");
	}
	
	@Autowired
	private SessionFactory sessionFactory;
	public void register(User user) {
		Session session=sessionFactory.getCurrentSession();
		session.save(user);
	}

}
