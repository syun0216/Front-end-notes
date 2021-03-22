---
title: cordova构建项目时的问题
date: 2021-03-20 18:39:52
permalink: /pages/a66f47/
categories:
  - js技巧
tags:
  - JavaScript
---
### Cannot read property 'toLowerCase' of undefined 

solution:  
Replace the availableDevices function in platforms/ios/cordova/lib/list-emulator-build-targets-with the following:

```js
var availableDevices = Object.keys(devices).reduce(function (availAcc, deviceCategory) {
    var availableDevicesInCategory = devices[deviceCategory];
    availableDevicesInCategory.forEach(function (device) {
        if (device && device.name === deviceType.name.replace(/\-inch/g, ' inch') && device.isAvailable == true) {
            availAcc.push(device);
        }
    });
    return availAcc;
}, []);
```

参考地址：[Cordova build iOS](https://github.com/apache/cordova-ios/issues/427)

### Status of Xcode 10 support

参考[ANNOUNCEMENT Status of Xcode 10 support](https://github.com/apache/cordova-ios/issues/407)


If you are building on the command-line, you can specify --buildFlag="UseModernBuildSystem=0"

```bash
# Cordova CLI
cordova run ios --buildFlag='-UseModernBuildSystem=0'
cordova build ios --buildFlag='-UseModernBuildSystem=0'

# Ionic CLI
ionic cordova run ios -- --buildFlag="-UseModernBuildSystem=0"
ionic cordova build ios -- --buildFlag="-UseModernBuildSystem=0"ag=
```

If you're building with a build.json config file, you can add the following under the iOS release or debug config:

```js
"buildFlag": [
  "-UseModernBuildSystem=0"
]
```