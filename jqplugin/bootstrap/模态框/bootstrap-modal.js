// js-bbotstrap警告框插件
var modal = function(options){
	
	// 默认参数
	var defaultsOptions = {
		title : "提示",
    };
	var finalOptions = $.extend(defaultsOptions,options);
	
	// 必要参数检验
	var text = options.text;
	if(text == undefined) {
		throw "boostrap-modal text is undefined";
	}
	var closeTime = options.closeTime;
	var buttonValue = options.buttonValue;
	var buttonClickMethod = options.buttonClickMethod;
	
	// 为body添加一个占位符div
	if($("#bootstrap-alarm-placeholder")[0] == undefined) {
		$('body').append("<div id='bootstrap-alarm-placeholder'></div>");
	}
	
	// 随机生成字符串函数
	function randomString(len) {
	    len = len || 32;
	    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
	    var maxPos = $chars.length;
	    var pwd = '';
	    for (i = 0; i < len; i++) {
	        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
	    }
        return pwd;
	}
	
	// 拼接bootstrap模态框
	var id = randomString(32);
	var html = "";
	html += "<div class='modal fade' id='"+id+"' tabindex='-1' role='dialog' aria-labelledby='myModalLabel'>";
	html += "  <div class='modal-dialog modal-sm' role='document'>";
	html += "    <div class='modal-content'>";
	html += "      <div class='modal-header'>";
	html += "        <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>";
	html += "        <h4 class='modal-title' id='myModalLabel'>"+finalOptions.title+"</h4>";
	html += "      </div>";
	html += "      <div class='modal-body'>";
	html += 			text;
	html += "      </div>";

	var buttonId = "";
	if(buttonValue != undefined && buttonClickMethod != undefined) {
		buttonId = randomString(32);
		html += "	  <div class='modal-footer'>";
		html += "        <button type='button' class='btn btn-default' data-dismiss='modal'>关闭</button>";
		html += "        <button type='button' id='"+buttonId+"' class='btn btn-primary' data-dismiss='modal'>"+buttonValue+"</button>";
		html += "     </div>";
	}
	
	html += "    </div>";
	html += "  </div>";
	html += "</div>";
	
	// 动态生成html
	$("#bootstrap-alarm-placeholder").html(html);
	
	// 激活modal
	$("#"+id).modal('show');
	
	// 绑定事件
	if(buttonValue != undefined && buttonClickMethod != undefined) {
		$("#"+buttonId).on("click" , function(){
			buttonClickMethod();
		});
	}
	
	// 自动关闭
	if(closeTime != undefined && closeTime > 0) {
		setTimeout(function(){
			if($("#"+id) != undefined) {
				$("#"+id).modal('hide');
			}
		}, closeTime)
	}
}