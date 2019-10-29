var map = new AMap.Map('container', {
        resizeEnable: true, //是否监控地图容器尺寸变化
        zoom:16, //初始化地图层级
        center: [121.393421,31.315984], //初始化地图中心点 
	pitch:75, // 地图俯仰角度，有效范围 0 度- 83 度
    	viewMode:'3D' // 地图模式
    });
    
/* map.plugin('AMap.Geolocation', function() {})  
var geolocation = new AMap.Geolocation({
        timeout: 10000,
        GeoLocationFirst: false,
        maximumAge: 0 //定位结果缓存0毫秒，默认：0
    });
    map.addControl(geolocation)
    geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', function(data) {
        data.position.getLng() //定位成功返回的经度
        data.position.getLat() //定位成功返回的纬度
    }); //返回定位信息
    AMap.event.addListener(geolocation, 'error', function(data) {
        if (data.info == 'FAILED') {
            alert('获取您当前位置失败！')
        }
    });*/
//var表示变量的名称，或者是用户提供的值
//lnglats数组每一排8个坐标
var lnglats = [ [121.389045,31.320459],[121.388718,31.320065],[121.389592,31.319616],[121.388551,31.319057],[121.388546,31.318523],[121.388166,31.318065],[121.388944,31.318156],[121.388745,31.317694], 
				[121.388182,31.317675],[121.388406,31.315718],[121.389447,31.317413],[121.389441,31.317024],[121.388263,31.316932],[121.389158,31.316928],[121.389259,31.316188],[121.389501,31.318072],
				[121.389673,31.317778],[121.39007,31.317471] ,[121.391166,31.317481],[121.390613,31.315877],[121.389616,31.315854],[121.391091,31.31903],[121.390314,31.318954],[121.392062,31.319071],
				[121.392716,31.318113],[121.391611,31.319607],[121.391671,31.31718] ,[121.390334,31.312756],[121.391176,31.314575],[121.392083,31.312637],[121.391895,31.313975],[121.389111,31.314361],
				[121.389069,31.31229] ,[121.389412,31.311282],[121.388897,31.31463],[121.393586,31.312904],[121.394948,31.313301],[121.396971,31.31339],[121.394411,31.313934], [121.39322,31.315455],
				[121.396723,31.314658],[121.392383,31.316079],[121.396369,31.315057],[121.395463,31.31809],[121.395951,31.315327],[121.394991,31.316885], [121.392099,31.31793], [121.392904,31.316638],
				[121.394733,31.317206],[121.395678,31.316273],[121.395742,31.312197],[121.394213,31.318292],[121.397227,31.318347],[121.390876,31.319755],[121.393595,31.312046],[121.39293,31.3136]
];

var infoWindow = new AMap.InfoWindow({offset: new AMap.Pixel(0, -30)});

var Markername = ['北门','校医院','北门交叉口','玄陵网球馆','V1','V2','国际交流学院1',
	'山明楼','V3','西门交叉口','山明交叉口','S1交叉口','S2','S1','益新楼',
	'O楼','I楼','R楼','V4','V5','益新交叉口','尔美楼','国际交流学院2',
	'尔美东入口','交叉口','操场入口1','档案馆','V8','V6','V9','泮池石桥',
	'V12','后勤基建大楼','西南门','V7','上海美术学院', '南门收发室','行政楼','V10',
	'下沉式广场','BJ楼','图书馆','CJ楼','伟长楼','DJ楼','FJ楼','V11',
	'G楼','GJ楼','水秀楼','东南门交叉口','音乐学院','东门','V13','V14',
	'V15'
];


//给多个点标记添加单击显示信息窗体的事件
for (var i=0, marker; i<lnglats.length;i++) {
	var marker = new AMap.Marker({ //添加自定义点标记
                    map: map,
                    position: lnglats[i], //基点位置
                    draggable: false,  //是否可拖动
                 }); 
        marker.content = (i) + ' ' + Markername[i];
        marker.on('click', markerClick);
        marker.emit('click', {target: marker});

}
 function markerClick(e) {
        infoWindow.setContent(e.target.content);
        infoWindow.open(map, e.target.getPosition());
    }
 
    map.setFitView();//设置当前标记的所有点恰好显示在地图框中
