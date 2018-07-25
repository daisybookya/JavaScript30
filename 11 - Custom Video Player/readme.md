

# 練習筆記

記錄實踐過程中的學習心得以及做了什麼新增和修改的部分  



## 學習心得

以vimeo影片鑲嵌，做出具有基本功能(進度條/音量/速度/倒退快進)的影片播放器，和html5 video/audio各個屬性與事件應用。

* video.play() 播放
* video.pause() 暫停
* video.volume 設置或返回音量
* video.playbackRate 設置或返回速度
* video.currentTime 設置或返回當前播放時間
* video.duration 返回影片總時長
* video事件-timeupdate 當currentTime改變時，會觸發此事件
* flex屬性flexBasis:設定子元素的大小


### video/audio事件

補充其他常見的監聽事件
 
| 事件名稱     | 說明           |
| ------------- |:-------------:| 
| abort     | 当音频/视频的加载已放弃时 | 
| canplay     | 当浏览器可以播放音频/视频时 | 
| ended     | 当目前的播放列表已结束时 | 
| error     | 当在音频/视频加载期间发生错误时 | 
| progress     | 当浏览器正在下载音频/视频时 | 
| seeking     | 当用户开始移动/跳跃到音频/视频中的新位置时 | 


以上資料來源:
[http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp](http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp)
 
## 新增修改的部分

* 新增顯示音量大小
* 新增顯示播放速率


