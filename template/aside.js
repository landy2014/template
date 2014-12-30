/*TMODJS:{"version":1,"md5":"9d58e5d1fbc7ad7e6bf4663e10fca00f"}*/
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