/*TMODJS:{"version":6,"md5":"3cb9a2c4ea232a85b4fb3b45ffbd06d1"}*/
define(function(require) {
    return require("./floatList"), require("./template")("aside", function($data, $filename) {
        "use strict";
        var $utils = this, i = ($utils.$helpers, $data.i), floatData = $data.floatData, $escape = $utils.$escape, include = function(filename, data) {
            data = data || $data;
            var text = $utils.$include(filename, data, $filename);
            return $out += text;
        }, $out = "";
        $out += '<div class="nav"> ';
        for (var i = 0; i < floatData.length; i++) $out += ' <dl id="J_listA"> <dt>', $out += $escape(floatData[i].name), 
        $out += "</dt> ", include("./floatList", floatData[i]), $out += " </dl> ";
        return $out += " </div> ", new String($out);
    });
});