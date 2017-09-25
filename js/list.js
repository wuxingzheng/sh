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

// content   下ul通过ajax加载数据
//<li><img src="../img/index_like/1.jpg" ></li>
	$.ajax({
		url:"../json/goodlist.json",
		success:function(data){
			var msg = data.data
			var str = ''
			//var length = 
			for(var i=30;i<msg.length;i++){
				//console.log(msg[i].img)
				var img = msg[i].img
				
				str += "<li><a class='first' href='javascript:;'><img src='../"+img[0].img+"'></a><a class='second' href='javascript:;'>"+msg[i].atxt+"</a>"
				str += "<div class='mid'><span>热卖价 :  </span><strong> ￥"+msg[i].spantxt+"</strong></div>"
				str += "<div class='down'><img src='../img/list/gou.jpg'/></div>"
				str += "</li>"
			}
			$(".content ul").append(str)
			//console.log(msg.length)
		}
	});
	//    点击商品跳转详情页
		$(".content ul").on("click","li a.first",function(){
			console.log($(this).parents().index())
			setCookie("xiangqing",$(this).parents().index()+30)
			window.location.href = "product.html"
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
				//点击首页选项跳转到首页
				$(".nav ul.right").on("click","li:first a",function(){
					window.location.href = "../index.html"
				})

})