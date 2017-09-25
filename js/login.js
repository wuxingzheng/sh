$(function(){
	$(".news .box .login_center .div4").click(function(){
					var name=$(".name1").val()
					var pass=$(".pwd").val()
					$.ajax({
						url:"http://datainfo.duapp.com/shopdata/userinfo.php",
						data:{
							status:"login",
							userID:name,
							password:pass
						},
						success:function(data){
							var str = JSON.parse(data);
							console.log(str.code)
							if(str.code){
								alert("登录成功")
								setCookie("name",name)
								setCookie("pass",pass)
								window.location.href = '../index.html'
							}else if(data==0){
								alert("用户名不存在")
							}else if(data==2){
								alert("用户名密码不符")
							}
						}
					})

				})
})