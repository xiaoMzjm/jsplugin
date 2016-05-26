(function ($) {
    $.fn.timeline = function (options) {
    	
    	// 参数检验
    	if(options == undefined) {
    		throw "error : options is undefined.";
    	}
    	
    	// 拼接html
    	var html = "";
    	if(options.height != undefined) {
    		html += "<div class='timeLineOutDiv' style='height:"+options.height+"px;overflow:auto;'>";
    	}
    	else {
    		html += "<div class='timeLineOutDiv'>";
    	}
    	html += "    <section id='cd-timeline' class='cd-container'>";
    	
    	for(var i = 0 ; i < options.data.length ; i ++ ){
    		var title = options.data[i].title;
    		var content = options.data[i].content;
    		var date = options.data[i].date;
    		var url = options.data[i].url;
    		var buttonText = options.data[i].buttonText;
    		html += "    	<div class='cd-timeline-block'>";
    		html += "    		<div class='cd-timeline-img cd-picture'>";
        	html += "    		</div>";
        	html += "    		<div class='cd-timeline-content'>";
        	html += "    			<h2>"+title+"</h2>";
        	html += "    			<p>"+content+"</p>";
        	if(buttonText == undefined) {
        		html += "    			<a href='"+url+"' class='cd-read-more'>阅读更多</a>";
        	}
        	else {
        		html += "    			<a href='"+url+"' class='cd-read-more'>"+buttonText+"</a>";
        	}
        	
        	html += "    			<span class='cd-date'>"+date+"</span>";
        	html += "    		</div>";
        	html += "    	</div>";
    	}
    	html += "    </section>";
    	html += "</div>";

    	this.html(html);
    	
    	// 动画
    	var $timeline_block = $('.cd-timeline-block');
		//hide timeline blocks which are outside the viewport
		$timeline_block.each(function(){
			if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
			}
		});
		//on scolling, show/animate timeline blocks when enter the viewport
		$('.timeLineOutDiv').on('scroll', function(){
			$timeline_block.each(function(){
				if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
					$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
				}
			});
		});
    };
})(jQuery);