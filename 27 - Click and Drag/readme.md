
## 學習心得

網站中常見特效: 不使用drag api，滑鼠拖曳時內容跟著移動。

* element.scrollLeft (卷軸可移動)元素的水平方向卷軸位置
* 監聽事件'mouseup/mousedown/mousemove/mouseleave'運用


### 範例解題思路

監聽事件'mousedown'即滑鼠按下時，設置startX(滑鼠x位置)、scrollLeft(卷軸已經拉動的位置)、判斷是否拖曳的變數isDown
-> 監聽事件'mousemove'即滑鼠移動時，設置x = (e.pageX現在滑鼠x位置)-(slider.offsetLeft為slider離瀏覽器左邊的距離)，設置移動距離walk = (x - startX當初滑鼠按下的位置)*3;
-> slider.scrollLeft = scrollLeft(前次卷軸已經拉動的位置) - walk(現在拉動的距離)
-> 監聽事件'mouseleave/mouseup'即滑鼠離開slider元素/滑鼠放開時，isDown = false，同時移除class-'active'。


  
## 新增修改的部分

無






