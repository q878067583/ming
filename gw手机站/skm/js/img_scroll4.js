/**
 * Created by mingming on 2018/4/23.
 */
	$(document).ready(function() {
		var len = $(".slider li").length-1;
		//给slider设置样式
		$(".slider").css({
			"width":"100%",
			"height": "inherit",
			"overflow": "hidden",
			"display":"inline-block"
		});

		//给ul设置宽度
		$(".slides").css({
			"position": "relative",
			"width":((len+1)*100).toString()+"%",
			"margin":"0",
			"padding":"0"});
		//给li设置百分比宽度
		$(".slides li").css({
			"width":(100/(len+1)).toString()+"%",
			"float":"left"
		});
		//给图片设置宽度
		$(".responsive").css({
			"width":"100%",
			"height":"inherit"
		});
		//控制点样式
		$(".slider p").css({
			"position": "absolute",
			"z-index":"999",
			"cursor": "pointer"
		});
		$(".slider .lastpic").css({
			"left":"0",
			"margin-top":"7%"
		});
		$(".slider .nextpic").css({
			"right":"0",
			"margin-top":"7%"
		});
		//animate移动
		var i = 0;
		$(".nextpic").click(function(){

			moveNext(i);

		});
		$(".lastpic").click(function(){
			moveLast(i);

		});
		//自动轮播
		var timer = setInterval(function(){
			moveNext(i);
		},5000);
		moveNext = function(n){
			clearInterval(timer)
			if(n==len){
				i=-1;
				$(".slider .slides").animate({right:"0"+"%"},200);

			}else{
				$(".slider .slides").animate({right:((n+1)*100).toString()+"%"}, 300);
			}

			i++;

			timer = setInterval(function(){
				moveNext(i);
			},5000);

		}
		moveLast = function(n){
			clearInterval(timer)
			if(n==0){
				i=len+1;
				$(".slider .slides").animate({right:(len*100).toString()+"%"}, 300);
			}else{
				$(".slider .slides").animate({right:((n-1)*100).toString()+"%"}, 200);
			}
			i--;
			timer = setInterval(function(){
				moveNext(i);
			},5000);

		}
		//手机触摸效果
		var startX,endX,moveX;
		function touchStart(event){
			var touch = event.touches[0];
			startX = touch.pageX;
		}
		function touchMove(event){
			var touch = event.touches[0];
			endX = touch.pageX;
		}
		function touchEnd(event){
			moveX = startX - endX;
			if(moveX>50){
				moveNext(i);
			}else if(moveX<-50){
				moveLast(i);
			}
		}
		document.getElementById("slides").addEventListener("touchstart",touchStart,false);
		document.getElementById("slides").addEventListener("touchmove",touchMove,false);
		document.getElementById("slides").addEventListener("touchend",touchEnd,false); });