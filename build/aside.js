/*TMODJS:{"debug":true,"version":1,"md5":"a98433bd24665f18f104ccea5db8253f"}*/
define(function(require) {
    return require("./floatList"), require("./template")("aside", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), i = $data.i, floatData = $data.floatData, $escape = $utils.$escape, include = function(filename, data) {
                data = data || $data;
                var text = $utils.$include(filename, data, $filename);
                return $out += text;
            }, $out = "";
            $out += '<div class="nav"> ', $line = 2;
            for (var i = 0; i < floatData.length; i++) $out += ' <dl id="J_listA"> <dt>', $line = 4, 
            $out += $escape(floatData[i].name), $out += "</dt> ", $line = 5, include("./floatList", floatData[i]), 
            $out += " </dl> ", $line = 7;
            return $out += " </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="nav">\r\n	<% for (var i=0; i<floatData.length; i++){ %>\r\n		<dl id="J_listA">\r\n			<dt><%=floatData[i].name%></dt>\r\n			<%include(\'./floatList\',floatData[i])%>\r\n		</dl>\r\n	<% } %>\r\n</div> '.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});