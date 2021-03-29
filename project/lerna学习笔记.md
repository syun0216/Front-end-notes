## lerna相关踩坑记录
1. 解决lerna跑子包命令不能输出console.log内容，可以使用--stream；例如
```bash
lerna run @common dev --stream
```
详细issue请看[这里](https://github.com/lerna/lerna/issues/2704)