

# 練習筆記

記錄實踐過程中的學習心得以及做了什麼新增和修改的部分  



## 學習心得

結合canvas做簡單的繪圖畫板

* canvas 線條繪製
* canvas 顏色樣式
* canvas 文字樣式
* canvas 結合監聽事件運用

### canvas基本使用

一開始canvas為空白，程式碼腳本需要先存取渲染環境，在上面繪圖，然後才會顯現影像。<canvas> 素有一個方法(method)叫getContext()，透過此方法可以取得渲染環境及其繪圖函數(function)；getContext()輸入參數只有渲染環境類型一項，像本教學所討論的2D繪圖，就是輸入”2d”。

```js
var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
//canvas一定要getContext()才能渲染畫布
```
### canvas支援替代

因為舊版瀏覽器(特別是IE9之前的IE)不支援{<canvas>}元素，我們應該為這些瀏覽器準備錯誤替代內容。

當不支援<canvas>的瀏覽器看到不認識的<canvas>時會忽略<canvas>，而此時在<canvas>下瀏覽器認識的替代內容則會被瀏覽器解析顯示，至於支援<canvas>的瀏覽器則是會正常解析<canvas>，忽略替代內容。

我們可以準備一段canvas內容的說明文字或canvas繪圖完成後的靜態圖片
  
```js
<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 +0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt=""/>
</canvas>
//不支援canvas的瀏覽器會看到圖片
```
以上資料來源:
[https://developer.mozilla.org/zh-TW/docs/Web/API/Canvas_API/Tutorial/Basic_usage](https://developer.mozilla.org/zh-TW/docs/Web/API/Canvas_API/Tutorial/Basic_usage)
 
## 新增修改的部分

* 新增調整線條顏色飽和度
* 新增調整線條寬度
* 新增關閉線條寬度自動變化

