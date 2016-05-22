###效果图
![分页效果图](https://raw.githubusercontent.com/xiaoMzjm/jsplugin/master/jqplugin/bootstrap/%E5%88%86%E9%A1%B5/%E5%88%86%E9%A1%B5.PNG)

###使用例子
```
<div id="page" ></div>

<!--使用例子-->
<script>
	// 模拟获取分页数据
	function getPageData(){
		var data = {
			nowPage : 3,
			allPage : 10
		};
		return data;
	}
	
	// 实现点击具体页数时的回调函数
	function onClickMethod(pageNum){
		console.info("pageNum="+pageNum);
	}
	
	// 实现输入页数点击确定后的回调函数
	function skipMethod(pageNum){
		console.info("pageNum="+pageNum);
	}
	
	// 渲染插件
	$(function(){
		$("#page").renderPage({
			nowPage : getPageData().nowPage ,	// 当前第几页
			allPage : getPageData().allPage ,	// 共几页
			autoRefresh : true,					// 点击页数后自动重新渲染分页插件
			onClickMethod : onClickMethod,		// 点击页数后的回调函数，用户点击页数后插件会传入第几页到这个函数中
			skipMethod : skipMethod,			// 输入具体页数后的回调函数，用户输入页数并确定后插件会传入输入的页数到这个函数中
		});
	});
</script>
```

