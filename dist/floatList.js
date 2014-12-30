/*TMODJS:{"version":4,"md5":"46b0ae8515c6b4da89fb6a660b33bda3"}*/
define(function(require) {
    return require("./template")("floatList", function($data) {
        "use strict";
        for (var $utils = this, j = ($utils.$helpers, $data.j), list = $data.list, $escape = $utils.$escape, $out = "", j = 0; j < list.length; j++) $out += ' <dd> <A href="javascript:void(0);" title="', 
        $out += $escape(list[j].title), $out += '">', $out += $escape(list[j].content), 
        $out += "</a> </dd> ";
        return new String($out);
    });
});