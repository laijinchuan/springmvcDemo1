<%--
  Created by IntelliJ IDEA.
  User: l_computer
  Date: 2019/5/21
  Time: 20:34
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="stylesheet" href="../../css/layui-v2.1.5/layui/css/layui.css"media="all">
    <link rel="stylesheet" href="../../css/Gegister.css" media="all">
    <link rel="stylesheet" href="../../css/bootstrap.css"/>
    <script type="text/javascript" src="../../js/Check.js"></script>
    <script type="text/javascript" src="../../js/ajax.js"></script>
    <title>新用户注册</title>

</head>
<body class="templatemo-bg-gray" >
<div class="all">
    <br>
    <form
            class="form-horizontal templatemo-create-account templatemo-container"
            id="frm" name="form1" role="form"
            action="/chuan/register.action" method="post">
        <div class="form-group">
            <div class="col-md-12">
                <font color="red"><div id="msg"></div></font> <br>用&nbsp;户&nbsp;名：
                <input type="text" class="form-control" name="username"
                       id="username" onblur="use()"
                       <%--onchange="send('/SecondWebProject/UsernameChecked')"--%>
                       placeholder="请输入你的用户名" /> <span class="tx" id="us">&nbsp;&nbsp;</span></br>

            </div>
            <div class="col-md-12">
                电子邮箱： <input type="text" class="form-control" id="e_mail"
                             name="email" onblur="checkEmail()" placeholder="请输入你的邮箱"
                             <%--onchange="send2('/SecondWebProject/E_mailCheck')"--%>
            > <span
                    class="tx" id="pp">&nbsp;&nbsp;</span>
                <div id="pp1"></div>
            </div>
            </br>
            <div class="col-md-12">
                性&nbsp;&nbsp;&nbsp;别：
                <br>
                <label class="radio-inline">
                    <input
                            type="radio" name="optionsRadios" id="optionsRadios1" value="男"
                            checked="checked"> 男
                </label> <label class="radio-inline"> <input type="radio"
                                                             name="optionsRadios" id="optionsRadios2" value="女"> 女
            </label> <input type="hidden" name="sex" id="hiddd">
            </div>

            <div class="col-md-12">
                <br>
                出生年月：&nbsp;<input class="form-control" type="date"
                                  value="1999-01-01" name="birthday" id="username1" onblur="use1()" />
            </div>
            <div class="col-md-12">
                <div class="tx" id="us1">&nbsp;&nbsp;</div>
                登录密码： <input type="password" class="form-control" name="password"
                             id="password" onfocus="use1()" onchange="pwd9()"> <span
                    style="color: red" class="col-md-6" id="pwd5">&nbsp;&nbsp;</span>
            </div>


            <div class="col-md-12">
                确认密码： <input type="password" class="form-control"
                             id="password_confirm" onchange="pwd2()" />
                <span style="color: red" class="col-md-6" id="pwd3">&nbsp;&nbsp;</span>
            </div>
            <div class="col-md-12">
                验证码:
                <div class="form-inline">
                    <input type="text" id="input" class="form-control" onblur="test()" />
                    <input type="button" id="code" onclick="createCode() "class="form-control" style="background-color: #48D1CC"/>
                    <span style="color: red" class="col-md-6" id="checkCode"  >&nbsp;&nbsp;</span>
                </div>
            </div>
            </br>
            <div class="col-md-12" >
                <div class="form-inline"  style="text-align: center;">
                    <input type="button" class="form-control btn-info" onClick="fun()"value="提交">
                    <a href="/chuan/login.action" class="form-control btn-default" >直接登录</a>
                </div>
            </div>
        </div>
    </form>
</div>
</body>


</html>
