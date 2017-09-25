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
		//点击提交订单跳转支付页面
			$(".content .invoice .bigbox .div5 .box1").click(function(){
				window.location.href = "payment.html"
			})
			
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

			//初始化界面时先添加购物车已经拥有的商品
				$.ajax({
					url:"../json/goodlist.json",
					success:function(data){
						var msg = data.data
						var str = ''
						for(var i in msg){
							if(getCookie("xiangqing"+i)){
								var oImg = msg[i].img
								
							str +=	"<div class='div2'>"
							str += 	"<div class='l left'>"
							str +=	"<a class='l' href='javascript:;'><img src='../"+oImg[0].img+"'></a>"
							str +=	"<div class='l'>"
							str +=		"<p><a href='javascript:;'>"+msg[i].atxt+"</a></p>"
							str +=		"<div class='down'>"
							str +=			"<span class='l qu'>不支持自提</span>"
							str +=			"<span class='l tui'>不支持7天无理由退货</span>"
							str +=		"</div>"
							str +=	"</div>"
							str +="</div>"
							str +="<div class='r right'>"
							str +=	"<span class='l span1'>"+Number(getCookie("xiangqing"+i))*2+"kg</span><span class='l span2'>￥"+msg[i].spantxt+"</span><span class='l span3'>"+getCookie("xiangqing"+i)+"</span>"
							str +="</div>"
							str +="</div>"
							console.log(oImg[0].img)
							}
						}
						$(".content .goods_info .goods_list .tianjia").html(str)
						
						//重量小计
						$("span.kg").text(Number(getCookie("carnum"))*2+"kg")
						$(".content .goods_info .goods_list .div3 .box2 span.mid").text("￥"+getCookie("sum_money"))
						$("span.jine").text(getCookie("sum_money"))
						$(".div5 .box2 span.r").text("￥"+getCookie("sum_money"))
					}
				})
			
	
			
			
})