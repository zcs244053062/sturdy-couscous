

let numVertexes = 56, //定义顶点数
    numEdges = 200; //定义边数

//对矩阵进行初始化

var Arr2 = new Array();
var i,j;

for(i = 0; i < numVertexes; i++){
		Arr2[i] = new Array();
		for (j = 0;j < numVertexes;j++) {
			Arr2[i][j] = 65535;//65535表示讲数组元素初始化为无穷大
		}
	}

for (i = 0; i < numVertexes;i++) {
	for (j = 0; j < numVertexes;j++) {
		if (i==j){
			Arr2[i][j] = 0 ;
		}
	}	
}
	Arr2[0][1] = 50;
	Arr2[0][2] = 103;
	
	Arr2[1][2] = 96;
	
	Arr2[2][4] = 160;
	Arr2[2][22] = 104;
	Arr2[2][53] = 134;
	
	Arr2[3][4] = 40;
	
	Arr2[4][5] = 77;
	Arr2[4][6] = 67;
	
	Arr2[5][6] = 77;
	Arr2[5][8] = 44;
	
	Arr2[6][7] = 47;
	Arr2[6][10] = 95;
	Arr2[6][15] = 57;
	Arr2[6][16] = 71;
	
	Arr2[7][8] = 60;
	Arr2[7][10] = 75;
	Arr2[7][15] = 80;
	Arr2[7][16] = 78;
	
	Arr2[8][12] = 85;
	
	Arr2[9][12] = 140;
	Arr2[9][14] = 94;
	Arr2[9][19] = 210;
	Arr2[9][20] = 117;
	Arr2[9][34] = 128;
	
	Arr2[10][11] = 43;
	Arr2[10][15] = 70;
	Arr2[10][16] = 40;
	Arr2[10][17] = 61;
	
	Arr2[11][13] = 27;
	Arr2[11][12] = 70;
	Arr2[11][14] = 92;
	Arr2[11][17] = 85;
	Arr2[11][20] = 129;
	
	Arr2[12][13] = 90;
	
	Arr2[14][20] = 50;
	
	Arr2[15][16] = 34;
	Arr2[15][22] = 129;
	
	Arr2[17][18] = 106;
	
	Arr2[18][19] = 188;
	Arr2[18][20] = 194;
	Arr2[18][22] = 182;
	Arr2[18][26] = 58;
	Arr2[18][46] = 102;
	
	Arr2[19][20] = 93;
	Arr2[19][28] = 154;
	Arr2[19][41] = 170;
	
	Arr2[21][22] = 76;
	Arr2[21][23] = 91;
	Arr2[21][46] = 159;
	Arr2[21][53] = 90;
	
	Arr2[23][24] = 123;
	Arr2[23][25] = 74;
	
	Arr2[24][43] = 271;
	Arr2[24][46] = 64;
	Arr2[24][51] = 146;
	Arr2[24][52] = 441;

	Arr2[27][29] = 161;
	Arr2[27][30] = 200;
	Arr2[27][31] = 216;
	Arr2[27][32] = 131;
	
	Arr2[28][30] = 94;
	Arr2[28][31] = 196;
	
	Arr2[29][54] = 151;
	Arr2[29][30] = 151;
	
	Arr2[30][39] = 206;
	Arr2[30][55] = 108;
	
	Arr2[31][34] = 34;
	
	Arr2[32][33] = 107;
	Arr2[32][34] = 259;
	
	Arr2[35][54] = 95;
	Arr2[35][55] = 101;
	
	Arr2[36][37] = 183;
	Arr2[36][38] = 93;
	Arr2[36][50] = 145;
	
	Arr2[37][40] = 146;
	Arr2[37][50] = 177;
	
	Arr2[38][39] = 200;
	Arr2[38][40] = 231;
	Arr2[38][42] = 225;
	
	Arr2[39][41] = 104;
	Arr2[39][47] = 133;
	Arr2[39][49] = 247;
	
	Arr2[40][42] = 84;
	
	Arr2[41][47] = 82;
	
	Arr2[42][44] = 51;
	Arr2[42][45] = 227;
	Arr2[42][49] = 153;
	
	Arr2[43][48] = 120;
	Arr2[43][51] = 123;
	Arr2[43][52] = 182;
	
	Arr2[44][49] = 109;
	
	Arr2[45][48] = 54;
	Arr2[45][47] = 204;
	Arr2[45][49] = 86;
	
	Arr2[46][47] = 161;
	
	Arr2[47][48] = 185;
	
	Arr2[48][51] = 136;
	
	Arr2[50][54] = 207;
	
	Arr2[51][52] = 300;
	
	Arr2[54][55] = 186;
	
//定义邻接矩阵

for (i=0; i < numVertexes;i++) {
	for (j = i+1; j < numVertexes;j++) {
		Arr2[j][i] = Arr2[i][j];	//注意不能写成Arr2[i][j]	= Arr2[j][i]
	}
}//将上三角矩阵对称赋值给下三角矩阵

// 定义图结构  
function MGraph() {
    this.vexs = []; //顶点表
    this.arc = []; // 邻接矩阵，可看作边表
    this.numVertexes = null; //图中当前的顶点数
    this.numEdges = null; //图中当前的边数
}
let G = new MGraph(); //创建图使用

//创建图
function createMGraph() {
    G.numVertexes = numVertexes; //设置顶点数
    G.numEdges = numEdges; //设置边数

    //录入顶点信息
    for (let i = 0; i < G.numVertexes; i++) {
        G.vexs[i] = 'V' + i; //scanf('%s'); //ascii码转字符 //String.fromCharCode(i + 65);
    }
   // console.log(G.vexs) //打印顶点

    //邻接矩阵初始化
    for (let i = 0; i < G.numVertexes; i++) {
        G.arc[i] = [];
        for (j = 0; j < G.numVertexes; j++) {
            G.arc[i][j] = Arr2[i][j]; //INFINITY; 
        }
    }
  // console.log(G.arc); //打印邻接矩阵
}

var Pathmatirx = []; //二维数组 表示对应顶点的最小路径的前驱矩阵
var ShortPathTable = []; //二维数组 表示顶点到顶点的最短路径权值和的矩阵

function Floyd() {

    var w, k;
    for (var v = 0; v < G.numVertexes; ++v) { //初始化 Pathmatirx ShortPathTable
        Pathmatirx[v] = [];
        ShortPathTable[v] = [];
        for (var w = 0; w < G.numVertexes; ++w) {
            ShortPathTable[v][w] = G.arc[v][w];
            Pathmatirx[v][w] = w;
        }
    }

    for (var k = 0; k < G.numVertexes; ++k) {
        for (var v = 0; v < G.numVertexes; ++v) {
            for (var w = 0; w < G.numVertexes; ++w) {
                if (ShortPathTable[v][w] > (ShortPathTable[v][k] + ShortPathTable[k][w])) {
                    //如果经过下标为k顶点路径比原两点间路径更短，当前两点间权值设为更小的一个
                    ShortPathTable[v][w] = ShortPathTable[v][k] + ShortPathTable[k][w];
                    Pathmatirx[v][w] = Pathmatirx[v][k]; //路径设置经过下标为k的顶点
                }
            }
        }
    }
}

var arr1;
var arr2;
var b;
var c;
var f;

function PrintAll(m,n) {
	arr1=new Array()//arr1存放的是路径上各点的名称
	arr2=new Array()//arr2存放的是各点代表的序号
	var k=m;
	f = 1;
	for(i = 0;i<30;i++){
		arr1[i];
		arr2[i];
	}
	arr1[0]=Markername[k];
	arr2[0]=k;
    for (var v = 0; v < G.numVertexes; ++v) {
        for (var w = 0; w < G.numVertexes; w++) {
			if(v==m && w==n){
				c = ShortPathTable[v][w];
                k = Pathmatirx[v][w];
                while (k != w) {
					arr1[f]= Markername[k];
					arr2[f]=k;
					f++;
                    k = Pathmatirx[k][w];
            	}
					arr1[f]=Markername[w];
					arr2[f]=k;
            }
        }
    }
	b=arr1.join(" ——>");//join是在arr1相邻两个元素之间加上分隔符
}

createMGraph();
Floyd();

var begin_m;
var end_n;
var flag1;
var flag2;
var Obtn1 = document.getElementById("walk");
var Obtn2 = document.getElementById("ride");
var begin = document.getElementById("begin");
var end = document.getElementById("end");
var oLine ;
var oWeigh ;
var oTime ;


Obtn1.onclick = function(){
	//alert("弹出信息");
	judge();
	if((flag1==1)&&(flag2==1)){
		oLine.innerHTML = b;	
		oWeigh.innerHTML = c+"米";
	oTime.innerHTML = "步行用时"+parseInt(c/60)+"分钟,"+Math.round((c/60-parseInt(c/60))*60)+"秒";
	polyline();	
	}	
	else if((flag1==1)&&(flag2==0)){
		alert("步行模式，起点格式正确，请重新检查终点");
	}
	else if((flag1==0)&&(flag2==1)){
		alert("步行模式，终点格式正确，请重新检查起点");
	}
	else{
		alert("步行模式，请输入起始点");
	}	
}

Obtn2.onclick = function(){
	judge();
	if((flag1==1)&&(flag2==1)){
		oLine.innerHTML = b;	
		oWeigh.innerHTML = c+"米";
		oTime.innerHTML = "骑行用时"+parseInt(c/300)+"分钟,"+Math.round((c/300-parseInt(c/300))*60)+"秒";
		polyline();	
	}	
	else if((flag1==1)&&(flag2==0)){
		alert("骑行模式，起点格式正确，请重新检查终点");
	}
	else if((flag1==0)&&(flag2==1)){
		alert("骑行模式，终点格式正确，请重新检查起点");
	}
	else{
		alert("骑行模式，请输入起始点");
	}	
}

function judge(){
	flag1 = 0;
	flag2 = 0;
	for(var i=0;i<numVertexes;i++){
		if(begin.value == Markername[i]){
			begin_m = i;
			flag1=1;
		}
		if(end.value == Markername[i]){
			end_n = i;
			flag2=1;
		}
	}
	PrintAll(begin_m,end_n);
}
