

# 練習筆記

記錄實踐過程中的學習心得以及做了什麼新增和修改的部分  



## 學習心得

網站中常見特效應用:滑鼠移到哪，區塊跟著浮動到特定區域。

* getBoundingClientRect() 取得元素大小及座標
* forEach()
* css transform-translate(x,y)
* 監聽事件'mouseenter'

## getBoundingClientRect()

返回元素的大小及其相对于视口的位置。

返回值是一个 DOMRect 对象，这个对象是由该元素的 getClientRects() 方法返回的一组矩形的集合, 即：是与该元素相关的CSS 边框集合 。

DOMRect 对象包含了一组用于描述边框的只读属性——left、top、right和bottom，单位为像素。除了 width 和 height 外的属性都是相对于视口的左上角位置而言的。

```js
rectObject = object.getBoundingClientRect();
```
空边框盒（译者注：没有内容的边框）会被忽略。如果所有的元素边框都是空边框，那么这个矩形给该元素返回的 width、height 值为0，left、top值为第一个css盒子（按内容顺序）的top-left值。

当计算边界矩形时，会考虑视口区域（或其他可滚动元素）内的滚动操作，也就是说，当滚动位置发生了改变，top和left属性值就会随之立即发生变化（因此，它们的值是相对于视口的，而不是绝对的）。如果你需要获得相对于整个网页左上角定位的属性值，那么只要给top、left属性值加上当前的滚动位置（通过window.scrollX和window.scrollY），这样就可以获取与当前的滚动位置无关的值。

以上資料來源:[https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)

## 監聽事件'mouseenter'與'mouseover'

兩者差異為:

* 是否支持冒泡
* 事件的触发时机

由于mouseenter不支持事件冒泡，导致在一个元素的子元素上进入或离开的时候会触发其mouseover和mouseout事件，但是却不会触发mouseenter和mouseleave事件

更多詳細資料，來源:[http://imweb.io/topic/5a2bb4cfa192c3b460fce2b9](http://imweb.io/topic/5a2bb4cfa192c3b460fce2b9)

### 範例解題思路

createElement('span')後再添加至body -> 所有a link監聽事件'mouseenter'

-> getBoundingClientRect() 取得a元素大小及座標+window.scrollX/Y -> 

設定highlight的寬高與位置transform-translate(x,y)


  
## 新增修改的部分

修改的部分是，自己的作法為以下:

html直接新增span -> 所有a link監聽事件'mouseenter' -> 

直接取用內建的e.target.offsetLeft(子元素) + e.target.offsetParent.offsetLeft(父元素)，寬高為e.target.offsetWidth/e.target.offsetHeight

-> 設定highlight的寬高與位置transform-translate(x,y)






