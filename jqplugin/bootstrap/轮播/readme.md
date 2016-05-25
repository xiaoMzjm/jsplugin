###效果图
![轮播](https://raw.githubusercontent.com/xiaoMzjm/jsplugin/master/jqplugin/bootstrap/%E8%BD%AE%E6%92%AD/carousel.png)
<br>

###使用指南

```
<div id="carousel"></div>

<script type="text/javascript">
	$("#carousel").jqCarousel({
		color : "#fff" ,
		fontSize : "20px" ,
		interval : 3000 , 
		fontFamily : "黑体",
		data : [
			{
				url : "http://store.storeimages.cdn-apple.com/8748/as-images.apple.com/is/image/AppleInc/aos/published/images/p/ho/phone/alp/phone-alp-banner-201603_GEO_CN?wid=1440&hei=480&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=di2k93" , 
				text : "让出色的 iPhone，更﻿出﻿彩",
				alt : "加载图片中",
			},
			{
				url : "http://store.storeimages.cdn-apple.com/8748/as-images.apple.com/is/image/AppleInc/aos/published/images/p/ho/phone/alp/phone-alp-banner-201603_GEO_CN?wid=1440&hei=480&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=di2k93" , 
				text : "换个造型",
				alt : "加载图片中",
			},
			{
				url : "http://store.storeimages.cdn-apple.com/8748/as-images.apple.com/is/image/AppleInc/aos/published/images/i/pa/ipad/alp/ipad-alp-banner-201603?wid=1440&hei=480&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=5yGkR3" , 
				text : "让你的 iPad 更大有作为",
				alt : "加载图片中",
			},
		]
	});
</script>
```

