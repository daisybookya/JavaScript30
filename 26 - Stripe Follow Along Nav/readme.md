
## 學習心得

網站中常見特效: 滑鼠移到選單時，下方浮現不同內容的次選單。

* getBoundingClientRect() 取得元素大小及座標
* element.classList.contains
* setTimeout
* 監聽事件'mouseenter/mouseleave'運用


### 範例解題思路

元素若display:none隱藏的話是無法偵測大小和距離，滑動到的li必須先add class'trigger-enter'，再用setTimeout新增class'trigger-enter-active'

-> 使用getBoundingClientRect() 抓取次選單的長寬和XY 扣掉上方選單Nav的XY 才會顯示正確距離

-> 設定白背景style長寬及位置 -> 設定監聽事件'mouseenter/mouseleave'


  
## 新增修改的部分

修改的部分是，自己的作法是不使用setTimeout






