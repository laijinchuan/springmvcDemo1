function ValidateRadio()
{
	var seletedValue = "";
	for(i=0;i<document.form1.optionsRadios.length;i++)
	{

		if(document.form1.optionsRadios[i].checked)   
		{
			seletedValue += document.form1.optionsRadios[i].value;
		}
	} 
	document.getElementById("hiddd").value=seletedValue;     
} 
function pwd2()
{var x;
var c=document.getElementById("password_confirm").value.length;
var a=document.getElementById("password").value;
var b=document.getElementById("password_confirm").value;
if(c<6)
{document.getElementById("pwd3").innerHTML="密码不可小于6位"; x=false;}else{
	if(a==b)
	{document.getElementById("pwd3").innerHTML="&nbsp;";x=true;}else{
		document.getElementById("pwd3").innerHTML="密码不一致";x=false;}}
return x;
}
function pwd9(){
	var x;
	var c=document.getElementById("password").value.length;
	if(c<6)
	{document.getElementById("pwd5").innerHTML="密码不可小于6位";x=false;
	}
	else
	{
		{document.getElementById("pwd5").innerHTML="&nbsp;&nbsp;";x=true;}
	}return x;
}
function use(){
	var x;
	var d=document.getElementById("username").value.length;
	if(d==0)
	{
		document.getElementById("us").innerHTML="<font color='red'>请输入你的用户名</font>";x=false;}
	else
	{
		{document.getElementById("us").innerHTML="&nbsp;&nbsp;";x=true;}
	}return x;}
function use1(){
	var x;
var d=document.getElementById("username1").value;

if(d.indexOf("-")!=4)			

{
	document.getElementById("us1").innerHTML="格式错误";x=false;}
else
{
	{document.getElementById("us1").innerHTML="&nbsp;&nbsp;";x=true;}
}return x;}


function  checkEmail(){
	var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); //正则表达式
	var obj = document.getElementById("e_mail").value; //要验证的对象
	if(obj.length ==0){ //输入不能为空
		document.getElementById("pp").innerHTML = "<font color='red'>不能为空</font>";
		return false;
	}else if(!reg.test(obj)){ //正则验证不通过，格式不对
		document.getElementById("pp").innerHTML = "<font color='red'>邮箱不合法</font>";
		return false;
	}else{
		document.getElementById("pp").innerHTML = "&nbsp;";
		return true;
	}
}
/* function checkEmail()//邮箱的验证
	{
		var x ;
		var f=document.getElementById("phone").value;
		var k=f.length;

		var h=f.substring(0,1);

		var j=f.substring(1,2);

	if (k == 11) {
			if (h == "1") {
				if (j == "3" || j == "5" || j == "7" || j == "8") {
					document.getElementById("pp").innerHTML = "&nbsp;";
					x = true;
					;
				}
			}
		} else {
			document.getElementById("pp").innerHTML = "<font color='red'>手机号码不合法</font>";
			x = false;
		}
		return x;

	} */
function zc() {
	var d = document.getElementById("username1").value;
	var a = document.getElementById("password").value;
	var b = document.getElementById("password_confirm").value;
	var c = document.getElementById("email").value;
	var e = document.getElementById("username").value;
	var redom = document.getElementById("input").value;
	if (a == "" || d == "" || b == "" || c == "" || e == "" || redom == "") {
		alert("请填写完整");
		return;
	}
	console.log(use()+""+pwd2()+""+pwd9()+""+use1()+""+test());
	if (use() && pwd2() && pwd9()&& use1() && test()) {
		frm.submit();
		return;

	} else {
		alert("填写内容有误，请重新填写");
		return;
	}
}
function fun() {

	ValidateRadio();
	zc();
}
//function createCode(len) {
//var seed = new Array('abcdefghijklmnopqrstuvwxyz',
//'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0123456789'); //创建需要的数据数组  
//var idx, i;
//var result = ''; //返回的结果变量  
//for (i = 0; i < len; i++) //根据指定的长度  
//{
//idx = Math.floor(Math.random() * 3); //获得随机数据的整数部分-获取一个随机整数  
//result += seed[idx].substr(Math.floor(Math.random()
//* (seed[idx].length)), 1);//根据随机数获取数据中一个值  
//}
//return result; //返回随机结果  
//}
function test() {
	var x;
	var oValue = document.getElementById('input').value.toUpperCase();
	var checkCode=document.getElementById('checkCode');
	if(oValue ==0){
		//alert('请输入验证码');
		checkCode.innerText="请输入验证码";
		x=false;
	}else if(oValue != code){
		alert('验证码不正确，请重新输入');
		checkCode.innerText="验证码不正确，请重新输入";
		oValue = ' ';
		createCode();
		x=false;
	}else{
	checkCode.innerText="";
		x=true;
	}
	return x;
} 
var code;
function createCode(){
	//首先默认code为空字符串
	code = '';
	//设置长度，这里看需求，我这里设置了4
	var codeLength = 4;
	var codeV = document.getElementById('code');
	//设置随机字符
	var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
	//循环codeLength 我设置的4就是循环4次
	for(var i = 0; i < codeLength; i++){
		//设置随机数范围,这设置为0 ~ 36
		var index = Math.floor(Math.random()*36);
		//字符串拼接 将每次随机的字符 进行拼接
		code += random[index]; 
	}
	//将拼接好的字符串赋值给展示的Value
	codeV.value = code;
}

//下面就是判断是否== 的代码，无需解释


//设置此处的原因是每次进入界面展示一个随机的验证码，不设置则为空
window.onload = function (){

	createCode();
}
