###效果图
![面包屑效果图](https://raw.githubusercontent.com/xiaoMzjm/jsplugin/master/jqplugin/bootstrap/%E9%9D%A2%E5%8C%85%E5%B1%91/%E9%9D%A2%E5%8C%85%E5%B1%91.PNG)

###使用例子
```
<script type="text/javascript" src="jquery-2.1.4.js"></script>
<script type="text/javascript" src="bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="bootstrap.min.css">
<script type="text/javascript" src="bootstrap-breadcrumb.js"></script>

$(function(){
	$("#breadcrumb").renderBreadCrumb({
		array:[
			{"text":"Home" , "href":"#"},
			{"text":"Library" , "href":"#"},
			{"text":"Data"}
		]
	});
});
```

