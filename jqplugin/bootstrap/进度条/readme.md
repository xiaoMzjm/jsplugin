###效果图


###使用指南

```
<div id="progressbar" style=""></div>

<script type="text/javascript">
	
	setTimeout(function(){
		$("#progressbar").renderProgressBar({
    		nowValue : 30,			// 进度条当前百分比
    		showPercentage : true,	// 是否显示百分比，默认true
    		showAnimation : true,	// 是否显示动画，默认true
    	});
	},1000);

</script>
```