$(function(){
			$(window).scroll(function(){
				
				var scroll = $("body").scrollTop() || $("html").scrollTop()
				 if(scroll>=100){
					$("#top").animate({"top":0},30)
				}else if(scroll<100){
					$("#top").animate({"top":"-77px"},30)
				}
			})
			//top 登录注册
				$("#top .denglu .deng_left").click(function(){
					window.location.href = "html/login.html"
				})
				$("#top .denglu .deng_right").click(function(){
					window.location.href = "html/register.html"
				})
			
	//左侧边栏/ ul2 //total
			var length_sideleft = $(".sidebar_left ul li").size()
			//alert(length_sideleft)
			$(".sidebar_left ul li").mouseover(function(){
				//alert()
				
				$(this).find("i").css({"backgroundPosition":"-45px "+$(this).index()*(-41)+"px"})
			})
			$(".sidebar_left ul li").mouseout(function(){
				//alert()
				
				$(this).find("i").css({"backgroundPosition":"0 "+$(this).index()*(-41)+"px"})
			})
			$(".sidebar_left ul li").click(function(){
				var top = $("body").scrollTop() || $("html").scrollTop()
				var n = Math.floor((top-800)/490)
			//	$("body").scrollTop() || $("html").scrollTop() = 
			})
			//初始进入界面进行判断左侧边栏
				var Top = $("body").scrollTop() || $("html").scrollTop()
				if(Top>800){
					$(".sidebar_left").fadeIn()
				}else{
					$(".sidebar_left").fadeOut()
				}
			$(".sidebar_left").fadeOut()
			$(window).scroll(function(){
				var scrolltop = $("body").scrollTop() || $("html").scrollTop()
				//document.title = scrolltop
				if(scrolltop>800){
					$(".sidebar_left").fadeIn()
				}else{
					$(".sidebar_left").fadeOut()
				}
				var this_ = $(".sidebar_left ul li")
				for(var i=0;i<length_sideleft-1;i++){
					if(scrolltop>=800+i*490){
						$(".sidebar_left ul li").eq(i).find("i").css({"backgroundPosition":"-45px "+(i)*(-41)+"px"}).siblings().find("i").css({"backgroundPosition":"-45px "+($(this).index()*(-41))+"px"})
						for(var j in this_){
							if(j==i){
								continue
							}
							this_.eq(j).find("i").css({"backgroundPosition":"0px "+j*(-41)+"px"})
						}
					}
				}
				
			})
			$(".sidebar_left ul li").not(".last").click(function(){
				$("body,html").stop(true).animate({"scrollTop":800+$(this).index()*490},300)
			})
			$(".sidebar_left ul li.last").click(function(){
				$("body,html").stop(true).animate({"scrollTop":0},300)
			})
			
			
	//右侧边栏
			//我的信息图标移入移出事件
			$("#sidebar_right .up .bg").mouseover(function(){
				$(this).removeClass("bg1").addClass("bg2")
			//	$("#sidebar_right .up .span1").animate({"right":"38px"})
				span1(this,".span1","38px")
			})
			$("#sidebar_right .up .bg").mouseout(function(){
				$(this).removeClass("bg2").addClass("bg1")
				span1(this,".span1","-48px")
			})
			function span1(obj,attr1,val){
				$(obj).parents().find(attr1).stop(true).animate({"right":val})
			}
			
			//鼠标单击我的信息图标，切换登录界面
			var sidebar_switch = false;
			$("#sidebar_right .up .bg").click(function(){
				$("#sidebar_right .center .box_center").css("display","none")
					$("#sidebar_right .up .box1").css("display","block")
				if(!sidebar_switch){
					$("#sidebar_right").animate({"right":"276px"})
					//$("#sidebar_login").animate({"right":0})
				}else{
					$("#sidebar_right").animate({"right":"0px"})
					//$("#sidebar_login").animate({"right":"-276px"})
				}
				sidebar_switch = !sidebar_switch
			})
			$("#header ul.right li.first a.lu").click(function(){
				$("#sidebar_right").animate({"right":"276px"})
				sidebar_switch = true
			})
			//右侧边栏点击登录按钮进行登录
				$("#sidebar_right .up .box1 .di .div4 span").click(function(){
					var name = $("#sidebar_right .up .box1 .di .div2 input").val()
					var pass = $("#sidebar_right .up .box1 .di .div3 input").val()
					var str2 = ''
		//			console.log(name+":"+pass)
					$.ajax({
						url:"http://datainfo.duapp.com/shopdata/userinfo.php",
						data:{
							status:"login",
							userID:name,
							password:pass
						},
						success:function(data){
							var str = JSON.parse(data);
						//	console.log(str.code)
							
							if(str.code){
								alert("登录成功")
								str2 +="<a class='l succ' href='javascript:;'>Hi ," + name+"</a>"
							 	str2 += "<a class='l succ tuichu'  href='javascript:;'>退出</a>"
								$("#header ul.right li.first").html(str2)
								setCookie("name",name)
								setCookie("pass",pass)
							//	window.location.href = 'index.html'
							}else if(data==0){
								alert("用户名不存在")
							}else if(data==2){
								alert("用户名密码不符")
							}
						}
					})
				})
				//每次进入主页判断是否已登录
						var getname = getCookie("name")
						var getpass = getCookie("pass")
						var strname = ''
						if(getname!="" && getpass!=""){
							strname +="<a class='l succ' href='javascript:;'>Hi ," + getname+"</a>"
							strname += "<a class='l succ tuichu'  href='javascript:;'>退出</a>"
							$("#header ul.right li.first").html(strname)
				//			console.log(getname+":"+getpass+"登录成功")
							
						}
				//单击退出登录
					$("#header ul.right li.first").on("click","a.tuichu",function(){
						deleteCookie("name")
						deleteCookie("pass")
						$("#header ul.right li.first").html("<i class='l'></i><a class='lu' href='javascript:;'>请登录 </a><a href='javascript:;'> 注册</a>")
						window.location.href = "html/login.html"
					})
				//单击注册按钮跳转注册页面
					$("#header ul.right li.first a.zhuce_btn").click(function(){
						window.location.href = "html/register.html"
					})
				//单击图片进入列表页
				$(".floor2 .right ul .btn_list a").click(function(){
					window.location.href = "html/list.html"
				})
						
				
			$("#sidebar_right .up .box1 .ding").click(function(){
				$("#sidebar_right .up .box1").css("display","block")
				if(!sidebar_switch){
					$("#sidebar_right").animate({"right":"276px"})
					//$("#sidebar_login").animate({"right":0})
				}else{
					$("#sidebar_right").animate({"right":"0px"})
					//$("#sidebar_login").animate({"right":"-276px"})
				}
				sidebar_switch = !sidebar_switch
			
			})
			$("#sidebar_right .up .box1 .ding").mouseover(function(){
				$(this).css({"left":"3px"})
			})
			$("#sidebar_right .up .box1 .ding").mouseout(function(){
				$(this).css({"left":"0px"})
			})
			//购物车栏 移入移出事件
			$("#sidebar_right .center").mouseover(function(){
				$(this).css({"background":"#d62233"})
				move(this,".bg","bg1","bg2");
				//$(this).find(".bg").removeClass("bg1").addClass("bg2")
			})
			$("#sidebar_right .center").mouseout(function(){
				$(this).css({"background":"#333"})
				move(this,".bg","bg2","bg1");
			})
			//购物车栏点击切换购物车界面
				var sidebar_switch = false
			$("#sidebar_right .center .btn_center").click(function(){
					$("#sidebar_right .center .box_center").css("display","block")
					$("#sidebar_right .up .box1").css("display","none")
				if(!sidebar_switch){
					$("#sidebar_right").animate({"right":"276px"})
				//	$("#sidebar_login").animate({"right":0})
				}else{
					$("#sidebar_right").animate({"right":"0px"})
				//	$("#sidebar_login").animate({"right":"-276px"})
				}
				sidebar_switch = !sidebar_switch
			
			})
			//点击顶部符号切换购物车界面
				$("#sidebar_right .center .box_center .box01 .box01_btn").click(function(){
					$("#sidebar_right .center .box_center").css("display","block")
					$("#sidebar_right .up .box1").css("display","none")
				if(!sidebar_switch){
					$("#sidebar_right").animate({"right":"276px"})
				//	$("#sidebar_login").animate({"right":0})
				}else{
					$("#sidebar_right").animate({"right":"0px"})
				//	$("#sidebar_login").animate({"right":"-276px"})
				}
				sidebar_switch = !sidebar_switch
				})
				
		//对购物车数量进行判断  要是没有商品则添加cookie表示数量
				if(!getCookie("carnum")){
					setCookie("carnum",0)
				}

//添加购物车功能  由详情页引入
				
			//刚进入详情页时先加载之前已经添加到购物车的内容
				$.ajax({
					url:"json/goodlist.json",
					success:function(data){
						var msg = data.data
						var str = ""
						//console.log(msg)
						for(var i in msg){
							
							if(getCookie("xiangqing"+msg[i].id)){
								var oImg = msg[i].img
								var cash1 = Math.round((msg[i].spantxt)*(getCookie("xiangqing"+i))*100)/100
							//	console.log("有商品")
									str +=	"<li>"
									str +=	"<a class='l'><img src='"+oImg[0].img+"' alt='' /></a>"
									str +=	"<div class='l mid'>"
									str +=	"<p class='detail'>"+msg[i].atxt+"</p>"
									str +=	"<p class='pnum2 "+"xiangqing"+i+"'>"+msg[i].spantxt+"×"+getCookie("xiangqing"+i)+"</p>"
									str +=	"</div>"
									str +=	"<div class='r sum'>"
									str +=	"<span class='"+"xiangqing"+i+"'>￥"+cash1+"</span>"
									str +=	"</div>"
									str +=	"</li>"
							}
						}
						$("#sidebar_right .center .box_center ul.box02").append(str)
					}
				})
				$(".xinxi .mid .buy .middle").click(function(){
					var num = Number($(".xinxi .mid .num .l input").val())
					var sum =  Number($("#sidebar_right .center .num").text())
					sum += num
					//console.log(sum+num)					
					setCookie("carnum",sum)
					//购物总件数
					$("#sidebar_right .center .box_center .bottom .bottom_up p .car_num").text(getCookie("carnum"))
					setCookie("total",getCookie("carnum"))
					
					$("#sidebar_right .center .num").text(sum)
					$(".xinxi .gouwuche img").clone().appendTo($(".xinxi .gouwuche"))
					$(".xinxi .gouwuche img:first").css("display","block").stop(true).animate({"left":"1200px","top":"300px","width":"0px","height":"0px"},300,function(){
						$(this).remove()
						$(".xinxi .gouwuche img").css("display","none")
					})
					//获取点击进入详情页时的商品,通过ajax获取商品详细信息并添加到购物车
						var goods_id = getCookie("xiangqing")
						$.ajax({
							url:"json/goodlist.json",
							success:function(data){
								var msg = data.data
								var str = ''
								var sum_money = 0
								for(var i in msg){
									if(msg[i].id == goods_id){
											var oImg = msg[i].img
										//	var cash = Math.round((msg[i].spantxt)*(getCookie("xiangqing"+i))*100)/100
										if(getCookie("xiangqing"+i)){
											
											var oldnum = getCookie(("xiangqing")+i)
											var addnum = Number($(".xinxi .mid .num .l input").val()) 
											var newnum = Number(oldnum)+addnum
											setCookie("xiangqing"+i,newnum)
											var cash = Math.round((msg[i].spantxt)*(getCookie("xiangqing"+i))*100)/100
											$("#sidebar_right .center .box_center ul.box02").find("p.xiangqing"+i).html("<p class='pnum2 "+"xiangqing"+i+"'>"+msg[i].spantxt+"×"+getCookie("xiangqing"+i)+"</p>")
											$("#sidebar_right .center .box_center ul.box02").find("span.xiangqing"+i).html("<span class='"+"xiangqing"+i+"'>￥"+cash+"</span>")
											//console.log(cash)
											setCookie("cash"+i,cash)
										}else{
											var cash = Math.round((msg[i].spantxt)*100)/100
											var addnum = Number($(".xinxi .mid .num .l input").val()) 
											setCookie("xiangqing"+i,addnum)
											console.log(msg[i])											
											str +=	"<li>"
											str +=	"<a class='l'><img src='"+oImg[0].img+"' alt='' /></a>"
											str +=	"<div class='l mid'>"
											str +=	"<p class='detail'>"+msg[i].atxt+"</p>"
											str +=	"<p class='pnum2 "+"xiangqing"+i+"'>"+msg[i].spantxt+"×"+getCookie("xiangqing"+i)+"</p>"
											str +=	"</div>"
											str +=	"<div class='r sum'>"
											str +=	"<span class='"+"xiangqing"+i+"'>￥"+cash+"</span>"
											str +=	"</div>"
											str +=	"</li>"
											setCookie("cash"+i,cash)
										}
									//	console.log(str)
										$("#sidebar_right .center .box_center ul.box02").append(str)
										
									}
									//循环添加总价
										
										if(getCookie("cash"+i)){
										//	console.log(i+":"+getCookie("cash"+i))
											 sum_money += Number(getCookie("cash"+i))
											 
										}
										
										//	console.log(getCookie("cash0"))

								}
										//console.log(sum_money)
										//setCookie("sum_money",sum_money)
										setCookie("sum_money",Math.round(sum_money*100)/100)
										$("#sidebar_right .center .box_center .bottom .bottom_up p .sum_money").text(getCookie("sum_money"))
										
							}
						})
					
					//console.log(getCookie("cash0"))// str2
					
				})								
				$("#sidebar_right .center .num").text(getCookie("carnum"))
				
				//点击查看购物车进行跳转到购物车页面 #sidebar_right .center .box_center .bottom .bottom_down
				$("#sidebar_right .center .box_center .bottom .bottom_down").click(function(){
					window.location.href = "html/shopingCart.html"
				})
			//通过cookie获取列表及首页点击的信息
				var cookiename = getCookie("xiangqing")
				//alert(document.cookie)
				//console.log (cookiename == 2)
			$.ajax({
				url:"json/goodlist.json",
				success:function(data){
					var msg = data.data
					var str = ''
					var one = 1;
					for(var i in msg){
						if(cookiename==msg[i].id){
						//	console.log(msg[i].img)
							var img = msg[i].img
							for(var j in img){
							str += "<li class='l'><img src='../"+img[j].img+"'></li>"
							
							if(one == 1){
								//$(".xinxi .zoom .small_div .small_pic").attr("src","../"+msg[i].img)
								//$(".xinxi .zoom .big_div .img1").attr("src","../"+msg[i].img)
								$(".xinxi .zoom .small_div .small_pic").attr("src","../"+img[j].img)
								$(".xinxi .zoom .big_div .img1").attr("src","../"+img[j].img)
								$(".xinxi .gouwuche img").attr("src","../"+img[j].img)
								one++								
							}
						//	console.log(img[j].img)
							}
							$(".xinxi .mid .h1").html(msg[i].atxt)
							$(".xinxi .mid .price .price_line strong").html(msg[i].spantxt)
						//	<li class="l"><img src="../images/1.jpg"></li>
								//console.log(msg[i].img)
						}
						
						
					}
					$(".xinxi .left ul").append(str)
					//alert(1)
				}
				
			});
			
			//刚进入详情页时判断购物车是否有商品 ， 没有则添加
	//个数
		if(getCookie("total")){
				$("#sidebar_right .center .box_center .bottom .bottom_up p .car_num").text(getCookie("carnum"))
				setCookie("total",getCookie("carnum"))
			}else{
				//setCookie("xiangqing"+i,addnum)
				setCookie("total",0)
			}
	//总金额
		//#sidebar_right .center .box_center .bottom .bottom_up
		if(getCookie("sum_money")){
		//	console.log("有总额")
			$("#sidebar_right .center .box_center .bottom .bottom_up p .sum_money").text(getCookie("sum_money"))
		//	setCookie("sum_money",getCookie(""))
		}else{
			setCookie("sum_money",0)
		}
				
				
//以上由详情页引入				
				
				
				
				
				
			
			//我的收藏移入移出事件
			$("#sidebar_right .down .bg_1").mouseover(function(){
				move2(this,"bg_11","bg_12");
				span1(this,".span10","38px")
			})
			$("#sidebar_right .down .bg_1").mouseout(function(){
				move2(this,"bg_12","bg_11");
				span1(this,".span10","-48px")
			})
			//浏览历史移入移出
			$("#sidebar_right .down .bg_2").mouseover(function(){
				move2(this,"bg_21","bg_22");
				span1(this,".span20","38px")
			})
			$("#sidebar_right .down .bg_2").mouseout(function(){
				move2(this,"bg_22","bg_21");
				span1(this,".span20","-48px")
			})
			//手机专享app 二维码移入移出
			$("#sidebar_right .down .bg_3").mouseover(function(){
				move2(this,"bg_31","bg_32");
				span1(this,".span30","38px")
				
			})
			$("#sidebar_right .down .bg_3").mouseout(function(){
				move2(this,"bg_32","bg_31");
				span1(this,".span30","-134px")
			})
			//我的客服移入移出
			$("#sidebar_right .down .bg_4").mouseover(function(){
				move2(this,"bg_41","bg_42");
				span1(this,".span40","38px")
			})
			$("#sidebar_right .down .bg_4").mouseout(function(){
				move2(this,"bg_42","bg_41");
				span1(this,".span40","-48px")
			})
			//返回顶部移入移出
			$("#sidebar_right .down .bg_5").mouseover(function(){
				move2(this,"bg_51","bg_52");
				span1(this,".span50","38px")
			})
			$("#sidebar_right .down .bg_5").mouseout(function(){
				move2(this,"bg_52","bg_51");
				span1(this,".span50","-48px")
			})
			//单击返回顶部
			$("#sidebar_right .down .bg_5").click(function(){
				
				$("body,html").stop(true).animate({"scrollTop":0},300)
			})
			//移入移出切换图片函数
			function move(obj,class1,class2,class3){				
					$(obj).find(class1).removeClass(class2).addClass(class3)				
			}
			function move2(obj,class1,class2){				
					$(obj).removeClass(class1).addClass(class2)				
			}
	//顶部	
	//header部分
			//点击注册按钮跳转注册页面
				$("#header ul.right li.first a.zhuce_btn").click(function(){
					window.location.href = "html/register.html"
				//	alert(1)
				})
			//左部分移入移出
			$("#header .left_bar").mouseover(function(){
				$("#header .left").find("i").removeClass("i1").addClass("i2")
				$("#header .left").addClass("left1")
				$("#header .left_ul").css("display","block")
			})
			$("#header .left_bar .left_ul li").mouseover(function(){
				$(this).css({"background":"#eee"})
			})
			$("#header .left_bar .left_ul li").mouseout(function(){
				$(this).css({"background":"#fff"})
			})
			$("#header .left_bar").mouseout(function(){
				$("#header .left").find("i").removeClass("i2").addClass("i1")	
				$("#header .left").removeClass("left1")
				$("#header .left_ul").css("display","none")
			})
			// li 移入移出事件
			$("#header ul.right li:not(:first)").mouseover(function(){
				$(this).css({"background":"#fff"})
				$(this).find("a").css({"text-decoration":"none","color":"red"})
				$(this).find("i").removeClass("i1").addClass("i2")	
			})
			$("#header ul.right li:not(:first)").mouseout(function(){
				$(this).css({"background":"#f7f7f7"})
				$(this).find("a").css({"text-decoration":"none","color":"#666"})
				$(this).find("i").removeClass("i2").addClass("i1")	
			})
			$("#header ul.right li:first a").mouseover(function(){
				$(this).css({"text-decoration":"none","color":"red"})
			})
			$("#header ul.right li:first a").mouseout(function(){
				$(this).css({"color":"#666"})
			})
			$("#header ul.right li:first").mouseover(function(){
				$(this).css({"background":"#fff"})
			})
			$("#header ul.right li:first").mouseout(function(){
				$(this).css({"background":"#f7f7f7"})
			})
	//nav部分
	// .nav .left 下ul.out li的移入移出
	$(".nav .left ul.out li.outli").mouseover(function(){
		var index = $(this).index()
		//alert(index)
		var x=-26;
		var y=-30*(index);		
		$(this).css({"background":"#f9f9f9"}).find("a.outa").css({"color":"black"})		
		$(this).find("i.outi").css({"backgroundPosition":"-26px "+y+"px"})		
		$(this).find("div.box1").css({"display":"block"})
		//.nav .left ul li.li1
	})
	$(".nav .left ul.out li.outli a.outa").mouseover(function(){
		
		$(this).css({"color":"red"})
	})
	$(".nav .left ul.out li.outli").mouseout(function(){
		var index = $(this).index()
		var x=0;
		var y=-30*(index);	
		$(this).find("i.outi").css({"backgroundPosition":x+"px "+y+"px"})
		$(this).css({"background":"#e6133c"}).find("a.outa").css({"color":"white"})
		$(this).find("div.box1").css({"display":"none"})
		
	})
		

	//.nav .right ul请求json数据
	$.ajax({
		url:"json/nav1.json",
		success:function(data){
			var msg = data.data
			var str = ''
			for(var i in msg){
				str += "<li><a href='#'>"+msg[i].name+"</a><span></span></li>"
			}
			$(".nav .right").html(str)
			for(var i=0;i<$(".nav .right li").size();i++){
				var wid = $(".nav .right li").eq(i).width() +"px"
				$(this).find("span").css({'width':wid})
				
			}
			//var msg1 = $(".nav .right li").eq(2).width()
			//for(var i in msg1){
			//	console.log($(".nav .right li").size())
		//	}
			//alert($(":last").width())
			$(".nav .right li").eq(4).css({"width":"97px","height":"34px"}).html("<img src='img/index/nav6.jpg'/><span></span>")
		}
		
		
		
	});
			$(".nav .right").on("mouseover","li",function(){
				$(this).find("span").css({"display":"block"})
			})
			$(".nav .right").on("mouseout","li",function(){
				$(this).find("span").css({"display":"none"})
			})
			
			

	//banner请求json数据
		var timer = null
				var body_width = $("body").width() || $("html").width()
				var li_width = 785
				var l_banner = body_width * 0.5 - li_width *0.5 + 'px'
				$("#banner ul li img").css({"left":l_banner})
				var banner_index = 0
				var length = $("#banner ul li").size()
				// l
				//初入界面下边为0的先轮播一轮
				$("#banner .yuan span").eq(0).css({"background":"#e6133c"}).animate({"width":"30px"},500).siblings().css({"background":"#343434"}).animate({"width":"15px"},500)
				$("#banner ul li").eq(0).fadeIn(500).siblings().fadeOut(500)
				
				
				timer = setInterval(time,1500)
				function time(){						
						banner_index++;
						if(banner_index>=length){
							banner_index = 0
						}
						$("#banner .yuan span").eq(banner_index).css({"background":"#e6133c"}).animate({"width":"30px"},500).siblings().css({"background":"#343434"}).animate({"width":"15px"},500)
						$("#banner ul li").eq(banner_index).fadeIn(500).siblings().fadeOut(500)
					//	console.log("时间")
					}
		//	}
			
	//	});
//banner 轮播图
					
		
		
//banner          mark移入移出
					$("#banner .mark").mouseover(function(){
						$(this).css({"opacity":"1","filter":"alpha(opacity=100)"})
						clearInterval(timer)
					//	console.log(1)
					})
					$("#banner .mark").mouseout(function(){
						clearInterval(timer)
						$(this).css({"opacity":"0","filter":"alpha(opacity=0)"})
						timer = setInterval(time,3000)
					//	console.log(2)
					})
					//左右按钮移入移出点击事件	
					$("#banner .mark .mark_left").mouseover(function(){
						$(this).find("i").css({"backgroundPosition":"0px -70px"})
					})
					$("#banner .mark .mark_left").mouseout(function(){
						$(this).find("i").css({"backgroundPosition":"0px 0px"})
					})
					$("#banner .mark .mark_left").click(function(){
						//console.log(banner_index)
						banner_index--;
						if(banner_index<=-1){
							banner_index = length-1
						}
						console.log(banner_index)
						$("#banner .yuan span").eq(banner_index).css({"background":"#e6133c"}).stop(true).animate({"width":"30px"},500).siblings().css({"background":"#343434"}).stop(true).animate({"width":"15px"},500)
						$("#banner ul li").eq(banner_index).fadeIn(500).siblings().fadeOut(500)
					})
					$("#banner .mark .mark_right").click(function(){
						//console.log(banner_index)
						banner_index++;
						if(banner_index>=length){
							banner_index = 0
						}
						console.log(banner_index)
						$("#banner .yuan span").eq(banner_index).css({"background":"#e6133c"}).stop(true).animate({"width":"30px"},500).siblings().css({"background":"#343434"}).stop(true).animate({"width":"15px"},500)
						$("#banner ul li").eq(banner_index).fadeIn(500).siblings().fadeOut(500)
					})
					
					$("#banner .mark .mark_right").mouseover(function(){
						$(this).find("i").css({"backgroundPosition":"-40px -70px"})
					})
					$("#banner .mark .mark_right").mouseout(function(){
						$(this).find("i").css({"backgroundPosition":"-40px 0px"})
					})
				// 给banner轮播图下标的小圆圈添加点击事件
					$("#banner .yuan span").click(function(){
						//console.log($(this).index())
						banner_index = $(this).index()
						$("#banner .yuan span").eq(banner_index).css({"background":"#e6133c"}).stop(true).animate({"width":"30px"},500).siblings().css({"background":"#343434"}).stop(true).animate({"width":"15px"},500)
						$("#banner ul li").eq(banner_index).fadeIn(500).siblings().fadeOut(500)
					})
					$("#banner .yuan").mouseover(function(){
						
						$("#banner .mark").css({"opacity":"1","filter":"alpha(opacity=100)"})
						clearInterval(timer)
					//	console.log(1)
					
					})
		
	
 	//floor1下的轮播图   
 		var length1 = $(".floor1 .left ul li").size()
 		var index1 = 0
 		var l = ''
 		var timer_f1 = null
 		
		timer_f1 = setInterval(timef1,4000)
		function timef1(){
			index1++
			if(index1 >=length1){
				index1 = 0
			}
			l = -index1*306+"px"
			$(".floor1 .left ul").animate({"left":"-306px"},1000,function(){
				$(".floor1 .left ul li:first").clone().appendTo($(".floor1 .left ul"))
				$(".floor1 .left ul li:first").remove()
				$(".floor1 .left ul").css({"left":0})
				$(".floor1 .left .box p").eq(index1).find("span").animate({"width":"30px"},3000,function(){
					$(".floor1 .left .box p").eq(index1).siblings().find("span").css({"width":0})
				})
			})
		}
		$(".floor1 .left .box p").eq(0).find("span").animate({"width":"30px"},4000,function(){
					$(".floor1 .left .box p").eq(0).find("span").css({"width":0})
				})
		
			
		//floor1 right down
			$(".floor1 .right  a").mouseover(function(){
				$(this).find("img").stop(true).animate({"left":"-10px"},300)
			})
			$(".floor1 .right  a").mouseout(function(){
				$(this).find("img").stop(true).animate({"left":"0px"},300)
			})

	//特色频道teshe边框阴影
		//.teshe .tu1 a:hover left: -5px;
			$(".teshe  a").mouseover(function(){
				
				var w = $(this).width() + 6 + "px"
				var h = $(this).height() + 6 + "px"
				$(this).find("img").stop(true).animate({"left":"-3px","top": "-3px","width": w,"height": h},300)
			//	$(this).find(".tu1").animate({"box-shadow":"10px 10px 10px #BFBFBF"},300)				
			})
			$(".teshe  a").mouseout(function(){
				var width = $(this).width()  + "px"
				var height = $(this).height()  + "px"
				$(this).find("img").stop(true).animate({"left":"0px","top": "0px","width": width,"height": height},300)
			})

	//floor2  轮播图   
 		var length2 = $(".floor2 .left ul li").size()
 		var index2 = 0
 		var l2 = ''
 		
		setInterval(function(){
			index2++
			if(index2 >=length2){
				index2 = 0
			}
			l2 = -index2*306+"px"
			$(".floor2 .left ul").animate({"left":"-306px"},1000,function(){
				$(".floor2 .left ul li:first").clone().appendTo($(".floor2 .left ul"))
				$(".floor2 .left ul li:first").remove()
				$(".floor2 .left ul").css({"left":0})
				$(".floor2 .left .box p").eq(index2).find("span").animate({"width":"30px"},3000,function(){
					$(".floor2 .left .box p").eq(index2).siblings().find("span").css({"width":0})
				})
			})
		},4000)
		$(".floor2 .left .box p").eq(0).find("span").animate({"width":"30px"},4000,function(){
					$(".floor2 .left .box p").eq(0).find("span").css({"width":0})
				})
		//floor2 right change 移入移出事件
			$(".floor2 .right .change  a").mouseover(function(){
				$(this).find("img").animate({"left":"-10px"},300)
			})
			$(".floor2 .right .change a").stop(true).mouseout(function(){
				$(this).find("img").stop(true).animate({"left":"0px"},300)
			})
		//floor2 right down移入移出透明度变化
			$(".floor2 .right ul.down a  img").mouseover(function(){
				$(this).fadeTo(300,0.5)
			})
			$(".floor2 .right ul.down a  img").mouseout(function(){
				$(this).fadeTo(300,1)
			})
//floor3 下的轮播图   
 		var length3 = $(".floor1 .left ul li").size()
 		var index3 = 0
 		var l3 = ''
 		var timer_f3 = null
 		//index1
		timer_f3 = setInterval(function(){
			index3++
			if(index3 >=length3){
				index3 = 0
			}
			l3 = -index3*306+"px"
			$(".floor3 .left ul").animate({"left":"-306px"},1000,function(){
				$(".floor3 .left ul li:first").clone().appendTo($(".floor3 .left ul"))
				$(".floor3 .left ul li:first").remove()
				$(".floor3 .left ul").css({"left":0})
				$(".floor3 .left .box p").eq(index3).find("span").animate({"width":"30px"},3000,function(){
					$(".floor3 .left .box p").eq(index3).siblings().find("span").css({"width":0})
				})
			})
		},4000)
		$(".floor3 .left .box p").eq(0).find("span").animate({"width":"30px"},4000,function(){
					$(".floor3 .left .box p").eq(0).find("span").css({"width":0})
				})
		//floor3 right down
			$(".floor3 .right  a").mouseover(function(){
				$(this).find("img").animate({"left":"-10px"},300)
			})
			$(".floor3 .right  a").stop(true).mouseout(function(){
				$(this).find("img").stop(true).animate({"left":"0px"},300)
			})



//floor4 下的轮播图    
 		var length4 = $(".floor41 .left ul li").size()
 		var index4 = 0
 		var l4 = ''
 		var timer_f4 = null
		timer_f4 = setInterval(function(){
			index4++
			if(index4 >=length4){
				index4 = 0
			}
			$(".floor41 .left ul").animate({"left":"-306px"},1000,function(){
				$(".floor41 .left ul li:first").clone().appendTo($(".floor41 .left ul"))
				$(".floor41 .left ul li:first").remove()
				$(".floor41 .left ul").css({"left":0})
				$(".floor41 .left .box p").eq(index4).find("span").animate({"width":"30px"},3000,function(){
					$(".floor41 .left .box p").eq(index4).siblings().find("span").css({"width":0})
				})
			})
		},4000)
		$(".floor41 .left .box p").eq(0).find("span").animate({"width":"30px"},4000,function(){
					$(".floor41 .left .box p").eq(0).find("span").css({"width":0})
				})
		//floor4 right change 移入移出事件
			$(".floor4 .right .change  a").mouseover(function(){
				$(this).find("img").animate({"left":"-10px"},300)
			})
			$(".floor4 .right .change a").stop(true).mouseout(function(){
				$(this).find("img").stop(true).animate({"left":"0px"},300)
			})
		//floor4 right down移入移出透明度变化
			$(".floor4 .right ul.down a  img").mouseover(function(){
				$(this).fadeTo(300,0.5)
			})
			$(".floor4 .right ul.down a  img").mouseout(function(){
				$(this).fadeTo(300,1)
			})

//floor5 下的轮播图    
 		var length5 = $(".floor51 .left ul li").size()
 		var index5 = 0
 		var l5 = ''
 		
		setInterval(function(){
			index5++
			if(index5 >=length5){
				index5 = 0
			}
			$(".floor51 .left ul").animate({"left":"-306px"},1000,function(){
				$(".floor51 .left ul li:first").clone().appendTo($(".floor51 .left ul"))
				$(".floor51 .left ul li:first").remove()
				$(".floor51 .left ul").css({"left":0})
				$(".floor51 .left .box p").eq(index5).find("span").animate({"width":"30px"},3000,function(){
					$(".floor51 .left .box p").eq(index5).siblings().find("span").css({"width":0})
				})
			})
		},4000)
	//	$(".floor51 .left .box p").eq(0).find("span").animate({"width":"30px"},4000,function(){
	//				$(".floor51 .left .box p").eq(0).find("span").css({"width":0})
	//			})
		//floor4 right change 移入移出事件
			$(".floor5 .right .change  a").mouseover(function(){
				$(this).find("img").animate({"left":"-10px"},300)
			})
			$(".floor5 .right .change a").stop(true).mouseout(function(){
				$(this).find("img").stop(true).animate({"left":"0px"},300)
			})
		//floor4 right down移入移出透明度变化
			$(".floor5 .right ul.down a  img").mouseover(function(){
				$(this).fadeTo(300,0.5)
			})
			$(".floor5 .right ul.down a  img").mouseout(function(){
				$(this).fadeTo(300,1)
			})

//floor6 下的轮播图    
 		var length6 = $(".floor61 .left ul li").size()
 		var index6 = 0
 		var l = ''
 		var timer_f6 = null
		timer_f6 = setInterval(function(){
			index6++
			if(index6 >=length6){
				index6 = 0
			}
			$(".floor61 .left ul").animate({"left":"-306px"},1000,function(){
				$(".floor61 .left ul li:first").clone().appendTo($(".floor61 .left ul"))
				$(".floor61 .left ul li:first").remove()
				$(".floor61 .left ul").css({"left":0})
				$(".floor61 .left .box p").eq(index6).find("span").animate({"width":"30px"},3000,function(){
					$(".floor61 .left .box p").eq(index6).siblings().find("span").css({"width":0})
				})
			})
		},4000)
		$(".floor61 .left .box p").eq(0).find("span").animate({"width":"30px"},4000,function(){
					$(".floor61 .left .box p").eq(0).find("span").css({"width":0})
				})
		//floor71 下的轮播图    
 		var length7 = $(".floor71 .left ul li").size()
 		var index7 = 0
 		var l7 = ''
 		var timer_f7 = null
		timer_f7 = setInterval(function(){
			index7++
			if(index7 >=length7){
				index7 = 0
			}
			$(".floor71 .left ul").animate({"left":"-306px"},1000,function(){
				$(".floor71 .left ul li:first").clone().appendTo($(".floor71 .left ul"))
				$(".floor71 .left ul li:first").remove()
				$(".floor71 .left ul").css({"left":0})
				$(".floor71 .left .box p").eq(index7).find("span").animate({"width":"30px"},3000,function(){
					$(".floor71 .left .box p").eq(index7).siblings().find("span").css({"width":0})
				})
			})
		},4000)
//		$(".floor71 .left .box p").eq(0).find("span").animate({"width":"30px"},4000,function(){
//					$(".floor81 .left .box p").eq(0).find("span").css({"width":0})
//				})
		//floor81 下的轮播图    
 		var length8 = $(".floor81 .left ul li").size()
 		var index8 = 0
 		var l = ''
 		var timer_f8 = null
		timer_f8 = setInterval(function(){
			index8++
			if(index8 >=length8){
				index8 = 0
			}
			$(".floor81 .left ul").animate({"left":"-306px"},1000,function(){
				$(".floor81 .left ul li:first").clone().appendTo($(".floor81 .left ul"))
				$(".floor81 .left ul li:first").remove()
				$(".floor81 .left ul").css({"left":0})
				$(".floor81 .left .box p").eq(index8).find("span").animate({"width":"30px"},3000,function(){
					$(".floor81 .left .box p").eq(index8).siblings().find("span").css({"width":0})
				})
			})
		},4000)
		$(".floor81 .left .box p").eq(0).find("span").animate({"width":"30px"},4000,function(){
					$(".floor81 .left .box p").eq(0).find("span").css({"width":0})
				})

//  goodlist请求json数据
		$.ajax({
			url:"json/goodlist.json",
			success:function(data){
				var msg = data.data
				var str = ''				
				for(var i=0;i<=29;i++){
					var img = msg[i].img					
					str +=	"<li><img src='"+img[0].img+"'/><a href='javascript:;'>"+msg[i].atxt+"</a><span>￥"+msg[i].spantxt+"</span></li>" 
				}
				$(".youlike .goodlist").append(str)
			}
		});

	//	点击商品进入详情页
		$(".youlike .goodlist").on("click","li img",function(){
			var num = $(this).parents().index()
			setCookie("xiangqing",num)
			window.location.href = "html/product.html"
		})

})







