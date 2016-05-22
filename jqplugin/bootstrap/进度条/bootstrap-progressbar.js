(function ($) {
    $.fn.renderProgressBar = function (options) {
    	// 默认参数
    	var defaultsOptions = {
            nowValue : 0,
            showPercentage : true,
            showAnimation : true,
        };
    	var finalOptions = $.extend(defaultsOptions,options);
    	
    	// 拼接html
    	var html = "";
    	html += "<div class='progress'>";
    	html += "  <div class='progress-bar progress-bar-striped ";
    	// 显示动画
    	if(finalOptions.showAnimation){
    		html += "active";
    	}
    	// 颜色
    	if(finalOptions.nowValue > 66) {
    		html += " progress-bar-danger";
    	}
    	else if(finalOptions.nowValue > 33){
    		html += " progress-bar-warning";
    	}
    	else {
    		html += " progress-bar-success";
    	}
		html += "' role='progressbar' aria-valuenow='"+defaultsOptions.nowValue+"' aria-valuemin='0' aria-valuemax='100' style='width: "+defaultsOptions.nowValue+"%'>";
		// 显示百分比
		if(finalOptions.showPercentage) {
			html += (defaultsOptions.nowValue + "%");
		}
    	html += "  </div>";
    	html += "</div>";
    	
    	this.html(html);
    };
})(jQuery);