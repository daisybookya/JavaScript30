
# 學習心得

實驗性api取得鏡頭拍照結合canvas的應用 

* MediaDevices實驗性api，尚未普及各家瀏覽器
* MediaDevices.getUserMedia() 取得媒體輸入的許可
* video.videoWidth / video.videoHeight
* video監聽事件-canplay
* URL.createObjectURL()
* canvas-drawImage()
* canvas-getImageData()
* canvas-putImageData()




## MediaDevices.getUserMedia()

MediaDevices.getUserMedia() 会提示用户给予使用媒体输入的许可，媒体输入会产生一个MediaStream，里面包含了请求的媒体类型的轨道。此流可以包含一个视频轨道（来自硬件或者虚拟视频源，比如相机、视频采集设备和屏幕共享服务等等）、一个音频轨道（同样来自硬件或虚拟音频源，比如麦克风、A/D转换器等等），也可能是其它轨道类型。

它返回一个 Promise 对象，成功后会resolve回调一个 MediaStream 对象。若用户拒绝了使用权限，或者需要的媒体源不可用，promise会reject回调一个  PermissionDeniedError 或者 NotFoundError 。

```js
navigator.mediaDevices.getUserMedia(constraints)
.then(function(stream) {
  /* 使用这个stream */
})
.catch(function(err) {
  /* 处理error */
});
```

* constraints
作为一个MediaStreamConstraints 对象，指定了请求的媒体类型和相对应的参数。
  
constraints 参数是一个包含了video 和 audio两个成员的MediaStreamConstraints 对象，用于说明请求的媒体类型。必须至少一个类型或者两个同时可以被指定。如果浏览器无法找到指定的媒体类型或者无法满足相对应的参数要求，那么返回的Promise对象就会处于rejected［失败］状态，NotFoundError作为rejected［失败］回调的参数。 
  
以下同时请求不带任何参数的音频和视频：
```js
{ audio: true, video: true }
```

以上資料來源:[https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia)

## URL.createObjectURL()

靜態方法 URL.createObjectURL() 用於建立一個帶有URL的 DOMString 以代表參數中所傳入的物件. 該URL的生命週期與創造它的window中的 document一致. 這個新的物件URL 代表了所指定的 File 物件 或是 Blob 物件.

```js
objectURL = URL.createObjectURL(blob);
```

每次呼叫 createObjectURL() 都會產生一個新的URL, 不論是否曾以同一物件產生過. 當你不再需要它們的時候必須對每一個都呼叫 URL.revokeObjectURL() 來釋放它們. 瀏覽器會在document被unload時自動釋放它們; 然而, 為了最佳化效能與記憶體用量, 當有安全的時機請務必手動釋放它們.
  
以上資料來源:[https://developer.mozilla.org/zh-TW/docs/Web/API/URL/createObjectURL](https://developer.mozilla.org/zh-TW/docs/Web/API/URL/createObjectURL)
  
## 新增修改的部分

* 新增若沒裝置就提示不能使用拍照功能



