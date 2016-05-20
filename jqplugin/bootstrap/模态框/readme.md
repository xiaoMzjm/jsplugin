###效果图
警告框：
![警告框](https://raw.githubusercontent.com/xiaoMzjm/jsplugin/master/jqplugin/bootstrap/%E6%A8%A1%E6%80%81%E6%A1%86/%E8%AD%A6%E5%91%8A%E6%A1%86.PNG)

<br>
带按钮的模态框：
![描述](https://raw.githubusercontent.com/xiaoMzjm/jsplugin/master/jqplugin/bootstrap/%E6%A8%A1%E6%80%81%E6%A1%86/%E6%A8%A1%E6%80%81%E6%A1%86.PNG)

###使用例子
```
	// 弹出警告框
	modal({title:"提示".text:"这是一个警告框"});
	
	// 弹出带按钮的模态框
	modal({
		title:"提示",
		text:"这是一个模态框",
		buttonValue:"确定",
		buttonClickMethod:function(){
			alert("触发点击回调函数");
		}
	});
```

