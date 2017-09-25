$(function(){
	//header部分
			//左部分移入移出
			$(".header .left_bar").mouseover(function(){
				$(".header .left").find("i").removeClass("i1").addClass("i2")
				$(".header .left").addClass("left1")
				$(".header .left_ul").css("display","block")
			})
			$(".header .left_bar .left_ul li").mouseover(function(){
				$(this).css({"background":"#eee"})
			})
			$(".header .left_bar .left_ul li").mouseout(function(){
				$(this).css({"background":"#fff"})
			})
			$(".header .left_bar").mouseout(function(){
				$(".header .left").find("i").removeClass("i2").addClass("i1")	
				$(".header .left").removeClass("left1")
				$(".header .left_ul").css("display","none")
			})
			// li 移入移出事件
			$(".header ul.right li:not(:first)").mouseover(function(){
				$(this).css({"background":"#fff"})
				$(this).find("a").css({"text-decoration":"none","color":"red"})
				$(this).find("i").removeClass("i1").addClass("i2")	
			})
			$(".header ul.right li:not(:first)").mouseout(function(){
				$(this).css({"background":"#f7f7f7"})
				$(this).find("a").css({"text-decoration":"none","color":"#666"})
				$(this).find("i").removeClass("i2").addClass("i1")	
			})
			$(".header ul.right li:first a").mouseover(function(){
				$(this).css({"text-decoration":"none","color":"red"})
			})
			$(".header ul.right li:first a").mouseout(function(){
				$(this).css({"color":"#666"})
			})
			$(".header ul.right li:first").mouseover(function(){
				$(this).css({"background":"#fff"})
			})
			$(".header ul.right li:first").mouseout(function(){
				$(this).css({"background":"#f7f7f7"})
			})
			
//header from  index
		//  判断header 是否登录
							//每次进入主页判断是否已登录	//#header
						var getname = getCookie("name")
						var getpass = getCookie("pass")
						var strname = ''
						if(getname!="" && getpass!=""){
							strname +="<a class='l succ' href='javascript:;'>Hi ," + getname+"</a>"
							strname += "<a class='l succ tuichu'  href='javascript:;'>退出</a>"
							$(".header ul.right li.first").html(strname)
				//			console.log(getname+":"+getpass+"登录成功")
					//		alert(1)
						}
				//单击退出登录
					$(".header ul.right li.first").on("click","a.tuichu",function(){
						deleteCookie("name")
						deleteCookie("pass")
						$(".header ul.right li.first").html("<i class='l'></i><a class='lu' href='javascript:;'>请登录 </a><a href='javascript:;'> 注册</a>")
						window.location.href = "login.html"
					})
				//单击登录按钮
					$(".header ul.right li.first a.lu").click(function(){
						window.location.href = "login.html"
					})
				//单击注册按钮跳转注册页面
					$(".header ul.right li.first a.zhuce_btn").click(function(){
						window.location.href = "register.html"
					})
					
					$(".wrap .big_box .div1 span.middle").text("￥"+getCookie("sum_money"))

					$(".wrap .big_box .div1 a.right").click(function(){
						$(this).parent().find(".detail").remove()
					})
					
					var timer = null
					timer = setInterval(countdown,1000)
					var now = 1800
					function countdown(){
						//30*60
						now--
						var min = Math.floor(now / 60) 
						var second = now % 60 
						//document.title = min + ":" + second
						$("span.minute").text(min)
						$("span.second").text(second+"\"")
					}
				//订单金额
				$("span.dingdanjine").text(getCookie("sum_money")) //middle
					
				var now1 = new Date()
				$("span.time").text(now1.getFullYear()+"-"+(now1.getMonth()+1)+"-"+now1.getDate()+" "+now1.getHours()+":"+now1.getSeconds())
			//	console.log(now.getFullYear()+"-"+(now.getMonth()+1)+"-"+now.getDate()+" "+now.getHours()+":"+now.getSeconds())
			// 点击微信支付弹出支付成功
				$(" .zhifu_btn").click(function(){
					deleteCookie("carnum")
					deleteCookie("sum_money")
					deleteCookie("xiangqing")
					$.ajax({
						url:"../json/goodlist.json",
						success:function(data){
							var msg = data.data
							for(var i in msg){
								if(getCookie("xiangqing"+i)){
									deleteCookie("xiangqing"+i)
									deleteCookie("cash"+i)
									
								}
							}
						}
					});
					
					window.location.href = "success.html"
				})
})