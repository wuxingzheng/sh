$(function(){
	var i = 5
	var timer =  setInterval(function(){
		i--
		$(".box span").text(i)
		if(i==0){
			clearInterval(timer)
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
			
			window.location.href = "../index.html"
			
		}
	},1000)
	
	$("a.tiao").click(function(){
		clearInterval(timer)
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
		window.location.href = "../index.html"
	})
})