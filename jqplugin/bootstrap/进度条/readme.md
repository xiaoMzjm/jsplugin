###效果图
进度小于33%：
![进度小于33%](https://raw.githubusercontent.com/xiaoMzjm/jsplugin/master/jqplugin/bootstrap/%E8%BF%9B%E5%BA%A6%E6%9D%A1/green.png)
<br>

进度33~66%：
![进度小于33%](https://raw.githubusercontent.com/xiaoMzjm/jsplugin/master/jqplugin/bootstrap/%E8%BF%9B%E5%BA%A6%E6%9D%A1/yellow.png)
<br>

进度66~100%：
![进度小于33%](https://raw.githubusercontent.com/xiaoMzjm/jsplugin/master/jqplugin/bootstrap/%E8%BF%9B%E5%BA%A6%E6%9D%A1/red.png)
<br>

默认：
![默认](https://raw.githubusercontent.com/xiaoMzjm/jsplugin/master/jqplugin/bootstrap/%E8%BF%9B%E5%BA%A6%E6%9D%A1/blue.png)


###使用指南

```
<div id="progressbar" style=""></div>

<script type="text/javascript">

	// 使用默认配置快速使用：
	$("#progressbar").renderProgressBar({
		nowValue : 30,			// 进度条当前百分比
	});
	
	// 更多配置：
	$("#progressbar").renderProgressBar({
		nowValue : 30,			// 进度条当前百分比
		showPercentage : true,	// 是否显示百分比，默认true
		showAnimation : true,	// 是否显示动画，默认true
		gradualColor : true,	// 是否渐变颜色，默认true
	});

</script>
```
```

