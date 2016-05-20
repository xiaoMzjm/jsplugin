###使用例子
```
	// 警告框
	function alertAlarm(){
		modal({text:"这是一个警告框"});
	}
	
	// 带按钮的模态框
	function alertModal(){
		modal({
			text:"这是一个模态框",
			buttonValue:"确定",
			buttonClickMethod:function(){
				alert("触发击回调函数");
			}
		});
	}
```