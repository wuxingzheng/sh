$(function(){	
	
	function reg(){
		//用户名检测
		$("input.name1").change(function(){
			var name=$(".name1").val()
			var reg = /^\w{6,20}$/;
			if(reg.test(name)){
				$(".info .yonghu .name_test").css({"display":"none"})
				$(".info  .yonghu .success").css({"display":"inline-block"})
		//		console.log("正确")
			}else{
				$(".info .yonghu .name_test").css({"display":"inline-block"})
				$(".info  .yonghu .success").css({"display":"none"})
				return false;
			}
		})
	//密码检测
		$("input.pwd").blur(function(){
			var pass=$(".pwd").val()
			var reg = /^\w{6,20}$/;
			if(reg.test(pass)){
				$(".info .mima .name_test").css({"display":"none"})
				$(".info .mima  .success").css({"display":"inline-block"})
		//		console.log("正确")
			}else{
				$(".info .mima .name_test").css({"display":"inline-block"})
				$(".info  .mima .success").css({"display":"none"})
				return false;
			}
		})
	//确认密码检测
		$(".queren input.inp").blur(function(){
			var pass_queren = $(".queren  input.inp").val()
		//	console.log(pass_queren)
			//var pass=$(".pwd").val()
			var reg = $(".pwd").val();
			if(reg==pass_queren){
				$(".info .queren .name_test").css({"display":"none"})
				$(".info .queren  .success").css({"display":"inline-block"})
		//		console.log("正确")
			}else{
				$(".info .queren .name_test").css({"display":"inline-block"})
				$(".info  .queren .success").css({"display":"none"})
				return false;
			}
		})	
	//手机号检测  var phone = /^1([38]\d|4[57]|5[0-35-9]|7[06-8]|8[89])\d{8}$/;
		$(".phone input.inp").blur(function(){
			var number = $(".phone  input.inp").val()
		//	console.log(number)
			//var pass=$(".pwd").val()
			var phone = /^1([38]\d|4[57]|5[0-35-9]|7[06-8]|8[89])\d{8}$/;
			if(phone.test(number)){
				$(".info .phone .name_test").css({"display":"none"})
				$(".info .phone  .success").css({"display":"inline-block"})
				console.log("正确")
			}else{
				$(".info .phone .name_test").css({"display":"inline-block"})
				$(".info  .phone .success").css({"display":"none"})
				return false;
			}
		})
	//验证码
			$(".info .yanzheng .name_test a.l").click(function(){
				var str = ''
				var arr = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k']
				for(var i=0;i<=3;i++){
					var num = Math.floor(Math.random()*arr.length)
					str += arr[num]
				}
				$("div.suiji").html(str)
			})
				var strchu = ''
				var arr1 = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k']
				for(var i=0;i<=3;i++){
					var num = Math.floor(Math.random()*arr1.length)
					strchu += arr1[num]
				}
				$("div.suiji").html(strchu)
	
//判断验证码	
				$(".yanzheng input.inp").blur(function(){
					var number = $(".yanzheng  input.inp").val()
					var yan    = $(".info .yanzheng .name_test div.suiji").text()
					if(number == yan){
						$(".info .yanzheng  .name_test .pan").css({"display":"none"})
					}else{
						$(".info .yanzheng  .name_test .pan").css({"display":"inline-block"})
						return false;
					}
				})	
				$(".info .yanzheng .name_test").css({"display":"inline-block"})
				
//邮箱判断
				var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			
				$(".email input.inp").blur(function(){
					var email = $(".email  input.inp").val()
					//console.log(number)
					//var pass=$(".pwd").val()
					var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
					if(filter.test(email)){
						$(".info .email .name_test").css({"display":"none"})
						$(".info .email  .success").css({"display":"inline-block"})
						//console.log("正确")
					}else{
						$(".info .email .name_test").css({"display":"inline-block"})
						$(".info  .email .success").css({"display":"none"})
						return false;
					}
				})
				return true;
	}
	//当所有验证通过后方可进行注册
	$(".info .finish").click(function(){
					var name=$(".name1").val()
					var pass=$(".pwd").val()
					if(reg()){
							$.ajax({
							url:"http://datainfo.duapp.com/shopdata/userinfo.php",
							data:{
								status:"register",
								userID:name,
								password:pass
							},
							success:function(data){
								console.log(data)
								if(data==1){
									alert("恭喜您，注册成功")
									window.location.href="login.html"
								}else if(data==0){
									("用户名重名")
								}else if(data==2){
									alert("数据库报错")
								}
							}
						})
					}
					console.log(reg())
					
				})
				
})
