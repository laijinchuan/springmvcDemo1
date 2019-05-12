function register()
	{
		var username=document.getElementById("username").value;
		var pwd=document.getElementById("password").value;
		if(username==""||pwd=="")
			{
				alert("请填写完整 账户密码");
				return;}
		else{
			frm.submit();
		}	
	}

function enter(){
	
	
	if(event.keyCode==13){
		register();
		document.forms['frm'].submit();
	}
}