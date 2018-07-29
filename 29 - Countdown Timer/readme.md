
## 學習心得

製作生活中常見的倒數計時

* setInterval() 按照指定毫秒，直到清除前不停地調用函數
* clearInterval() 清除setInterval
* new Date.now() 回傳自 1970/01/01 00:00:00 UTC 起經過的毫秒數
* new Date.getHours() 返回現在的小時值
* new Date.getMinutes() 返回現在的分鐘值
* form.reset() 清空form表單



### 範例解題思路

運用setInterval()，由(設定的時間-扣掉現在的時間)來倒數，時間到再以clearInterval()清除


  
## 新增修改的部分

自己的作法是:

運用setTimeout()，設定的時間次次遞減，時間到再以clearTimeout()清除






