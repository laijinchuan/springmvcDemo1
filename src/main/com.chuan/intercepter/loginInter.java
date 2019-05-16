package com.chuan.intercepter;

import org.springframework.core.io.Resource;
import org.springframework.web.context.ContextLoader;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpSession;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class loginInter implements HandlerInterceptor {
    /**
     * 请求发送到controller之前调用
     * @param request
     * @param response
     * @param handler
     * @return
     * @throws Exception
     */
    public boolean preHandle(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response, Object handler) throws Exception {
        String requestURI = request.getRequestURI();
        //获取配置文件中登陆地址
        String resource = ContextLoader.getCurrentWebApplicationContext().getServletContext().getRealPath("/properties/loginAddress.properties");
        Properties properties = new Properties();
        properties.load(new FileInputStream(resource));
        String loginAddress = properties.getProperty("loginAddress");
        //校验是不是登陆地址
        if(!requestURI.equals(loginAddress)){
            return true;
        }else{
            HttpSession session = request.getSession();
            String username = (String)session.getAttribute("username");
            if(username!=null){
                return true;
            }else {
                response.sendRedirect("/chuan/login");
                return false;
            }
        }



    }
}
