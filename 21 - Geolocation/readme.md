
# 學習心得

使用取得地理位置的Geolocation，學習平常不太使用的地理位置應用。

* Navigator.geolocation 地理位置物件
* watchPosition


## geolocation

SpeechRecognition介面是一個recognition service的控制器介面。他同時也負責處理由識別服務發出的SpeechRecognitionEvent事件。

* Geolocation.getCurrentPosition()
取得裝置當前位置，並回傳Position。
* Geolocation.watchPosition()
返回一個長整數，註冊一個回呼函數。這個方法是用來註冊一個處理的函式，當使用者的裝置位置更新時，這個函式所傳入的回呼函式(callback function) 就會自動被呼叫。
* Geolocation.clearWatch()
移除指定註冊的 watchPosition()。




以上資料來源:[https://developer.mozilla.org/zh-TW/docs/Web/API/Geolocation](https://developer.mozilla.org/zh-TW/docs/Web/API/Geolocation)


  
## 新增修改的部分

無



