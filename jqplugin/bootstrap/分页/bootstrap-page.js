// jq-bootstrap分页插件
(function ($) {
    $.fn.renderPage = function (options) {
	
		if(options == undefined) {
			throw "options parameter is undefined";
		}
	
		var nowPage = options.nowPage;
		var allPage = options.allPage;
		var onClickMethod = options.onClickMethod;
		var skipMethod = options.skipMethod;
		var autoRefresh = options.autoRefresh;
		var object = this;
		
		// 非法参数
		if(nowPage == undefined) {
			throw "nowPage parameter is undefined";
		}
		if(allPage == undefined) {
			throw "allPage parameter is undefined";
		}
		if(onClickMethod == undefined) {
			throw "onClickMethod parameter is undefined";
		}
		if(skipMethod == undefined) {
			throw "skipMethod parameter is undefined";
		}
		if(nowPage > allPage){nowPage = allPage;}
		if(nowPage <= 0) {nowPage = 1;}
		if(autoRefresh == undefined) {
			autoRefresh = false;
		}
		
		// 拼5个数字出来
		var numArray = new Array();
		if(allPage - nowPage <= 2){
			var begin = nowPage - (2 + (2 - (allPage - nowPage))); 
			if(begin <= 0 ){begin = 0} ;
			for(var i = 0 ; i < 5 && begin <= allPage ; i++){
				numArray[i] = begin ++ ;
			}
		}
		else if(nowPage == 1){
			var count = 0;
			for(var i = nowPage ; count < 5  && i <= allPage ; i++ , count ++ ){
				numArray[count] = i;
			}
		}
		else if(nowPage == 2){
			var count = 0;
			for(var i = nowPage - 1 ; count < 5  && i <= allPage ; i++ , count ++ ){
				numArray[count] = i;
			}
		}
		else {
			var count = 0;
			for(var i = nowPage - 2 ; count < 5  && i <= allPage ; i++ , count ++ ){
				numArray[count] = i;
			}
		}
		
		// 拼接分页html
		var html = "";
		html += "<div class='container-fluid' style='width:550px'>";
		html += "	<div class='row'>";
		html += "		<div class='col-md-6' style='padding-right:0px;'>";
		html += "			<nav>";
		html += "              <ul class='pagination'>";
		
		// pre
		if(nowPage == 1){
			html += "                <li id='pagination-previous' class='disabled'>";
			html += "                  <a href='#' aria-label='Previous' >";
		}
		else {
			var prePage = nowPage-1;
			html += "                <li id='pagination-previous'>";
			html += "                  <a data=\""+prePage+"\" name=\"BootStrapPage_num\" href=\"#\" aria-label=\"Previous\" title=\"上以页\">";
		}
		html += "                    <span aria-hidden='true'>&laquo;</span>";
		html += "                  </a>";
		html += "                </li>";
		
		// 页数
		for(var i = 0 ; i < numArray.length ; i++){
			if(nowPage == numArray[i]) {
				html += "                <li class=\"active\"><a data=\""+numArray[i]+"\" name=\"BootStrapPage_num\" href=\"#\"  >"+numArray[i]+"</a></li>";
			}
			else {
				html += "                <li><a data=\""+numArray[i]+"\" name=\"BootStrapPage_num\" href=\"#\"  >"+numArray[i]+"</a></li>";
			}
		}
		
		// next
		if(nowPage == allPage){
			html += "                <li id='pagination-last' class='disabled'>";
			html += "                  <a href='#' aria-label='Next' >";
		}
		else {
			var nextPage = (parseInt(nowPage)+1);
			html += "                <li id='pagination-last'>";
			html += "                  <a data=\""+nextPage+"\" name=\"BootStrapPage_num\" href=\"#\" aria-label=\"Next\" title=\"下一页\">";
		}
		html += "                    <span aria-hidden='true'>&raquo;</span>";
		html += "                  </a>";
		html += "                </li>";
		
		html += "              </ul>";
		html += "            </nav>";
		html += "		</div>";
		html += "		<div class='col-md-6' style='padding-left:0px;'>";
		html += "			<div class='input-group' style='width:260px; margin-top:20px; margin-bottom:20px; margin-right:20px'>";
		html += "              <span class='input-group-addon'>共"+allPage+"页，跳到第</span>";
		html += "              <input id='BootStrapPage_page_input' type='text' class='form-control' aria-label='Amount (to the nearest dollar)' >";
		html += "              <span class='input-group-addon'>页</span>";
		html += "        	   <span id='BootStrapPage_submit' class='input-group-addon' style='cursor: pointer;'>确定</span>";
		html += "            </div>";
		html += "		</div>";
		html += "	</div>";
		html += "</div>";
		html += "";
		
		this.html(html);
		
		//绑定输入具体页数点击确定的回调函数
		$("#BootStrapPage_submit").on("click",function(){
			var pageNum = document.getElementById("BootStrapPage_page_input").value;
			if(pageNum != undefined) {
				if(pageNum < 1) {pageNum = 1;}
				if(pageNum > allPage) {pageNum = allPage;}
			}
			skipMethod(pageNum);
			// 重新渲染
			if(autoRefresh == true) {
				object.renderPage({
					nowPage : pageNum ,
					allPage : allPage ,
					autoRefresh : autoRefresh,
					onClickMethod : onClickMethod,
					skipMethod : skipMethod,
				});
			}
		});
		// 绑定点击页数的回调函数 
		var bootStrapPage_nums = $("a[name='BootStrapPage_num']");
		if(bootStrapPage_nums != undefined) {
			for(var i = 0 ; i < bootStrapPage_nums.length ; i++){
				var bootStrapPage_num = bootStrapPage_nums[i];
				$(bootStrapPage_num).on("click",function(mouseEvent){
					var target = mouseEvent.target|| mouseEvent.srcElement;
					var pageNum = target.getAttribute("data");
					onClickMethod(pageNum);
					// 重新渲染
					if(autoRefresh == true) {
						object.renderPage({
							nowPage : pageNum ,
							allPage : allPage ,
							autoRefresh : autoRefresh,
							onClickMethod : onClickMethod,
							skipMethod : skipMethod,
						});
					}
				});
			}
		}
		// 绑定输入页数后按回车键的回调函数
		function enter(event){
			if(event.keyCode == 13){
                document.getElementById("BootStrapPage_submit").click();
            }
		}
		document.getElementById("BootStrapPage_page_input").onkeydown=enter;
    };
})(jQuery);