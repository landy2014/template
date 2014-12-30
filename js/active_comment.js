/*===================================================*/
/*                静态活动页通用 js                    */
/* J_activeAllBg, J_activeContent, content_Actpage
/*==================================================*/
if(isNaN(actID)){
	$("#content_Actpage").css({
		"width" : "1190px",
		"margin" : "0 auto"	
	});
}else{
	switch(parseInt(actID)){ 
		case 569 :
			try{
				$("#J_activeAllBg").css({
					"width" : "100%",
					"background" : "url(http://misc.jjcdn.com/p/images/active_20150101_content_red_bg.jpg) center top repeat"
				});
				$("#J_activeContent").css({
					"width" : "100%",
					"background" : "url(http://misc.jjcdn.com/p/images/active_20150101_top_bg.jpg) center top no-repeat"
				});
				$("#content_Actpage").css({
					"width" : "100%",
					"background" : "url(http://misc.jjcdn.com/p/images/active_20150101_bottom_bg.jpg) center bottom no-repeat"
				});
			}
			catch(e){
				
			}
	break;
	
	default :
		$("#content_Actpage").css({
			"width" : "1190px",
			"margin" : "0 auto"	
		});
		break;
	}
}

