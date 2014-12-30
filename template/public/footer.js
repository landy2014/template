/*TMODJS:{"version":1,"md5":"5f6d2d29ab07ecae9562a94c8a6679d3"}*/
define(function(require) {
    return require("../template")("public/footer", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), name = $data.name, content = $data.content, $out = "";
        return $out += '<footer> <div class="copyright">', $out += $escape(name), $out += '</div> <div class="333">', 
        $out += $escape(content), $out += "</div> </footer> ", new String($out);
    });
});