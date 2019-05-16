package com.chuan.service;

import com.chuan.dao.userDao;
import com.chuan.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserSer {
    @Autowired
    private userDao userDao;
    public boolean login(User user){
        String username = user.getUsername();
        String password = user.getPassword();
        if(username!=null&&password!=null){
            User u = userDao.getUser(username, password);
            if(u==null){
                return false;
            }else
                return true;
        }
        return false;
    }
    public boolean insertUser(User user){
      return userDao.insertUser(user);
    }
}
