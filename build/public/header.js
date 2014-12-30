/*TMODJS:{"debug":true,"version":1,"md5":"518f8cda9c9ad6512c2ed2148bf98599"}*/
define(function(require) {
    return require("../template")("public/header", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, logo_url = $data.logo_url, $out = "";
            return $out += '<header> <div class="logo"><img src="', $line = 2, $out += $escape(logo_url), 
            $out += '" width="_config_logo_width" height="_config_logo_height" /></div> </header>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<header>\r\n	<div class="logo"><img src="<%=logo_url%>" width="_config_logo_width" height="_config_logo_height" /></div> \r\n</header>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});