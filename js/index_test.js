//seajs模块加载
seajs.config({
	//base : "http://misc.jjcdn.com/p/sea-modules/",
	base : "../sea-modules/",
	alias: {
		"$" : "jquery/jquery/1.9.1/jquery.js"
	}
});
//页面代码片段
seajs.use(["$","lib/v1/1.0.0/slider"],function($,slider){
	window.$ = $;
	//20141218临时顶部广告
	$("#J_adhead a").css({
		"display":"inline-block",
		"width":"100%",
		"height":"100%"
	});
	//修复焦点图上边距问题
	$("#J_indexFullSlideWrap").css({
		"top":$("aside").offset().top+"px"
	});
	$(window).resize(function(e) {
        $("#J_indexFullSlideWrap").css({
			"top":$("aside").offset().top+"px"
		});
    });
	
	//顶部资讯滚动
	jQuery("#J_topArticle").slide({
		mainCell:".bd ul",
		autoPage:true,
		effect:"top",
		autoPlay:true,
		pnLoop:false
	});
	//搜索栏控制
	$("input#J_topSearchInput").focus(function(e) {
        if($.trim($(this).val())==$(this).attr("data-init")){
			$(this).css("color","#333").val("");	
		}
    }).blur(function(e) {
        if($.trim($(this).val())==$(this).attr("data-init") || $.trim($(this).val())==""){
			$(this).css("color","#999").val($(this).attr("data-init"));	
		}
    });
	//搜索提交
	$("a#J_fromSubmitBtn").click(function(e) {
        $("form[id=J_topSearchForm]").submit();
    });
	//通栏焦点图
	$("#J_indexFullSlideWrap").html($("#J_indexFullSlideTem").html());
	$("#J_indexFullSlideTem").remove();
	jQuery("#J_indexFullSlide").slide({ 
		titCell:".hd ul", 
		mainCell:".bd ul", 
		interTime:2000, 
		effect:"leftLoop",  
		autoPlay:true, 
		autoPage:true, 
		trigger:"mouseover" 
	});
	//品牌入驻滚动
	jQuery("#J_brandSlider").slide({ 
		titCell:".hd ul",
		mainCell:".bd ul", 
		interTime:2000, 
		effect:"left", 
		pnLoop:false, 
		vis:5,  
		autoPlay:true, 
		autoPage:true, 
		trigger:"mouseover" 
	});
	//家居家饰滚动
	jQuery("#J_homeActSlide").slide({ 
		titCell:".hd ul", 
		mainCell:".bd ul", 
		interTime:2000, 
		effect:"left", 
		pnLoop:false, 
		vis:4, 
		scroll:4,  
		autoPlay:false, 
		autoPage:true, 
		trigger:"mouseover" 
	});
	//商家精选滚动
	$(".merchant-list li").each(function(i){ 
		jQuery(".merchant-list li").slice(i*9,i*9+9).wrapAll("<ul></ul>");
	});
	jQuery("#J_merchantSelectSlide").slide({ 
		titCell:".hd ul", 
		mainCell:".bd .merchant-list", 
		interTime:2000, 
		effect:"left", 
		pnLoop:false, 
		vis:1, 
		scroll:1,  
		autoPlay:false, 
		autoPage:true, 
		trigger:"mouseover" 
	});
$(function(){
	//处理焦点图链接
	$("#J_indexFullSlide .bd ul li").each(function(index, element) {
        var src = $(this).attr("data-src");
		$(this).click(function(e) {
            window.open(src);
        });
    });
	//处理体验馆推荐的图片在终端机下无宽度高度的问题
	$("#J_recommentCon a").each(function(index, element) {
        var w = $(this).width();
		var h = $(this).height();
		$(this).find("img").attr("width",w).attr("height",h);
    });
	//处理商家精选左边logo边框
	$(".JQ_merchatLeftLogo a").each(function(index, element) {
        if(index%2==0){
			$(this).css("border-left","0px");
		}
		if(index==8 || index==9){
			$(this).css("border-bottom","0px");
		}
    });
	//处理右浮动导航
	$(window).resize(function(e) {
        initFloatMenu.resetObj("#J_floatMenu");
    });
    //处理楼层开始
	var flag = false;
	var topContainer = null;
	if($(window).scroll){
		topContainer = window;
	}else{
		topContainer = document;
	}
	
	$(topContainer).scroll(function(e) {
		var disH = $(window).innerHeight() - $("#J_floatMenu").height();
		//console.log(disH,$("#J_floatMenu").offset().top+disH,$("#J_floatMenu").offset().top,$("#J_recommentCon").offset().top);
		if(($("#J_floatMenu").offset().top+disH >= $("#J_recommentCon").offset().top) && ($("#J_floatMenu").offset().top>0)){ 
			initFloatMenu.init("#J_floatMenu");
		}else{
			if($("#J_floatMenu").offset().top<=0){
				initFloatMenu.hideObj("#J_floatMenu");	
			}
			initFloatMenu.hideObj("#J_floatMenu");	
		}
		//楼层数据
		var offsetTop = $("dl#J_selectData").height() + $(document).scrollTop();
		if(($(document).scrollTop()+$(window).innerHeight() >= $("dl#J_selectData").offset().top) && !flag){
			flag = true;
			//处理楼层数据
			$("dl#J_selectData").append($("#J_selectDataTem").html()).css({"background-image":"none"});
			$("#J_selectDataTem").remove();
			$("dl#J_selectData").find("dd.JQ_select").each(function(index, element) {
				$(this).css("visibility","hidden");
			});
			//处理楼层数据列表图片右边距
			 $("li.JQ_listItem").each(function(index, element) {
				var ind = index + 1;
				if(ind%3==0){
					$(this).css("margin-right","0px");
				}
			});	
		}
		//lazyload
		$(".JQ_select").each(function(index, element) {
            if( $(this).css('visibility') != 'visible' && offsetTop >= $(this).offset().top){
				$(this).css("visibility","visible");
				//$(this).hide();
				//$(this).fadeIn(2000);
				$(this).find("img.lazy").each(function(index, element) {
					if($(this).css("visibility") == "visible"){
						$(this).attr("src",$(this).attr("_src"));	
					}
				});
			}
        });
		
    });
	//处理楼层结束
});

});

var initFloatMenu = {
	winW :  $(window).innerWidth(),
	winH :  $(window).innerHeight(),
	obj : function(domId){ return $(domId).height();},
	init: function(domId){
		this.showObj(domId);
		this.resetObj(domId);
		this.showQrcode(domId);
		this.goTop(domId)
	},
	resetObj : function(domId){
		if(this.winW<=1190){
			var w = 1190;
		}else{
			var w = this.winW	
		}
		$(domId).css({
			"position" : "fixed",
			"top" : ($(window).innerHeight() - this.obj(domId))/2 + "px",
			"right" : (parseInt(w)-1190)/2 + "px"
		});
		//console.log($("#J_floatMenu").offset().top);
	},	
	showObj : function(domId){
		$(domId).fadeIn(200);
	},
	showQrcode : function(domId){
		$("#J_floatMenuQrcode").hover(
			function(e){
				$("#J_wechatQrcode").css({
					"display" : "inline-block"
				}).stop().animate({
					"left" : "-185px"	,
					"opacity" : 1
				},500);
			},
			function(e){
				$("#J_wechatQrcode").css({
				}).stop().animate({
					"left" : "-84px",
					"opacity" : 0	
				},500);
		})
	},
	setObjaAbsolute : function(domId){
		$(domId).css({
			"position" : "absolute",
			"bottom" : 500,
			"top" : "none",
			"display" : "block"
		});
	},
	goTop : function(domId){
		$("#J_goTop").click(function(e) {
			$(domId).hide();
            $('html, body').stop().animate({scrollTop:0});
        });	
	},
	hideObj : function(domId){
		$(domId).hide();
	}
}


