/*TMODJS:{"version":8,"md5":"b39a6a2715a9a75a96d0ff2938aa8466"}*/
define(function(require) {
    return require("./template")("indexTopAd", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), indexTopAd = $data.indexTopAd, $out = "";
        return $out += '<div id="J_adhead" style="height: 80px; width: 100%; min-width: 1190px; background-image: url(', 
        $out += $escape(indexTopAd.imgUrl), $out += '); background-position: 50% 50%; background-repeat: no-repeat;"> <a href="', 
        $out += $escape(indexTopAd.linkUrl), $out += '" style="display: inline-block; width: 100%; height: 100%;"></a> </div>', 
        new String($out);
    });
});