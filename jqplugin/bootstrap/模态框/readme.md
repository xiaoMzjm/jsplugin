###效果图
警告框：
![警告框](https://raw.githubusercontent.com/xiaoMzjm/jsplugin/master/jqplugin/bootstrap/%E6%A8%A1%E6%80%81%E6%A1%86/%E8%AD%A6%E5%91%8A%E6%A1%86.PNG)

<br>
带按钮的模态框：
![描述](https://raw.githubusercontent.com/xiaoMzjm/jsplugin/master/jqplugin/bootstrap/%E6%A8%A1%E6%80%81%E6%A1%86/%E6%A8%A1%E6%80%81%E6%A1%86.PNG)

###使用例子
```

<script type="text/javascript">

	// 快速使用：
	modal({text:"这是一个警告框"});

	// 更多配置：
	modal({
		title:"提示",					// 标题，默认"提示"
		text:"这是一个警告框",			// 正文
		closeTime : 2000,				// 自动关闭时间，默认不关闭
		buttonValue:"确定",				// 按钮，默认没有该按钮   
		buttonClickMethod:function(){	// 对应上面的按钮的回调函数，默认没回调函数
			alert("触发击回调函数");
		}
	});
</script>
```

