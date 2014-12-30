/*TMODJS:{"debug":true,"version":3,"md5":"ff7f69bfeb95b4eb80f8bdcb731ea0c5"}*/
define(function(require) {
    return require("../template")("public/footer", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, name = $data.name, content = $data.content, $out = "";
            return $out += '<footer> <div class="copyright">', $line = 2, $out += $escape(name), 
            $out += '</div> <div class="333">', $line = 3, $out += $escape(content), $out += "</div> </footer> ", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<footer>\r\n	<div class="copyright"><%=name%></div>\r\n    <div class="333"><%=content%></div> \r\n</footer>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});