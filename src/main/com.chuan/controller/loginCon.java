package com.chuan.controller;

import com.chuan.entity.User;
import com.chuan.service.UserSer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/chuan")
public class loginCon {
    @Autowired
    private UserSer userSer;
    @RequestMapping("/login")
    public  String login(){
        return "login";
    }
    @RequestMapping("index")
    public String  index(User user) {
        if (user != null) {
            boolean login = userSer.login(user);
            if(login){
                return  "index";
            }else{
                return "redirect:/login";
            }
        }
        return "redirect:/login";
    }
    @RequestMapping("/register")
    public  String register(User user){
        if(user!=null){
            boolean b = userSer.insertUser(user);
            if(b){
                return "loginSuccess";
            }else{
                return "";
            }

        }else{
            return  "register";
        }
    }

}
