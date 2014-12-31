/*TMODJS:{"debug":false,"version":1,"md5":"0b0fdccd5fd1a53beb0f8c275c7c60e8"}*/
template('ad',function($data,$filename) {
'use strict';var $utils=this,$helpers=$utils.$helpers,l=$data.l,datas=$data.datas,i=$data.i,$escape=$utils.$escape,j=$data.j,item=$data.item,$out='';$out+=' ';
 var l = datas.length 
$out+=' ';
 for(var i = 0; i < 1; i++) { 
$out+=' <div class="jdAdCol" id="jdAdCol';
$out+=$escape( i);
$out+='"> <div class="jdAdCont" id="jdAdList';
$out+=$escape( i);
$out+='"> ';
 for(var j = 0; j < l; j++) { 
$out+=' ';
 var item = datas[j] 
$out+=' <div class="jdContInner"> <div class="jdAdImg"> <a href="';
$out+=$escape( item.data_skuurl);
$out+='" target=\'_blank\' title="';
$out+=$escape( item.data_skuname);
$out+='" ><img src=\' http://img11.360buyimg.com/n1/';
$out+=$escape( item.data_skuimg);
$out+='\' alt="';
$out+=$escape( item.data_skuname);
$out+='图片" /></a> </div> <a href="';
$out+=$escape( item.data_skuurl);
$out+='" target=\'_blank\' title="';
$out+=$escape( item.data_skuname);
$out+='" class="jdAdCover" ><img src="http://img10.360buyimg.com/da/jfs/t265/312/423396392/49/96a9210a/53eb1eabN9a8b38ae.gif" alt="';
$out+=$escape( item.data_skuname);
$out+='" /></a> <ul> <li class="jdAdName">';
$out+=$escape( item.data_skuname);
$out+='</li> <li class="jdAdPrice jdAdCred clear"> <p class="jdAdLeft">￥<span class="jdAdPrice" id="price_';
$out+=$escape( item.data_skuid);
$out+='">';
$out+=$escape( item.data_skuprice);
$out+='</span></p> <span class=\'jdAdSubTag\' id=\'rprice_';
$out+=$escape( item.data_skuid);
$out+='\'>';
$out+=$escape( item.data_skuprice);
$out+='</span><span class="jdAdPromo" id="promInfo_';
$out+=$escape( item.data_skuid);
$out+='" style=\'display:none\'></span> </li> </ul> </div> ';
 } 
$out+=' </div> <ul class="jdAdList" id="jdAdTags';
$out+=$escape( i);
$out+='"> ';
 for(var j = 0; j < l; j++) { 
$out+=' ';
 var item = datas[j] 
$out+=' <li><p class=\'jdAdLine\'>';
$out+=$escape( j + 1);
$out+='</p></li> ';
 } 
$out+=' </ul> </div> ';
 } 
return new String($out);
});