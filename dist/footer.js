/*TMODJS:{"version":9,"md5":"4d60609edba747c89b65e871683a34f3"}*/
define(function(require) {
    return require("./template")("footer", function($data) {
        "use strict";
        var $utils = this, $escape = ($utils.$helpers, $utils.$escape), name = $data.name, $out = "";
        return $out += '<footer> <div class="copyright">', $out += $escape(name), $out += '</div> <div class="333">sdfsdf</div> </footer> ', 
        new String($out);
    });
});