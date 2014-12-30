/*TMODJS:{"version":1,"md5":"33daaee4f0f349bc13096c8680e487cf"}*/
define(function(require) {
    return require("../template")("public/header", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), logo_url = $data.logo_url, $out = "";
        return $out += '<header> <div class="logo"><img src="', $out += $escape(logo_url), 
        $out += '" width="_config_logo_width" height="_config_logo_height" /></div> </header>', 
        new String($out);
    });
});