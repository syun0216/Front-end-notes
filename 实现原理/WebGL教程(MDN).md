# WebGL教程

## 初识WebGL

WebGL 使得在支持HTML 的 canvas 标签的浏览器中，不需要安装任何插件，便可以使用基于 OpenGL ES 2.0 的 API 在 canvas 中进行2D和3D渲染。WebGL程序包括用 JavaScript 写的控制代码，以及在图形处理单元（GPU, Graphics Processing Unit）中执行的着色代码（GLSL，注：GLSL为OpenGL着色语言）。WebGL 元素可以和其他 HTML 元素混合使用，并且可以和网页其他部分或者网页背景结合起来。

### 准备3D渲染

为了使用 WebGL 进行 3D 渲染，你首先需要一个 canvas 元素。下面的 HTML 片段用来建立一个 canvas 元素并设置一个 onload 事件处理程序来初始化我们的 WebGL 上下文 。

```html
<body onload="main()">
  <canvas id="glcanvas" width="640" height="480">
    Your browser doesn't not appear to support the HTML5 <code>&lt;canvas&gt;</code> element.
  </canvas>
</body>
```

### 准备WebGL上下文

```js
function main() {
  const canvas = document.querySelector("#glcanvas");
  cosnt gl = canvas.getContext('webgl');

  if(gl) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
  }
}
```

## 使用WebGL创建2D内容

### 渲染场景

