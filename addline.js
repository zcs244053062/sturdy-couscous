
function polyline(){

	map.clearMap();//清除点标记
	path=new Array();
	for(i=0;i<=f;i++)
	{
		path[i] = lnglats[arr2[i]];
	}
	var polyline3 = new AMap.Polyline({
		path: path,            // 设置线覆盖物路径
		showDir:true,
		strokeColor: '#3366cc',   // 线颜色
		strokeWeight: 5           // 线宽
	});
	
	for(i=1;i<f;i++)
	 {
	 	var marker= new AMap.Marker({
		position: path[i],
		 offset: new AMap.Pixel(-13, -30),
	 	});
	 	map.add(marker);
	 }
    map.add(polyline3);
	map.setFitView();
}


