## requestAnimationFrame详解

requestAnimationFrame是浏览器用于定时循环操作的一个接口，类似setTimeout，主要是用途是按帧对网页进行重绘。  
设置这个api的目的是为了让各种网页效果(DOM动画、Canvas动画、SVG动画、webGL动画)能够有一个统一的刷新机制，从而节省系统资源，提高系统性能，改善视觉效果。代码