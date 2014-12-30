/*TMODJS:{"version":4,"md5":"ce0473a53023e89f1a1e5e857e82d45a"}*/
define(function(require) {
    return require("./template")("header", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), logo_url = $data.logo_url, $out = "";
        return $out += '<header> <div class="logo"><img src="', $out += $escape(logo_url), 
        $out += '" width="_config_logo_width" height="_config_logo_height" /></div> </header>', 
        new String($out);
    });
});