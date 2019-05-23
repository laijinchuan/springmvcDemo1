
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link href="../../css/editormd/css/editormd.min.css" rel="stylesheet" type="text/css">
    <link href="../../css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="../../css/templatemo_style.css" rel="stylesheet" type="text/css">
    <script type="text/javascript" src="../../js/login.js"></script>
    <title>请登录</title>
</head>
</head>
<body  class="templatemo-bg-gray" style="background-size:cover;" onload="javascript:document.getElementById('username').focus();" ><br><br><br><br><br><br>
<div class="container">
    <div class="col-md-12" >
        <h1 class="margin-bottom-15" style="background: #777777;filter:alpha(opacity:30); opacity:1;">用户登录</h1>
        <form style="background:#777777;filter:alpha(opacity:30); opacity:0.8;"class="form-horizontal templatemo-container templatemo-login-form-1 margin-bottom-30"  id="frm" role="form" action="/chuan/index.action" method="post">
            <div class="form-group">
                <div class="col-xs-12">
                    <div class="control-wrapper">
                        <label for="username" class="control-label fa-label"><i class="fa fa-user fa-medium"></i></label>
                        <input type="text" class="form-control" id="username" name="username" placeholder="登录账号" >
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-12">
                    <div class="control-wrapper">
                        <label for="password" class="control-label fa-label"><i class="fa fa-lock fa-medium"></i></label>
                        <input type="password" class="form-control" id="password"  name="password"    placeholder="登录密码" onkeypress="enter()">
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-12">
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-12">
                    <center><div class="control-wrapper1">
                        <input type="submit" value="登录"  class="btn btn-info">
                    </div></center>
                </div>
            </div>

            <div class="text-center" style="font-weight:bold">
                <a href="/chuan/regester.action" class="templatemo-create-new" id="register">用户新注册</a><!-- <i class="fa fa-arrow-circle-o-right"></i> -->
            </div>
        </form>
    </div>
</div>
</body>
</html>