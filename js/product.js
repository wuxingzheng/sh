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
	//nav部分
	// .nav .left 下ul li的移入移出
	$(".nav .left ul li").mouseover(function(){
		var index = $(this).index()
		var x=-26;
		var y=-30*(index);		
		$(this).css({"background":"#f9f9f9"}).find("a").css({"color":"black"})		
		$(this).find("i").css({"backgroundPosition":"-26px "+y+"px"})
	})
	$(".nav .left ul li a").mouseover(function(){
		
		$(this).css({"color":"red"})
	})
	$(".nav .left ul li").mouseout(function(){
		var index = $(this).index()
		var x=0;
		var y=-30*(index);	
		$(this).find("i").css({"backgroundPosition":x+"px "+y+"px"})
		$(this).css({"background":"#e6133c"}).find("a").css({"color":"white"})
		
	})
		

	//.nav .right ul请求json数据
	$.ajax({
		url:"../json/nav1.json",
		success:function(data){
			var msg = data.data
			var str = ''
			for(var i in msg){
				str += "<li><a href='#'>"+msg[i].name+"</a></li>"
			}
			$(".nav .right").html(str)
			
		}
		
	});
	$(".nav .right").on("mouseover","li",function(){
		$(this).css({"background":"#E6133C"})
	})
	$(".nav .right").on("mouseout","li",function(){
		$(this).css({"background":"#333"})
	})			
	//  所有商品栏二季菜单		
	$(".nav .left .up").mouseover(function(){
		$(this).find("p").css({"textDecoration":"underline"})
		$(".nav .left ul").css({"display":"block"})
	})
	$(".nav .left ul").mouseover(function(){
		$(this).css({"display":"block"})
	})
	$(".nav .left ul").mouseout(function(){
		$(this).css({"display":"none"})
	})
	
	$(".nav .left .up").mouseout(function(){
		$(this).find("p").css({"textDecoration":"none"})
		$(".nav .left ul").css({"display":"none"})
	})
			
	// .xin 栏    .zoom    放大镜		/span1
				$(".mark").mouseover(function(){
					$(".spanmark").css({"display":"block"})
					$(".big_div").css({"display":"block"})
				})
				$(".mark").mouseout(function(){
					$(".spanmark").css({"display":"none"})
					$(".big_div").css({"display":"none"})
				})
				$(".mark").mousemove(function(evt){
					var e = evt|| window.event;
					var l = e.clientX - $(".small_div").offset().left - $(".spanmark").width()/2 
					var t = e.clientY - $(".small_div").offset().top - $(".spanmark").height()/2
				//	console.log($(".spanmark").width()/2)
					if(l<0){
						l=0;
					}else if(l>$(".small_div").width()-$(".spanmark").width()){
						l = $(".small_div").width()-$(".spanmark").width()
					}
					if(t<0){
						t = 0;
					}else if(t>$(".small_div").height()-$(".spanmark").height()){
						t = $(".small_div").height()-$(".spanmark").height()
					}
					var left = l + "px"
					var top = t + "px"
					$(".spanmark").css({"left":left,"top":top})
					var percentX = l / ($(".small_div").width()-$(".spanmark").width());
					var percentY = t /($(".small_div").height()-$(".spanmark").height());
					var imgleft = -percentX * ($(".img1").width() - $(".big_div").width()) + "px"
					var imgtop = -percentY * ($(".img1").height() - $(".big_div").height()) + "px"
					$(".img1").css({"left":imgleft,"top":imgtop})					
				})
				//放大镜小图移入移出事件 .left ul li
					//$(".xinxi .zoom .small_div .small_pic").attr("src",$(".xinxi .left ul li:first").find("img").attr("src"))
					//$(".xinxi .zoom .big_div .img1").attr("src",$(".xinxi .left ul li:first").find("img").attr("src"))
					$(".xinxi .left ul").on("mouseover"," li",function(){
						$(this).css({"border": "1px solid #999"})
						$(".xinxi .zoom .small_div .small_pic").attr("src",$(this).find("img").attr("src"))
						$(".xinxi .zoom .big_div .img1").attr("src",$(this).find("img").attr("src"))
						
						
					})
					$(".xinxi .left ul").on("mouseout"," li",function(){
						$(this).css({"border": "1px solid #eee"})
						$(".xinxi .zoom .small_div .small_pic").attr("src",$(this).find("img").attr("src"))
						$(".xinxi .zoom .big_div .img1").attr("src",$(this).find("img").attr("src"))
						
						
					})
				//	console.log($(".xinxi .left ul li:first").find("img").attr("src"))
					$(".left ul li").mouseout(function(){
						$(this).css({"border": "1px solid #eee"})
					})
		//.xinxi .left .lianjie div.r i.last:hover
				//.lianjie div.r 移入移出事件
				$(".lianjie div.r").mouseover(function(){
					$(this).find("i.last").css({"backgroundPosition":"0px -96px"})
					$(this).find("i.first").css({"backgroundPosition":"-1px -148px"})
					$(this).css({"border-color":"#ccc"})
					$(this).find("span.down").css({"display":"block"})
					
				})
				$(".lianjie div.r").mouseout(function(){
					$(this).find("i.last").css({"backgroundPosition":"0px 0px"})
					$(this).find("i.first").css({"backgroundPosition":"-1px -95px"})
					$(this).css({"border-color":"#fff"})//.xinxi .left .lianjie div.r span.down
					$(this).find("span.down").css({"display":"none"})
					
				})
			//.xinxi .left .lianjie p.sou
				$(".xinxi .left .lianjie p.sou").mouseover(function(){
					$(this).find("i").css({"background-position":"-1px 0px"})
				})
				$(".xinxi .left .lianjie p.sou").mouseout(function(){
					$(this).find("i").css({"background-position":"0px -43px"})
				})
			//.xinxi .mid .ser dd.down div.r 移入移出事件
				$(".xinxi .mid .ser dd.down div.r").mouseover(function(){
					$(".xinxi .mid .ser dd.down div.r").css("border","1px solid #ccc")
					$(this).find("i.zhi").css("background","url(../img/product/dian2.jpg) no-repeat 0 0")
					$(".xinxi .mid .ser dd.down div.r p.xia").css("display","block")
					//: 
				})
				$(".xinxi .mid .ser dd.down div.r").mouseout(function(){
					$(this).find("i.zhi").css("background","url(../img/product/dian1.jpg) no-repeat 0 0")
					$(".xinxi .mid .ser dd.down div.r p.xia").css("display","none")
					$(".xinxi .mid .ser dd.down div.r").css("border-color","#fff")
					
				})
			//.xinxi .mid .num div.l .btn 移入移出
				
				$(".xinxi .mid .num div.l .btn i.up").mouseover(function(){
					$(this).css({"background":"url(../img/product/jian2.jpg) no-repeat 5px 8px"})
				})
				$(".xinxi .mid .num div.l .btn i.up").mouseout(function(){
					$(this).css({"background":"url(../img/product/jian1.jpg) no-repeat 5px 8px"})
				})
				
					$(".xinxi .mid .num div.l .btn i.down").mouseover(function(){
							if(Number($(".xinxi .mid .num div.l input").val())>=2){
						$(this).css({"background":"url(../img/product/jian2.jpg) no-repeat 5px -6px"})
						}
					})
					$(".xinxi .mid .num div.l .btn i.down").mouseout(function(){
						if(Number($(".xinxi .mid .num div.l input").val())>=2){
							$(this).css({"background":"url(../img/product/jian1.jpg) no-repeat 5px -6px"})	
						}
					})
				
				//	.xinxi .mid .num div.l .btn 点击按钮实现数量增减
				//var  value1 = Number($(".xinxi .mid .num div.l input").val())
				//console.log(typeof value1)
				$(".xinxi .mid .num div.l .btn i.up").click(function(){
					var  value1 = Number($(".xinxi .mid .num div.l input").val())
					if(Number($(".xinxi .mid .num div.l input").val())>=1){
							$(".xinxi .mid .num div.l .btn i.down").css({"background":"url(../img/product/jian1.jpg) no-repeat 5px -6px"})	
						}
					$(".xinxi .mid .num div.l input").val(++value1) 
				})
				//.down 默认值为1
				$(".xinxi .mid .num div.l .btn i.down").css({"background":"url(../img/product/jian3.jpg) no-repeat 5px -6px"})
				$(".xinxi .mid .num div.l .btn i.down").click(function(){
					var  value1 = Number($(".xinxi .mid .num div.l input").val())
					if(value1<=2){
						value1=2
					$(this).css({"background":"url(../img/product/jian3.jpg) no-repeat 5px -6px"})
					}
					$(".xinxi .mid .num div.l input").val(--value1) 
				})
			//input 失焦后
			$(".xinxi .mid .num div.l input").blur(function(){
				if(isNaN(Number($(this).val())) || Number($(this).val())<=1){
					$(this).val(1)
				}
			})
			//.xinxi .mid .buy .right 移入移出事件
			$(".xinxi .mid .buy .right").mouseover(function(){
				$(this).find(".erweima").css("display","block")
			})
			$(".xinxi .mid .buy .right").mouseout(function(){
				$(this).find(".erweima").css("display","none")
			})
			
			//点击购买按钮跳转到购物订单确认页面
				$(".xinxi .mid .buy .left").click(function(){
					window.location.href = "orderConfirm.html"
				})
//购物车		//单击加入购物车按钮添加购物车
			//刚进入详情页时先加载之前已经添加到购物车的内容
				$.ajax({
					url:"../json/goodlist.json",
					success:function(data){
						var msg = data.data
						var str = ""
						for(var i in msg){
							
							if(getCookie("xiangqing"+msg[i].id)){
								var oImg = msg[i].img
								var cash1 = Math.round((msg[i].spantxt)*(getCookie("xiangqing"+i))*100)/100
				//				console.log("有商品")
									str +=	"<li>"
									str +=	"<a class='l'><img src='../"+oImg[0].img+"' alt='' /></a>"
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
					setCookie("carnum",getCookie("carnum"))//
					
					$("#sidebar_right .center .num").text(sum)
					$(".xinxi .gouwuche img").clone().appendTo($(".xinxi .gouwuche"))
					$(".xinxi .gouwuche img:first").css("display","block").stop(true).animate({"left":"1200px","top":"300px","width":"0px","height":"0px"},300,function(){
						$(this).remove()
						$(".xinxi .gouwuche img").css("display","none")
					})
					//获取点击进入详情页时的商品,通过ajax获取商品详细信息并添加到购物车
						var goods_id = getCookie("xiangqing")
						$.ajax({
							url:"../json/goodlist.json",
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
										//	console.log(getCookie("cash0"))
											//循环添加总价
											//for
											
										}else{
											var cash = Math.round((msg[i].spantxt)*100)/100
											var addnum = Number($(".xinxi .mid .num .l input").val()) 
											setCookie("xiangqing"+i,addnum)
											console.log("不存在")											
											str +=	"<li>"
											str +=	"<a class='l'><img src='../"+oImg[0].img+"' alt='' /></a>"
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
					
					//console.log(getCookie("cash0"))
					
				})
				//对购物车数量进行判断  要是没有商品则添加cookie表示数量
				if(!getCookie("carnum")){
					setCookie("carnum",0)
				}
				$("#sidebar_right .center .num").text(getCookie("carnum"))
				
				//点击查看购物车进行跳转到购物车页面 #sidebar_right .center .box_center .bottom .bottom_down
				$("#sidebar_right .center .box_center .bottom .bottom_down").click(function(){
					window.location.href = "shopingCart.html"
				})
			//通过cookie获取列表及首页点击的信息
				var cookiename = getCookie("xiangqing")
				//alert(document.cookie)
				//console.log (cookiename == 2)
			$.ajax({
				url:"../json/goodlist.json",
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
		if(getCookie("carnum")){
				$("#sidebar_right .center .box_center .bottom .bottom_up p .car_num").text(getCookie("carnum"))
				setCookie("carnum",getCookie("carnum"))
			}else{
				//setCookie("xiangqing"+i,addnum)  //carnum
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
			$(".header ul.right li.first a.lu").click(function(){
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
								$(".header ul.right li.first").html(str2)
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
				//单击退出登录   .num
					$(".header ul.right li.first").on("click","a.tuichu",function(){
						deleteCookie("name")
						deleteCookie("pass")
						$(".header ul.right li.first").html("<i class='l'></i><a class='lu' href='javascript:;'>请登录 </a><a href='javascript:;'> 注册</a>")
						window.location.href = "login.html"
					})
				//单击注册按钮跳转注册页面
					$(".header ul.right li.first a.zhuce_btn").click(function(){
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
			//total
	//点击首页跳转到首页		
			$(".nav ul.right").on("click","li:first",function(){
				window.location.href = "../index.html"
			})
			
		//xiangxi 栏移入移出
			$(".xiangxi .title li").mouseover(function(){
			//	alert($(this).index())
				$(".fen div").eq($(this).index()).css("display","block").siblings().css("display","none")
			})
			
		$(".xinxi .new_right .btn_huan").click(function(){
			$.ajax({
				url:"../json/goodlist.json",
				success:function(data){
					var msg = data.data
					var str = ''
					var num1 = 0
					var num2 = 0 
					var num3 = 0
				//	str +=			"<a class='l' href='javascript:;'><img src='../"+oImg[0].img+"'></a>"
					for(var i=0; i<3;i++){
						
						var num = Math.floor(Math.random()*(msg.length-1))
						var img = msg[num].img
						console.log(num)
						if(i==0){
							var num1 = num
							str +=	"<li>"
							str +=	"<div><img src='../"+img[0].img+"' alt='' /></div>"
							str +=	"<div class='price'>￥"+msg[num].spantxt+"</div>"
								
							str +=	"<a href='javascript:;'>"+msg[num].atxt+"</a>"
							str += "</li>"
						}
						if(i==1){
							var num2 = num
							if(num2 == num1){
								i = 0
								continue;
							}else{
								str +=	"<li>"
								str +=	"<div><img src='../"+img[0].img+"' alt='' /></div>"
								str +=	"<div class='price'>￥"+msg[num].spantxt+"</div>"
									
								str +=	"<a href='javascript:;'>"+msg[num].atxt+"</a>"
								str += "</li>"
							}
						}
						if(i==2){
							var num3 = num
							if(num3 == num1 || num3 == num2){
								i==1
								continue
							
						}else{
							str +=	"<li>"
							str +=	"<div><img src='../"+img[0].img+"' alt='' /></div>"
							str +=	"<div class='price'>￥"+msg[num].spantxt+"</div>"
								
							str +=	"<a href='javascript:;'>"+msg[num].atxt+"</a>"
							str += "</li>"
						}
						}
						var img = msg[num].img
					
						
						
						
						
				//		str += "<li><a class='first' href='javascript:;'><img src='../"+img[0].img+"'></a><a class='second' href='javascript:;'>"+msg[num].atxt+"</a>"
				//		str += "<div class='mid'><span>热卖价 :  </span><strong> ￥"+msg[num].spantxt+"</strong></div>"
				//		str += "<div class='down'><img src='../img/list/gou.jpg'/></div>"
				//		str += "</li>"
						
					}
					$(".new_right ul.huan").html(str)
				}
			});
		})
			
			
			
			
})