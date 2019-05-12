var XMLHttpReq;
function createXMLHttpRequest()         //解析函数
{
  if(window.XMLHttpRequest)
  {
  XMLHttpReq=new XMLHttpRequest();
  }
  else if(window.ActiveXObject)
     {
      try{
     	XMLHttpReq=new ActiveXObject("Msxm12.XMLHTTP");
	       }
	   catch(e){
				try{
			XMLHttpReq=new ActiveXObject("Microsoft.XMLHTTP");
							}catch(e){								
							}
				}
	  }
 }

function send(url)//用于传送用户名
{
	 createXMLHttpRequest();
	 url=url+"?uname="+document.getElementById("username").value;
	 
	 XMLHttpReq.open("post",url);
	 XMLHttpReq.onreadystatechange =proce;
	 XMLHttpReq.send(null);
}
function send2(url)//用户传送邮箱
{
	 createXMLHttpRequest();
	 url=url+"?email="+document.getElementById("e_mail").value;
	 
	 XMLHttpReq.open("post",url);
	 XMLHttpReq.onreadystatechange =proce2;
	 XMLHttpReq.send(null);
}
function proce2() {//用户传送邮箱
	if (XMLHttpReq.readyState == 4) {
		if (XMLHttpReq.status == 200) {
			var str = XMLHttpReq.responseText;
			document.getElementById("pp1").innerHTML = str;

		}else {
			window.alert(XMLHttpReq.status);
		}
	}
}

	function proce() {//用于传送用户名
		if (XMLHttpReq.readyState == 4) {
			if (XMLHttpReq.status == 200) {
				var str = XMLHttpReq.responseText;
				document.getElementById("msg").innerHTML = str;

			}else {
				window.alert(XMLHttpReq.status);
			}
		}
	}