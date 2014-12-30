//验证表单对象
var chkMerchant = {
		chkInput : function(domId){
			//var flag = false;
			var num = 0;
			var flagNum = [];
			$(domId).each(function(index, element) {
                var _name = $.trim($(this).prev("label").html()).split("：")[0];
				var _id = $.trim($(this).attr("data-id"));
				if($(this).val()==""){
					$(this).parent().next("div").html(_name+$(this).attr("data-empty")); 	
					//flag = false;
					flagNum[0] = 0;
				}else{
					flagNum[0] = 1;
					switch(parseInt(_id)){
						case 1: //联系人姓名
							if(!chkMerchant.validaName($(this).val())){
								$(this).parent().next("div").html(_name+$(this).attr("data-type"));
								flagNum[1] = 0;
							}else{
								$(this).parent().next("div").html("");
								flagNum[1] = 1;
							}
							break;
						case 2: //固定电话
							if(!chkMerchant.validaPhone($(this).val())){ 
								$(this).parent().next("div").html(_name+$(this).attr("data-type")); 
								flagNum[2] = 0 ;
							}else{
								$(this).parent().next("div").html("");
								flagNum[2] = 1 ;
							}
							break;
						case 3: //手机
							if(!chkMerchant.validaTelPhone($(this).val())){ 
								$(this).parent().next("div").html(_name+$(this).attr("data-type")); 
								flagNum[3] = 0 ;
							}else{
								$(this).parent().next("div").html("");
								flagNum[3] = 1 ;
							}
							break;
						case 4: //公司名称
							if(!chkMerchant.validaName($(this).val())){
								$(this).parent().next("div").html(_name+$(this).attr("data-type"));
							    flagNum[4] = 0 ;
							}else{
								$(this).parent().next("div").html("");
								flagNum[4] = 1 ;
							}
							break;
						case 5: //公司地址
							if(!chkMerchant.validaComAddress($(this).val())){
								$(this).parent().next("div").html(_name+$(this).attr("data-type"));
								flagNum[5] = 0 ;
							}else{
								$(this).parent().next("div").html("");
								flagNum[5] = 1 ;
							}
							break;
						case 6: //公司地址
							if(!chkMerchant.validaCode($(this).val())){
								$(this).parent().next("div").html(_name+$(this).attr("data-type")); 
								flagNum[6] = 0 ;
							}else{
								$(this).parent().next("div").html("");
								flagNum[6] = 1 ;
							}
							break;
						default :
							flag = true;
							break;	
					}
					//console.log(flagNum);
				}
            });	
			return flagNum;
		},
		//显示下拉列表
		showSelectList : function(){
			//下拉选择地址
			$(".JQ_selectAddress").each(function(index, element) {
				$(this).click(function(e) {
                    $(this).find("ul").slideToggle();
					e.stopPropagation();
                });
			});
			//下拉选项点击
			$(".JQ_selectList li").each(function(index, element) {
                $(this).click(function(e) {
                    //$(this).parent().siblings("span").html($(this).html());
					$(this).parent("ul").slideUp();
					e.stopPropagation();
                });
            });
			//点击列表以外的收起列表
			$(document).click(function(e) {
				e.stopPropagation();
                $(".JQ_selectAddress ul").slideUp();
            });
		},
		//刷新验证码
		reGetVcode : function(obj){
			var rNum = Math.random();
			obj.attr("src",obj.attr("src")+"?t="+rNum);	
		},
		//验证姓名
		validaName : function(str){
			//只能是中文
			var reg = /^([\u4E00-\u9FA5\uF900-\uFA2D]|[0-9|a-z|A-Z]){2,30}$/;  
		 	return reg.test(str);
		},
		//验证固定电话
		validaPhone : function(str){
			var reg = /[0-9]{11,14}/
			if(str.length>14){
				return false;
			}else{
				return reg.test($.trim(str)); 	
			}
		},
		//验证手机
		validaTelPhone : function(str){
			var reg = /^(13|14|15|17|18)[0-9]{9}$/
			if(str.length>11){
				return false;
			}else{
				return reg.test($.trim(str)); 	
			}
		},
		//验证公司名称
		validaComName : function(str){
			var reg = /^([\u4E00-\u9FA5\uF900-\uFA2D]|[0-9|a-z|A-Z]){3,100}$/;  
		 	return reg.test($.trim(str));
		},
		//验证公司地址
		validaComAddress : function(str){
			var reg = /^([\u4E00-\u9FA5\uF900-\uFA2D]|[0-9|a-z|A-Z]){3,100}$/;  
		 	return reg.test($.trim(str));	 
		},
		//验证验证码的长度
		validaCode : function(str){
			var reg = /^[a-zA-Z0-9]{4}$/;
			return reg.test($.trim(str));
		}
	}	
$(function(){
	//提交验证
	$("#J_merchantSubmit").click(function(e) {
		//console.log(chkMerchant.chkInput(".JQ_merchantInput"));
		var flagArr = chkMerchant.chkInput(".JQ_merchantInput");
		var nums = 0;
		for(var i=0; i<flagArr.length; i++){
			nums += parseInt(flagArr[i]);
		}
        if(nums==7){
			$("#J_merchantForm").submit();	
		};
    });
	//监听下拉点击事件
	chkMerchant.showSelectList();
})
//地址选择
function selectArea(area_id,type)
{
	var area = $("#region_"+area_id).html();
	if (type == 'pro') {
		$("#J_selectPro").html(area);
		$("#province_id").val(area_id);
	}
	if (type == 'city') {
		$("#J_selectCity").html(area);
		$("#city_id").val(area_id)
	}
	if (type == 'district') {
		$("#J_selectArea").html(area);
		$("#district_id").val(area_id);
		return;
	}
  
  $.getJSON("index.php?act=merchant&op=jsongetRegions",{'id':area_id,'type':type},
    function(data)
    {
      if (data)
      {
        if (data['city'])
        {
          var html_city = '';
          $("#J_selectCity").html(data['city'][0]['region_name']);
          $("#city_id").val(data['city'][0]['region_id']);
          var len_city = data['city'].length;
          var str1 = "'city'";
          for (var i=0;i<len_city;i++)
          {
            html_city += ' <li><a onclick="selectArea('+data['city'][i]['region_id']+','+str1+');"'+' id="region_'+data['city'][i]['region_id']+'">'+data['city'][i]['region_name']+'</a></li>';

          }
          $("#J_city").html(html_city);
          data['city'] = null;
          html_city = '';
        }
        if (data['district'])
        {
          var html_dis = '';
          $("#J_selectArea").html(data['district'][0]['region_name']);
          $("#district_id").val(data['district'][0]['region_id']);
          var len_dis = data['district'].length;
          var str2 = "'district'";
          for (var j=0;j<len_dis;j++)
          {
            html_dis += ' <li><a onclick="selectArea('+data['district'][j]['region_id']+','+str2+');"'+' id="region_'+data['district'][j]['region_id']+'>'+data['district'][j]['region_name']+'</a></li>';

          }
          $("#J_area").html(html_dis);
          html_dis = '';
          data['district'] = null
        }
      }
    });
  
}
