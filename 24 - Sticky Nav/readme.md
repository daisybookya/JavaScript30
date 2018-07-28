
## 學習心得

網站中常見特效: 當滾動卷軸超出nav範圍，nav浮動置頂 

* getBoundingClientRect() 取得元素大小及座標
* element.offsetTop 元素相對於父元素的距離
* element.offsetHeight 元素高度
* 監聽事件'scroll'運用


### 範例解題思路

以nav的頂點offsetTop為主，一旦監聽事件'scroll'卷軸位置 >= offsetTop則body新增class固定和padding-top


  
## 新增修改的部分

修改的部分是，自己的作法為以下:

以nav的最底位置為主，並應用getBoundingClientRect()與ES6解構賦值抓取data
-> 一旦監聽事件'scroll'卷軸位置 >nav的最底位置則body新增class固定和padding-top






