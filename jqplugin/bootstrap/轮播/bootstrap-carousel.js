(function ($) {
    $.fn.jqCarousel = function (options) {
        
        // 必须参数检验
        if(options.data == undefined) {
            throw "data is undefined error.";
        }
        
        // 默认参数
        var defaultsOptions = {
            color : "#fff",
            fontSize : "14px",
            interval : 5000,
            fontFamily : "微软雅黑",
            data : undefined ,
        };
        var finalOptions = $.extend(defaultsOptions,options);
        
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
        
        // 拼接html
        var id = randomString(32);
        var html = "";
        html += "<div id='"+id+"' class='carousel slide' data-ride='carousel'>";
        html += "  <ol class='carousel-indicators'>";
        for(var i = 0 ; i < finalOptions.data.length ; i++){
            if( i == 0) {
                html += "    <li data-target='#"+id+"' data-slide-to='"+i+"' class='active'></li>";
            }
            else {
                html += "    <li data-target='#"+id+"' data-slide-to='"+i+"'></li>";
            }
        }
        html += "  </ol>";
        
        
        html += "  <div class='carousel-inner' role='listbox'>";
        for(var i = 0 ; i < finalOptions.data.length ; i++){
            if( i == 0) {
                if(finalOptions.data[i].newWindow != undefined && finalOptions.data[i].newWindow == true) {
                    html += "    <div class='item active' style='cursor: pointer;' onclick='javascript:window.open(\""+finalOptions.data[i].href+"\")'>";
                }
                else {
                    html += "    <div class='item active' style='cursor: pointer;' onclick='javascript:window.location.href=\""+finalOptions.data[i].href+"\"'>";
                }
            }
            else {
                if(finalOptions.data[i].newWindow != undefined && finalOptions.data[i].newWindow == true) {
                    html += "    <div class='item' style='cursor: pointer;' onclick='javascript:window.open(\""+finalOptions.data[i].href+"\")'>";
                }
                else {
                    html += "    <div class='item' style='cursor: pointer;' onclick='javascript:window.location.href=\""+finalOptions.data[i].href+"\"'>";
                }
                
            }
            html += "      <img src='"+finalOptions.data[i].url+"' alt='"+finalOptions.data[i].alt+"'>";
            html += "      <div class='carousel-caption' style='color:"+finalOptions.color+";font-size:"+finalOptions.fontSize+";font-family:"+finalOptions.fontFamily+"'>";
            html += finalOptions.data[i].text;
            html += "      </div>";
            html += "    </div>";
        }
        html += "  </div>";
        
        
        html += "  <a class='left carousel-control' href='#"+id+"' role='button' data-slide='prev'>";
        html += "    <span class='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>";
        html += "    <span class='sr-only'>Previous</span>";
        html += "  </a>";
        html += "  <a class='right carousel-control' href='#"+id+"' role='button' data-slide='next'>";
        html += "    <span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>";
        html += "    <span class='sr-only'>Next</span>";
        html += "  </a>";
        html += "</div>";
        
        this.html(html);
        
        // 控制轮播速度
        $("#"+id).carousel({
            interval: finalOptions.interval,
        })
    };
})(jQuery);