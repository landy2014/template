/*TMODJS:{"version":6,"md5":"77e85bdc203634c7af575d05a3e398c1"}*/
define(function(require) {
    return require("./template")("floatList", function($data) {
        "use strict";
        for (var $utils = this, j = ($utils.$helpers, $data.j), list = $data.list, $escape = $utils.$escape, $out = "", j = 0; j < list.length; j++) $out += ' <dd> <A href="javascript:void(0);" title="', 
        $out += $escape(list[j].title), $out += '">', $out += $escape(list[j].content), 
        $out += "</a> </dd> ";
        return new String($out);
    });
});