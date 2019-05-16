package com.chuan.dao;

import com.chuan.entity.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface userDao {
    public User getUser(@Param("username") String username,@Param("password") String password);
    public boolean insertUser(User user);
}
