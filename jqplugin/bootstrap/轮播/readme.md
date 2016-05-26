###效果图
![轮播](https://raw.githubusercontent.com/xiaoMzjm/jsplugin/master/jqplugin/bootstrap/%E8%BD%AE%E6%92%AD/carousel.png)
<br>

###使用指南

```
<script type="text/javascript" src="jquery-2.1.4.js"></script>
<script type="text/javascript" src="bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="bootstrap.min.css">
<script type="text/javascript" src="bootstrap-carousel.js"></script>

<div id="carousel"></div>

<script type="text/javascript">
	$("#carousel").jqCarousel({
		color : "#fff" ,		// 字体颜色，默认#fff
		fontSize : "20px" ,		// 字体大小，默认14px
		interval : 3000 , 		// 轮播间隔，默认5000ms
		fontFamily : "黑体",		// 字体，默认微软雅黑
		data : [
			{
				// 图片地址，无默认
				url : "http://store.storeimages.cdn-apple.com/8748/as-images.apple.com/is/image/AppleInc/aos/published/images/p/ho/phone/alp/phone-alp-banner-201603_GEO_CN?wid=1440&hei=480&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=di2k93" , 
				text : "让出色的 iPhone，更﻿出﻿彩",		// 展示文字，无默认
				alt : "加载图片中",					// 完成加载前展示的文字，无默认
				href : "https://www.baidu.com",		// 点击图片跳转的地址，无默认
				newWindow : true,					// 点击图片是否弹出新窗口，默认不弹出新窗口
			},
			{
				url : "http://store.storeimages.cdn-apple.com/8748/as-images.apple.com/is/image/AppleInc/aos/published/images/p/ho/phone/alp/phone-alp-banner-201603_GEO_CN?wid=1440&hei=480&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=di2k93" , 
				text : "换个造型",
				alt : "加载图片中",
				href : "https://www.baidu.com",
			},
			{
				url : "http://store.storeimages.cdn-apple.com/8748/as-images.apple.com/is/image/AppleInc/aos/published/images/i/pa/ipad/alp/ipad-alp-banner-201603?wid=1440&hei=480&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=5yGkR3" , 
				text : "让你的 iPad 更大有作为",
				alt : "加载图片中",
				href : "https://www.baidu.com",
			},
		]
	});
</script>

