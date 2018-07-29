
## 學習心得

製作獨立bar條滑動調整播放速率

* element.offsetTop 元素上方離父元素的距離
* element.offsetHeight 元素高度
* video.playbackRate 設置或返回速度


### 範例解題思路

bar條 = ((e.pageY- el.offsetTop)/el.offsetHeight) * 100%

速率顯示換算，先預設倍速最大為max=4,最小為min=0.4:

playbackRate = bar條比例 * (max-min) + min


  
## 新增修改的部分

自己的作法是:

bar條 = e.offsetY / el.offsetHeight * 100%;






