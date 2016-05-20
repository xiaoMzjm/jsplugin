###使用例子
```
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
		alert(pageNum);
	}
	
	// 实现输入页数点击确定后的回调函数
	function skipMethod(pageNum){
		alert(pageNum);
	}
	
	// 使用插件
	$(function(){
		var data = getPageData();
		$("#page").renderPage({
			nowPage : data.nowPage ,		// 当前第几页
			allPage : data.allPage ,		// 共几页
			onClickMethod : onClickMethod,	// 点击页数后的回调函数，用户点击页数后插件会传入第几页到这个函数中
			skipMethod : skipMethod,		// 输入具体页数后的回调函数，用户输入页数并确定后插件会传入输入的页数到这个函数中
		});
	});
```