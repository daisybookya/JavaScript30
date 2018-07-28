
# 學習心得

網頁語音 API-speechSynthesis結合textarea手動輸入，學習平常不太使用的語音應用。

* speechSynthesis 語音物件
* speechSynthesis.getVoices() 取得語音列表
* speechSynthesis.speak() 播放語音
* speechSynthesis.cancel() 取消播放
* 監聽事件'voiceschanged'
* find()
* filter()



## 解題思路

sever端準備好即觸發監聽事件'voiceschanged'觸發populateVoices()

-> 取得voices列表再過濾en語系的語音列表 -> map()整理塞入options

-> voicesDropdown和options監聽事件'change'改變即設定語音選項

-> 設定監聽speak/stop按鈕


## speechSynthesis methods

* SpeechSynthesis.cancel()
移除所有语音谈话队列中的谈话。
* SpeechSynthesis.getVoices()
返回当前设备所有可用声音的 SpeechSynthesisVoice列表。
* SpeechSynthesis.pause()
把 SpeechSynthesis 对象置为暂停状态。
* SpeechSynthesis.resume()
把 SpeechSynthesis 对象置为一个非暂停状态：如果已经暂停了则继续。
* SpeechSynthesis.speak()
添加一个 utterance 到语音谈话队列；它将会在其他语音谈话播放完之后播放。




以上資料來源:[https://developer.mozilla.org/zh-CN/docs/Web/API/SpeechSynthesis](https://developer.mozilla.org/zh-CN/docs/Web/API/SpeechSynthesis)


  
## 新增修改的部分

無



