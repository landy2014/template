/*TMODJS:{"debug":true,"version":1,"md5":"8b7e550e0332e3d64857aacd65f986a9"}*/
define(function(require) {
    return require("./template")("floatList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), j = $data.j, list = $data.list, $escape = $utils.$escape, $out = "";
            $line = 1;
            for (var j = 0; j < list.length; j++) $out += ' <dd> <A href="javascript:void(0);" title="', 
            $line = 3, $out += $escape(list[j].title), $out += '">', $line = 3, $out += $escape(list[j].content), 
            $out += "</a> </dd> ", $line = 5;
            return new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<%for(var j=0; j<list.length; j++){%>\r\n	<dd>\r\n		<A href="javascript:void(0);" title="<%=list[j].title%>"><%=list[j].content%></a>\r\n	</dd>\r\n<%}%>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});