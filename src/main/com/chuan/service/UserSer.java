package com.chuan.service;


import com.chuan.dao.UserDao;
import com.chuan.entity.User;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;


@Service
public class UserSer {
    private UserDao userDao=new UserDao() {
        public User getUser(String username, String password) {
            return null;
        }

        public boolean insertUser(User user) {
            return false;
        }
    };
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
