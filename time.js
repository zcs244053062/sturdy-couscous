  
  
function mytime() {
        var a = new Date();
        var b = a.toLocaleTimeString();
        var c = a.toLocaleDateString();
        document.getElementById("time1").innerHTML = c + "&nbsp" + b;
    }
    setInterval(function () { 
    	mytime()   },1000);  //作用相当于
    
function change(){
  var num1 = document.getElementById("begin").value;
  var num2 = document.getElementById("end").value;
	{
   document.getElementById("end").value = num1;
   document.getElementById("begin").value = num2;
 }
}

messag = new Array();
messag1 = new Array();
function roadmessage(){
	map.clearMap();
	messag[0] = lnglats[9];
	messag[1] = lnglats[20];
	messag[2] = lnglats[19];
	messag[3] = lnglats[41];
	messag1[0] = lnglats[40];
	messag1[1] = lnglats[42];
	messag1[2] = lnglats[49];
	messag1[3] = lnglats[45];
	messag1[4] = lnglats[48];
	
	var polyline4 = new AMap.Polyline({
		path: messag,            // 设置线覆盖物路径
		showDir:true,
		strokeColor: '#3366cc',   // 线颜色
		strokeWeight: 5           // 线宽
	})
	var polyline5 = new AMap.Polyline({
		path: messag1,            // 设置线覆盖物路径
		showDir:true,
		strokeColor: '#3366cc',   // 线颜色
		strokeWeight: 5           // 线宽
	})
	  for(i=0;i<=3;i++)
	 {
	 	var marker= new AMap.Marker({
			position: messag[i],
			offset: new AMap.Pixel(-13, -30),
	 	});
		map.add(polyline4);
	 }
	  for(i=0;i<=4;i++)
	 {
	 	var marker= new AMap.Marker({
			position: messag1[i],
			offset: new AMap.Pixel(-13, -30),
	 	});
	 	map.add(polyline5);
	 }
}