###效果图
进度小于33%：
![时间轴](https://raw.githubusercontent.com/xiaoMzjm/jsplugin/master/jqplugin/bootstrap/%e6%97%b6%e9%97%b4%e8%bd%b4/timeline.png)
<br>

###使用指南

```
<script type="text/javascript" src="timeline.js"></script>
<script type="text/javascript" src="jquery-timeline.js"></script>
<link rel="stylesheet" type="text/css" href="timeline.css">

<div id="timeline"></div>

<script type="text/javascript">
	$("#timeline").timeline({
		height:530,    // 如果不设置高度，时间轴将会无限向下挤，如果设置了高度，超出高度部分将会出现滚动条
		data:[
    		{
    			title: "html5时间表 1",
    			content: "jQuery 团队在官博中再次提醒用户，jQuery 2.0 不再支持IE 6/7/8 了，但是 jQuery 1.9 会继续支持。因为旧版 IE 浏览器在整个互联网中还有很大部分市场，所以他们非常期望大部分网站能继续使用 jQuery 1.x 一段时间。jQuery 团队也将同时支持 jQuery 1.x 和 2.x 。1.9 和 2.0 版的 API 是相同的，所以不必因为你们网站还在用 jQuery 1.9，就感觉好像错过了什么，或者是落后了。",
    			date: "Jan 14",
    			url: "https://www.baidu.com",
    			buttonText: "点我更多",
    		},
    		{
    			title: "html5时间表 2",
    			content: "jQuery 团队在官博中再次提醒用户，jQuery 2.0 不再支持IE 6/7/8 了，但是 jQuery 1.9 会继续支持。因为旧版 IE 浏览器在整个互联网中还有很大部分市场，所以他们非常期望大部分网站能继续使用 jQuery 1.x 一段时间。jQuery 团队也将同时支持 jQuery 1.x 和 2.x 。1.9 和 2.0 版的 API 是相同的，所以不必因为你们网站还在用 jQuery 1.9，就感觉好像错过了什么，或者是落后了。",
    			date: "Jan 15",
    			url: "http://www.dy2018.com/",
    		},
			{
    			title: "html5时间表 3",
    			content: "jQuery 团队在官博中再次提醒用户，jQuery 2.0 不再支持IE 6/7/8 了，但是 jQuery 1.9 会继续支持。因为旧版 IE 浏览器在整个互联网中还有很大部分市场，所以他们非常期望大部分网站能继续使用 jQuery 1.x 一段时间。jQuery 团队也将同时支持 jQuery 1.x 和 2.x 。1.9 和 2.0 版的 API 是相同的，所以不必因为你们网站还在用 jQuery 1.9，就感觉好像错过了什么，或者是落后了。",
    			date: "Jan 16",
    			url: "http://www.dy2018.com/",
    		},
		],
	});
</script>
```

