package com.chuan.intercepter;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.web.context.ContextLoader;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpSession;
import java.io.FileInputStream;
import java.util.Properties;
@Configuration
@PropertySource(value = "classpath:properties/loginAddress.properties" ,encoding = "utf-8")
public class loginInter implements HandlerInterceptor {
    /**
     * 请求发送到controller之前调用
     * @param request
     * @param response
     * @param handler
     * @return
     * @throws Exception
     */
    @Value("${loginAddress}")
    String loginIndex;
    public boolean preHandle(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response, Object handler) throws Exception {
        String requestURI = request.getRequestURI();

        //获取配置文件中登陆地址
        /*String resource = ContextLoader.getCurrentWebApplicationContext().getServletContext().getRealPath("/properties/loginAddress.properties");
        Properties properties = new Properties();
        properties.load(new FileInputStream(resource));
        String loginAddress = properties.getProperty("loginAddress");*/
        //校验是不是登陆地址
        if(!requestURI.equals(loginIndex)){
            return true;
        }else{
            HttpSession session = request.getSession();
            String username = (String)session.getAttribute("username");
            if(username!=null){
                return true;
            }else {
                response.sendRedirect("/static/login.jsp");
                return false;
            }
        }



    }
}
