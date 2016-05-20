// jq-bootstrap面包屑插件
(function ($) {
    $.fn.renderBreadCrumb = function (options) {
	
		// 参数检验
		if(options == undefined) {
			throw "options is undefined";
		}
		var array = options.array;
		if(array == undefined) {
			throw "array is undefined";
		}
		
		// 拼接html
		var html = "";
		html += "<ol class='breadcrumb'>";
		for(var i = 0 ; i < array.length ; i++) {
			var data = array[i];
			var text = data.text;
			var href = data.href;
			if( i == array.length - 1) {
				html += "  <li class=\"active\">"+text+"</li>";
			}
			else {
				html += "  <li><a href=\""+href+"\">"+text+"</a></li>";
			}
		}
		html += "</ol>";
		this.html(html);
    };
})(jQuery);