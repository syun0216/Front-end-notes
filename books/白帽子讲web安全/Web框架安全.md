### MVC框架安全

在模板引擎与XSS防御 Django auto-escape

---

### Web框架与CSRF防御

完整的CSRF防御方案，对于Web框架来说有几处地方需要改动。  
1. 在Session中绑定token。如果不能保存到服务器端Session中，则可以替代为保存到Cookie里。
2. 在form表单中自动填入token字段， 
3. 在Ajax请求中自动添加token
4. 在服务器端对比post提交参数的token与session中绑定的token是否一致，以验证CSRF攻击

---

### HTTP Headers管理

类似的，针对30X返回好的http response，浏览器将会跳转到location指定的url，攻击者往往利用此功能实施钓鱼诈骗
```
HTTP /1.1 302 Moved Temporarily
Location: http://www.abc.com
```
因此，对于框架来说，管理好跳转目的地址是很有必要的。  
1. 如果Web框架提供统一的跳转函数，则可以在跳转函数内实现以个白名单，指定跳转地址只能在白名单中；
2. 控制Location的值只能是那些地址，也同样起到相同的效果。

---

### 数据持久层与sql注入

预编译绑定变量对抗SQL注入的最佳方式。