
//顶部区域的点击显示
$(function(){
	$(".dl-title").click(function(){
		$(".dl-title").css("display","none")
		$(".dl-container").css("display","block")
		
	})
	$("#dl-display").click(function(){
		
//		$(".dl-title").css("display","none")
		$(".dl-container").css("display","none")
		
	})
	$(".vc-slide-item-1").mouseover(function(){
		$(".vc-slide-item-1 img").css({
			"-moz-transform":'scale(1.1)',
			"transition":"all 1s ease"			
		})
		$(".item-wrapper span").css({
			"top":"-20px"
		})
		
		
		
	}).mouseout(function(){
		$(".vc-slide-item-1 img").css({
			"-moz-transform":'scale(1)',
			"transition":"all 1s ease"			
		})
		$(".item-wrapper span").css({
			"top":"0px"
		})
		
	})
	
//	$(".vc-slide-item-2-1").mouseover(function(){
//		$(".vc-slide-item-2-1 img").css({
//			"-moz-transform":'scale(1.1)',
//			"transition":"all 1s ease"			
//		})
//		$(".item-wrapper span").css({
//			"top":"-20px"
//		})
})

//