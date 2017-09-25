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
		
//	.cart_head部分
		//.cart_head .all i 点击全选按钮进行所有打钩
			/*$("i.xuan").click(function(){				
					$(this).toggleClass("xuan") // shu
			})*/
			$("ul.table").on("click","i.subclass",function(){
				$(this).toggleClass("xuan")
				
			})
			$("i.btn_xuan").click(function(){
				if($("i.subclass").hasClass("xuan")){
					//alert(1)
					$("i.subclass").removeClass("xuan")
					$("i.btn_xuan").removeClass("quanbu")
					$(".cart_title div.right span.num").text("￥0.00")
					$(".cart_bottom .money .up .cash").text("￥0.00")
					$(".cart_title div.right span.jie").css({"background":"#bbb"})
					$(".cart_bottom .jiesuan").css({"background":"#bbb"})
					$("span.carbottom_num").text("0")
					$(".cart_title .div1 span.shu").text(0)
				}else{
					//alert(2)
					$("i.subclass").addClass("xuan")
					$("i.btn_xuan").addClass("quanbu")
					$(".cart_title div.right span.num").text("￥"+getCookie("sum_money"))
					$(".cart_bottom .money .up .cash").text("￥"+getCookie("sum_money"))
					$("span.carbottom_num").text(getCookie("carnum"))
					$(".cart_title .div1 span.shu").text(getCookie("leiliang"))
				
				//去结算的按钮变色
					$(".cart_title div.right span.jie").css({"background":"#e6133c"})
					$(".cart_bottom .jiesuan").css({"background":"#e6133c"})
					
				}
				
			})
			
			//初始界面时添加商品金额
				$(".cart_title div.right span.num").text("￥"+getCookie("sum_money"))
				$(".cart_bottom .money .up .cash").text("￥"+getCookie("sum_money"))
			//点击去结算按钮跳转到订单确认页面
				$(".cart_title div.right span.jie").click(function(){
					window.location.href = "orderConfirm.html"
				})
				$(".cart_bottom .jiesuan").click(function(){
					window.location.href = "orderConfirm.html"
				})
			//shu
//	.car_table 部分
		//点击加减号进行数量的加减
			$("ul.table").on("click",".cart_table .num_box span.jia",function(){
				var num = Number($(this).prev("input").val())
				$(this).prev("input").val(num+1)
				var this_sum = $(this).parent().parent().find("div.sum span").text()
				var new_sum = Math.round(Number($(this).parent().parent().find("div.box1 span").text())*(num+1)*100)/100
				$(this).parent().parent().find("div.sum span").text(new_sum)
				
				var this_id = $(this).parent().parent().attr("id")
				setCookie(this_id,num+1)
				
				var cash = $(this).parent().parent().attr("cash")
				setCookie(cash,new_sum)
				
				//进行总金额的计算
					$.ajax({
						url:"../json/goodlist.json",
						success:function(data){
							var sumcash = 0
							var all_sum = 0
							var msg = data.data
							for(var i in msg){
								if(getCookie("xiangqing"+i)){
									sumcash += Math.round(Number(getCookie("cash"+i)))
									all_sum += Math.round(Number(getCookie("xiangqing"+i)))
								//	console.log(getCookie("cash"+i))
								}
								
							}
							console.log(all_sum)
							setCookie("carnum",all_sum) //carbottom_num
							$("span.carbottom_num").text(getCookie("carnum"))
							setCookie("sum_money",sumcash)
							$(".cart_title div.right span.num").text("￥"+getCookie("sum_money"))
							$(".cart_bottom .money .up .cash").text("￥"+getCookie("sum_money"))
						}
					});
				
			//	console.log(cash)
			//	console.log($(this).parent().parent().find("div.box1 span").text())
			})
			$("ul.table").on("click",".cart_table .num_box span.jian",function(){
				var num = Number($(this).next("input").val())
				if(num <=2 ){
					num = 2
				}
				$(this).next("input").val(num-1)
				
		//以下加号引入		
				//var num = Number($(this).prev("input").val())
				//$(this).prev("input").val(num+1)
				var this_sum = $(this).parent().parent().find("div.sum span").text()
				var new_sum = Math.round(Number($(this).parent().parent().find("div.box1 span").text())*(num-1)*100)/100
				$(this).parent().parent().find("div.sum span").text(new_sum)
				
				var this_id = $(this).parent().parent().attr("id")
				setCookie(this_id,num-1)
				
				var cash = $(this).parent().parent().attr("cash")
				setCookie(cash,new_sum)
				
				//进行总金额的计算
					$.ajax({
						url:"../json/goodlist.json",
						success:function(data){
							var sumcash = 0
							var all_sum = 0
							var msg = data.data
							for(var i in msg){
								if(getCookie("xiangqing"+i)){
									sumcash += Math.round(Number(getCookie("cash"+i)))
									all_sum += Math.round(Number(getCookie("xiangqing"+i)))
								//	console.log(getCookie("cash"+i))
								}
								
							}
							console.log(all_sum)
							setCookie("carnum",all_sum) //carbottom_num
							$("span.carbottom_num").text(getCookie("carnum"))
							setCookie("sum_money",sumcash)
							$(".cart_title div.right span.num").text("￥"+getCookie("sum_money"))
							$(".cart_bottom .money .up .cash").text("￥"+getCookie("sum_money"))
						}
					});
		//以上加号引入				
				
			})
		//  点击删除按钮删除该选项
			
			$("ul.table").on("click","a.del",function(){
				//总数减掉删除的数量
				//进行总金额的计算
					$.ajax({
						url:"../json/goodlist.json",
						success:function(data){
							var sumcash = 0
							var all_sum = 0
							var msg = data.data
							for(var i in msg){
								if(getCookie("xiangqing"+i)){
									sumcash += Math.round(Number(getCookie("cash"+i)))
									all_sum += Math.round(Number(getCookie("xiangqing"+i)))
								//	console.log(getCookie("cash"+i))
								}
								
							}
							//console.log(all_sum)
							setCookie("carnum",all_sum) //carbottom_num
							$("span.carbottom_num").text(getCookie("carnum"))
							setCookie("sum_money",sumcash)
							$(".cart_title div.right span.num").text("￥"+getCookie("sum_money"))
							$(".cart_bottom .money .up .cash").text("￥"+getCookie("sum_money"))
						}
					});//以上加号引入	
				
				//$(this).parent().parent().remove()
				var goodcookie =  $(this).parent().parent().attr("id")
				var cashid = $(this).parent().parent().attr("cash")
				//alert(goodcookie)
				deleteCookie(goodcookie)
				deleteCookie(cashid)
			//	alert(cashid)
				setCookie("leiliang",getCookie("leiliang")-1)
				$(".cart_title .div1 span.shu").text(getCookie("leiliang"))
					
				
				$(this).parent().parent().remove()
			})
			
			
			
			
// 刚加载页面时进行将原来添加到购物车的商品罗列出来
			$.ajax({
				url:"../json/goodlist.json",
				success:function(data){
					var msg = data.data
					var str = ''
					for(var i in msg){
						if(getCookie("xiangqing"+i)){
							var oImg = msg[i].img
						//	console.log(oImg[0].img+msg[i].atxt+msg[i].spantxt+getCookie("cash"+i)+getCookie("xiangqing"+i))
							//添加cart_table到页面中
								str +=	"<li class='cart_table' cash='cash"+i+"' id='xiangqing"+i+"'>"
								str +=	"<div class='l xuan1'><i class='xuan subclass'></i></div>"
								str +=	"<div class='l tu'>"
								str +=			"<a class='l' href='javascript:;'><img src='../"+oImg[0].img+"'></a>"
								str +=			"<div class='intro'>"+msg[i].atxt+"</div>"
								str +=		"</div>"
								str +=		"<div class='l box1'>"
								str +=			"<span>"+msg[i].spantxt+"</span>"
								str +=	"</div>"
								str +=		"<div class='l num_box'>"
								str +=			"<span class='l jian'>-</span>"
								str +=			"<input class='l shuliang' type='text' value='"+getCookie("xiangqing"+i)+"'/>"
								str +=			"<span class='l jia'>+</span>"
								str +=		"</div>"
								str +=		"<div class='l sum'>"
								str +=			"<span>￥"+getCookie('cash'+i)+"</span>"
								str +=		"</div>"
								str +=		"<div class='r last'>"
								str +=			"<a href='javascript:;' class='cang'>移入收藏夹</a>"
								str +=			"<a href='javascript:;' class='del'>删除</a>"
								str +=		"</div>"
								str +=	"</li>"
							
							
						}
					}
						$("ul.table").append(str)
					//	console.log(str)
				}
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

			
	//carbottom_num		
			$("span.carbottom_num").text(getCookie("carnum"))
			
			//循环获取购物车商品有多少种
				$.ajax({
					url:"../json/goodlist.json",
					success:function(data){
						var num = 0
						var msg = data.data
						for(var i in msg){
							//console.log(msg[i].id)
							if(getCookie("xiangqing"+i)){
								num++
							}
						}
					//	console.log(num)   
						$(".cart_title .div1 span.shu").text(num)
						setCookie("leiliang",num)
					}
				})
			
})