
# 學習心得

使用內建的SpeechRecognition，學習平常不太使用的語音應用。

* SpeechRecognition 語音物件
* recognition.interimResults 語音辨識尚未完成的狀態是否回傳
* recognition.lang 語言設定
* recognition.start() 啟用語音辨識
* replace()
* 監聽事件'end'的運用


## 解題思路

針對各家瀏覽器判斷語音物件window.SpeechRecognition/ webkitSpeechRecognition

-> 創造p放入div -> 監聽事件'result' 用map()整合陣列 -> 使用replace()過濾不雅字眼

-> 將陣列塞入p顯示結果 -> 監聽事件'end' 語音結束再重啟語音辨識


## SpeechRecognition()

SpeechRecognition介面是一個recognition service的控制器介面。他同時也負責處理由識別服務發出的SpeechRecognitionEvent事件。

```js
var myRecognition = new SpeechRecognition();
```

SpeechRecognition 繼承了父介面 EventTarget 的屬性。

* SpeechRecognition.grammars
回傳一組用來表示語法且可以被當前的 SpeechRecognition 解析的 SpeechGrammar 物件

* SpeechRecognition.lang
取得和設定當前 SpeechRecognition 使用的語言。若沒有特別指定，預設會使用lang 的設定值，或是使用者裝置設定的語言。
* SpeechRecognition.continuous
控制每個 recognition 會傳連續的結果還是只回傳單一結果。預設為回傳單一結果 (false.)
* SpeechRecognition.interimResults
控制臨時結果是否回傳。 true 回傳，false 不回傳。臨時結果指的是所有非最終 (Final) 結果的結果。 (例如 : SpeechRecognitionResult.isFinal 特性為 false.)
* SpeechRecognition.maxAlternatives
設定每個結果中 SpeechRecognitionAlternative 物件的最大數量。預設值為 1。




以上資料來源:[https://developer.mozilla.org/zh-TW/docs/Web/API/SpeechRecognition](https://developer.mozilla.org/zh-TW/docs/Web/API/SpeechRecognition)


  
## 新增修改的部分

無



