package com.chuan.dao;


import com.chuan.entity.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Repository
@Component
public interface UserDao {
     User getUser(@Param("username") String username, @Param("password") String password);
    void insertUser(User user);
}
