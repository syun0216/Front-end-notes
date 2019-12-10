## Canvas API 详解

> Canvas API(画布)用于在网页实时生成图像，并且可以操作图像内容，基本上它是一个可以用 js 操作的位图(bitmap)

### 开始使用

- 创建 canvas 元素

```js
<canvas id="canvas" width="300" height="300">
  Your browser isn't support canvas
</canvas>

<script>
  var canvas = document.querySelector('#canvas');
  if(canvas.getContext) {
    var context = canvas.getContext('2d')
  }
</script>
```

- 每个 canvas 节点都有一个对应的 context 对象，Canvas API 定义在这个 context 对象上面。
- 2d 表示用 canvas 节点生成 2D 图案
- 如果参数是 webgl 就表示生成 3d 图像(立体图像),这部分实际上单独叫 WebGL API。

### 绘图方法

> canvas 画布提供了一个作图的平面空间，该空间的每个点都有自己的坐标，x 表示横坐标，y 表示竖坐标。原点(0,0)位于图像左上角，x 轴的正向是原点向右，y 轴的正向是原点向下

#### 绘制路径

> beginPath 方法表示开始绘制路径，moveTo(x, y)方法设置线段的起点，lineTo(x, y)方法设置线段的终点，stroke 方法用来给透明的线段着色

```js
context.beginPath(); // 开始路径绘制
context.moveTo(20, 20); // 设置路径的起点
context.lineTo(200, 20); // 绘制一条到(200,20)的直线
context.lineWidth = 1.0; // 设置线宽
context.strokeStyle = '#cc0000'; // 设置线的颜色
context.stroke(); // 进行线的着色，这时线才可见
```

moveto 和 lineto 可以多次使用。最后，还可以使用 closePath 方法，自动绘制一条当前点的直线，形成一个封闭图形，省却一次 lineto 方法。

### 绘制矩形

> fillRect(x, y, width, height)方法绘制矩形，它的四个参数分别为矩形左上角顶点的 x 坐标、y 坐标，以及矩形的宽高。fillStyle 属性用来设置矩形的填充色。

```js
context.fillStyle = "yellow";
context.fillRect(50, 50, 200, 100);
```

strokeRect 方法跟 fillRect 类似没用来绘制空心矩形。

```js
context.strokeRect(10, 10, 200, 100);
```

clearRect 方法清除矩形区域的内容

```js
context.clearRect(10, 10, 50, 50);
```

### 绘制文本

> fillText(string, x, y)用来绘制文本，三个参数分别是文本内容，起点 x 坐标、y 坐标。使用之前，需要 font 字体、大小、样式（写法类似 css 的 font 属性）。与此类似的还有 strokeText 方法，用来添加空心字

```js
// 设置字体
context.font = "Bold 20 px Arial"; // 设置字体
context.textAlign = "left"; // 设置对齐方式
context.fillStyle = "#008600"; // 设置填充颜色
context.fillText("Hello", 10, 50); // 设置字体内容
context.strokeText("Hello", 10, 100); // 绘制空心字
```

**fillText 方法不支持文本断行，如果要生成多行文本，只有调用多次 fillText 方法**

### 绘制圆形和扇形

> arc 方法来绘制扇形

```js
context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
```

arc 方法的 x 和 y 参数是圆心坐标，radius 是半径，startAngle 和 endAngle 是扇形的起始角和终止角，anticlockwise 表示做图时应该逆时针(true)还是顺时针(false)

- 绘制实心圆

```js
context.beginPath();
context.arc(60, 60, 50, 0, Math.PI * 2, true);
context.fillStyle = "#000000";
context.fill();
```

- 绘制空心圆

```js
context.beginPath();
context.arc(60, 60, 50, 0, Math.PI * 2, true);
context.lineWidth = 1.0;
context.strokeStyle = "#000";
context.stroke();
```

### 设置渐变色

> createLinearGradient 方法设置渐变色

```js
var myGradient = context.createLinearGradient(0, 0, 0, 160);
myGradient.addColorStop(0, "#BABABA");
myGradient.addColorStop(1, "#636363");

context.fillStyle = myGradient;
context.fillRect(10,10,200,100);
```

createLinearGradient方法的参数是(x1, y1, x2, y2)，其中x1和y1是起点坐标，x2和y2是终点坐标。通过不同的坐标值，可以生成从上至下、从左到右的渐变等等。

### 设置阴影

```js
context.shadowOffsetX = 10; // 设置水平位移
context.shadowOffsetY = 10; // 设置垂直位移
context.shadowBlur = 5; // 设置模糊度
context.shadowColor = "rgba(0,0,0,0.5)"; // 设置阴影颜色

context.fillStyle = "#CC0000"; 
context.fillRect(10,10,200,100);
```

## 图像处理方法

### drawImage 方法

> Canvas API 允许图像插入画布，读取图片后，使用drawImage方法在画布内进行重绘

```js
var img = new Image();
img.src = 'image.png';
context.drawImage(img, 0, 0); // 设置对应的图像对象，以及它在画布上的位置
```
使用image的onload方法等资源加载完成再生成canvas

```js
var image = new Image();

image.onload = function() {
  var canvas = document.createElement('canvas');
  canvas.width = image.width;
  canvas.height = image.height;
  canvas.getContext('2d').drawImage(image, 0, 0);
  // 插入页面底部
  document.body.appendChild(image);
  return canvas;
}

image.src = 'http://talent.qh-1.cn/static/img/person.57af731.png';
```

### getImageData putImageData方法

> getImageData方法可以用来读取Canvas的内容，返回一个对象，包含了每个像素的信息。

会存在跨域问题：The canvas has been tainted by cross-origin data.  
imageData对象有一个data属性，是一个一维数组，分别由每个像素的红、绿、蓝和alpha通道值，因此该数组的长度等于 图像的像素宽度 x 图像的像素高度 x 4，每个值的范围是0–255。这个数组不仅可读，而且可写，因此通过操作这个数组的值，就可以达到操作图像的目的。修改这个数组以后，使用putImageData方法将数组内容重新绘制在Canvas上。

```js
context.putImageData(imageData, 0, 0);
```

### toDataUrl方法

> 对图像数据做出修改以后，可以使用toDataURL方法，将Canvas数据重新转化成一般的图像文件形式

```js
function convertCanvasToImage(canvas) {
  var image = new Image();
  image.src = canvas.toDataUrl('image/png');
  return image;
}
```

### save方法和restore方法

> save方法用于保存上下文环境，restore方法用于恢复到上一次保存的上下文环境。

```js
context.save(); //保存当前图像

context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.shadowBlur = 5;
context.shadowColor = 'rgba(0,0,0,0.5)';

context.fillStyle = '#CC0000';
context.fillRect(10,10,150,100);

context.restore(); // 恢复save之前的图像

context.fillStyle = '#000000';
context.fillRect(180,10,150,100);

```

## 动画

> 利用JavaScript，可以在canvas元素上很容易地产生动画效果。 

```js
var posX = 20,
    posY = 100;

setInterval(function() {
	context.fillStyle = "black";
    context.fillRect(0,0,canvas.width, canvas.height);

	posX += 1;
	posY += 0.25;

	context.beginPath();
	context.fillStyle = "white";

	context.arc(posX, posY, 10, 0, Math.PI*2, true); 
	context.closePath();
	context.fill();
}, 30);
```

## 像素处理

> 通过getImageData方法和putImageData方法，可以处理每个像素，进而操作图像内容

```js
if(canvas.width > 0 && canvas.height > 0) {
  var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  filter(imageData); // 处理像素函数
  context.putImageData(imageData,0,0);
}
```

### 灰度效果

> 灰度图是取红、绿、蓝三个像素值的算术平均值。假定d[i]是像素数组中一个象素的红色值，则d[i+1]为绿色值，d[i+2]为蓝色值，d[i+3]就是alpha通道值。转成灰度的算法，就是将红、绿、蓝三个值相加后除以3，再将结果写回数组。

```js
grayscale = function(pixels){
  var d = pixels.data;
  for(var i =0;i<d.length;i+=4>) {
    var r = d[i];
    var g = d[i+1];
    var b = d[i+2];
    d[i] = d[i+1] = d[i+2] = (rgb)/3
  }
  return pixels
}
```

### 复古效果

> 复古效果（sepia）则是将红、绿、蓝三个像素，分别取这三个值的某种加权平均值，使得图像有一种古旧的效果。

```js
sepia = function (pixels) {

    var d = pixels.data;

    for (var i = 0; i < d.length; i += 4) {
      var r = d[i];
      var g = d[i + 1];
      var b = d[i + 2];
      d[i]     = (r * 0.393)+(g * 0.769)+(b * 0.189); // red
      d[i + 1] = (r * 0.349)+(g * 0.686)+(b * 0.168); // green
      d[i + 2] = (r * 0.272)+(g * 0.534)+(b * 0.131); // blue
    }

    return pixels;

};
```

### 红色蒙版效果

> 红色蒙版指的是，让图像呈现一种偏红的效果。算法是将红色通道设为红、绿、蓝三个值的平均值，而将绿色通道和蓝色通道都设为0。

```js
red = function (pixels) {
	
    var d = pixels.data;

    for (var i = 0; i < d.length; i += 4) {
      var r = d[i];
      var g = d[i + 1];
      var b = d[i + 2];
      d[i] = (r+g+b)/3;        // 红色通道取平均值
      d[i + 1] = d[i + 2] = 0; // 绿色通道和蓝色通道都设为0
    }

    return pixels;

};
```

### 亮度效果

> 亮度效果（brightness）是指让图像变得更亮或更暗。算法将红色通道、绿色通道、蓝色通道，同时加上一个正值或负值。

```js
brightness = function (pixels, delta) {

    var d = pixels.data;

    for (var i = 0; i < d.length; i += 4) {
          d[i] += delta;     // red
          d[i + 1] += delta; // green
          d[i + 2] += delta; // blue   
    }

	return pixels;

};
```

### 反转效果

> 反转效果（invert）是指图片呈现一种色彩颠倒的效果。算法为红、绿、蓝通道都取各自的相反值（255-原值）。

```js
invert = function (pixels) {

	var d = pixels.data;

	for (var i = 0; i < d.length; i += 4) {
		d[i] = 255 - d[i];
		d[i+1] = 255 - d[i + 1];
		d[i+2] = 255 - d[i + 2];
	}

	return pixels;

};
```