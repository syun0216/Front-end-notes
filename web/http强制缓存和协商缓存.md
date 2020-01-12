### 什么是缓存?

浏览器缓存(Brower Caching)是浏览器对之前请求过的文件进行缓存，以便下一次访问时重复使用，节省带宽，提高访问速度，降低服务器压力  
http缓存机制主要在http响应头中设定，响应头中相关字段为Expires、Cache-Control、Last-Modified、Etag。  
HTTP1.0协议中的。简而言之，就是告诉浏览器在约定的这个时间前，可以直接从缓存中获取资源（representations），而无需跑到服务器去获取。  
- Expires因为是对时间设定的，且时间是Greenwich Mean Time （GMT），而不是本地时间，所以对时间要求较高。  

### 浏览器是如何判断是否使用缓存的

参考： [强制缓存和协商缓存](https://juejin.im/post/5ccfccaff265da03ab233bf5)