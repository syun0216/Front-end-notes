### HTML5新标签
---
一些XSS Filter如果建立了一个黑名单的话，则可能就不会覆盖到HTML5新增的标签和功能，从而避免发生XSS。

### iframe的sandbox
---
在HTML5中，专门为iframe定义了一个新的属性，叫sandbox。使用这个属性，iframe标签加载的内容会被视为一个独立的源，其中的脚本将会被禁止执行，插件被禁止加载。sandbox属性可以通过参数来支持更精确的控制。有以下值可选择：  
1. allow-same-origin: 允许同源访问；
2. allow-top-navigation: 允许访问顶层窗口；
3. allow-form: 允许提交表单；
4. allow-script:允许执行脚本；  

### Link Types: noreferer
---
在HTML5中，a标签和area标签定义了一个新的link types： noreferer。顾名思义，标签定义了noreferer之后，浏览器在请求该标签指定的地址时就不会发送Referer。

### Canvas的妙用
---
通过Canvas自动破解验证码，最大的好处就是可以在浏览器中实现在线破解，大大降低了攻击的门槛。

### Cross-Origin Resource Sharing
---
浏览器实现了同源策略限制了脚本的跨域请求。

### postMessage 跨窗口传递消息
---
允许每一个window对象往其他的窗口发送文本信息，从而实现跨窗口消息传递。

### webStorage
---
SessionStorage LocalStorage；web Storage同样受到同源策略的限制，