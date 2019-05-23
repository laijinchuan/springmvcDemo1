package com.chuan.controller;


import com.chuan.entity.User;
import com.chuan.service.UserSer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;


@Controller
@RequestMapping("/chuan")
public class loginCon {
    @Resource
    private UserSer userSer;
    @RequestMapping("/login")
    public  String login(){
        return "/static/login";
    }
    @RequestMapping("/regester")
    public String regester(){
        return  "/static/regeister";
    }
    @RequestMapping( method = RequestMethod.POST,value = "index")
    public String  index(User user) {
        if (user != null) {
            boolean login =true;
            //boolean login = userSer.login(user);
            System.out.println(user.toString());
            if(login){
                return  "index";
            }else{
                return "redirect:/static/login.jsp";
            }
        }
        return "redirect:/static/login.jsp";
    }
    @RequestMapping(method = RequestMethod.POST,value = "/register")
    public  String register(User user){
        if(user!=null){
            boolean b = userSer.insertUser(user);
            if(b){
                return "loginSuccess";
            }else{
                return "";
            }

        }else{
            return  "regeister";
        }
    }

}
