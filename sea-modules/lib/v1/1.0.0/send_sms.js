define("lib/v1/1.0.0/send_sms",[],function(a,b,c){function d(a){function b(a){var b=/^(134|135|136|137|138|139|150|151|152|157|158|159|187|130|131|132|155|156|185|186|133|153|180|189|188|170)\d{8}$/;return isNaN(a)||""==a?($("#tel_tip").show(),!1):b.test(a)?!0:($("#tel_tip").show(),!1)}function c(a){var b=/^\d{4}$/;return isNaN(a)||""==a?($("#code_tip").show(),!1):b.test(a)?!0:($("#code_tip").show(),!1)}function d(a,b){var c=$(b),d=setInterval(function(){a--,0==a?($("#getCode").show(),$("#second_tip,#getCodeGray").hide(),clearInterval(d),c.html(k),_formHeiP=$(".ui-send_sms-dialog-form").innerHeight(),e(m,_formHeiP)):c.html(a)},1e3)}function e(a,b){0==b?(disHei=0,o=a):(disHei=parseInt(b)-parseInt(o),o=b),$("body").css({position:"relative"}),$(".ui-marker-sms").css({height:$(document).innerHeight()+"px",top:0,left:0}),$(".ui-send_sms-dialog").css({height:parseInt($(".ui-send_sms-dialog").outerHeight())+parseInt(disHei)+"px"}),l=$(".ui-send_sms-dialog").height(),$(".ui-send_sms-dialog").css({top:($(window).height()-l)/2+"px"})}var f="";a=a||{};var g=a.tid||0,h=a.phoneNumber||"";this.height=a.height||400,this.title=a.title||"免费发送到手机",this.content=a.content||"这里是发送的内容",this.telInput=a.telTip||"请输入您的手机号码",this.codeInput=a.codeTip||"请输入验证码",this.codeUrl=a.codeUrl||"",this.second=a.second||120;var i=this.telInput,j=this.codeInput,k=this.second;f='<div class="ui-send_sms-dialog">',f+='<form id="semdSmsForm" action="#">',f+='<div class="ui-send_sms-dialog-title">',f+='  <label id="uiSendSmsTitle">'+this.title+"</label>",f+='  <a href="javascript:void(0);" class="ui-send_sms-close"></a>',f+="</div>",f+='<div class="ui-send_sms-dialog-content">',f+='  <p class="ui-send_sms-dialog-msg">发送内容：</p>',f+='    <div class="ui-send_sms-send-content">'+this.content,f+="    </div>",f+="</div>",f+='<div class="ui-send_sms-dialog-form">',f+='  <input type="text" name="sendSmsTel" value="请输入您的手机号码" class="ui-send_sms-dialog-input" /><br />',f+='<p class="ui-send_sms_dialog-tip" id="tel_tip">手机号码错误！</p>',f+='    <input type="text" name="sendSmsQrCode" value="请输入验证码" class="ui-send_sms-dialog-input" /> <label class="ui-send_sms-dialog-qrcode" id="getCode">获取手机验证码</label><label class="ui-send_sms-dialog-qrcode-gray" id="getCodeGray">获取手机验证码</label><br />',f+='<p class="ui-send_sms_dialog-tip" id="second_tip"><span id="secondSub">'+this.second+"</span> 秒后重新获取验证码</p>",f+='<p class="ui-send_sms_dialog-tip" id="code_tip">验证码错误！</p>',f+='    <input type="submit" class="ui-send_sms-dialog-submit" value="确定" />',f+="</div>",f+="</form>",f+="</div>",$(document.body).append(f),$(document.body).append('<div class="ui-marker-sms"></div>');var l=$(".ui-send_sms-dialog").height(),m=$(".ui-send_sms-dialog-form").innerHeight(),n=$(".ui-send_sms-dialog-form").innerHeight();e(m,n),$(window).resize(function(){e(m,n)}),$(document).on("click",".ui-send_sms-close,#buttonCloseDialog,.ui-marker-sms",function(){$(".ui-marker-sms,.ui-send_sms-dialog").remove()}),$("input[name=sendSmsTel]").focus(function(){$(this).val()==i&&$(this).val(""),$("#tel_tip").hide(),e(m,n)}),$("input[name=sendSmsTel]").blur(function(){""==$(this).val()&&$(this).val(i)}),$("input[name=sendSmsQrCode]").focus(function(){$(this).val()==j&&$(this).val(""),$("#code_tip").hide(),e(m,n)}),$("input[name=sendSmsQrCode]").blur(function(){""==$(this).val()&&$(this).val(j)}),$("#getCode").bind("click",function(){return""==$("input[name=sendSmsTel]").val()||$("input[name=sendSmsTel]").val()==i?(alert(i),$("input[name=sendSmsTel]").focus(),!1):(h=$("input[name=sendSmsTel]").val(),$.getJSON("index.php?act=offline_store&op=genCaptcha&phone="+h,function(a){"succ"==a.status?($("#getCode").hide(),$("#second_tip,#getCodeGray").show(),_formHeiP=$(".ui-send_sms-dialog-form").innerHeight(),e(m,_formHeiP),d(k,"#secondSub")):alert("发送错误！")}),void 0)}),$("form[id=semdSmsForm]").submit(function(){return b($("input[name=sendSmsTel]").val())?c($("input[name=sendSmsQrCode]").val())?(captcha=$("input[name=sendSmsQrCode]").val(),h=$("input[name=sendSmsTel]").val(),$.getJSON("index.php?act=offline_store&op=sendSms&id="+g+"&phone="+h+"&captcha="+captcha,function(a){var b=a;console.log(b.status),"succ"==a.status?($(".ui-send_sms-dialog-content").css({height:"120px","line-height":"120px","text-align":"center"}).html("发送成功"),$(".ui-send_sms-dialog-input,#second_tip,#getCodeGray").remove(),$(".ui-send_sms-dialog-form").css({padding:"0px","text-align":"center"}).html('<input type="button" class="ui-send_sms-dialog-submit" id="buttonCloseDialog" value="确定">'),e(m,180)):($(".ui-send_sms-dialog-content").css({height:"120px","line-height":"120px","text-align":"center"}).html("发送失败,请重试"),$(".ui-send_sms-dialog-input,#second_tip,#getCodeGray").remove(),$(".ui-send_sms-dialog-form").css({padding:"0px","text-align":"center"}).html('<input type="button" class="ui-send_sms-dialog-submit" id="buttonCloseDialog" value="确定">'),e(m,180))}),!1):!1:!1});var o=m}c.exports=d});
