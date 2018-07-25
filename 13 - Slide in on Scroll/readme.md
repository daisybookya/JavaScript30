

# 練習筆記

記錄實踐過程中的學習心得以及做了什麼新增和修改的部分  



## 學習心得

學習網站中常見的卷軸滑到視線焦點時，浮現圖片特效。
主要依據下列屬性作為判斷依據，邏輯思路為:
當slideAt(視線焦點，即現在滑動的位置)滑動到超過圖片一半，卻還未超過圖片底部時，
套用特效加入class-active。

* window.innerHeight 視窗的可見高度
* window.scrollY 卷軸已滑動的垂直元素值(從視窗頂部計算)
* image.height 圖片高度
* element.offsetTop 子元素頂部距離父元素的值(垂直)
* forEach()
* 監聽事件(scroll)的運用


### debounce() 補充

原範例中已經寫好的debounce()，
是由於scroll事件每滑動就會觸發一次，非常耗效能，
因此增加了debounce()，改為20ms觸發一次。
debounce()的編寫運用了以下:

* arguments
* apply()
* setTimeout()
* clearTimeout()

```js
func.apply(thisArg, [argsArray])
```

* thisArg
讓 fun 呼叫時可以視為 this  的值。注意，這可能並不是最後會在方法裡看見的值：如果這是一個在非 non-strict mode 下運作的程式碼，null 及 undefined 將會被全域物件取代，而原始類別將被封裝。
 
* argsArray
一個 array-like object ，定義了 fun 要呼叫的一組參數，如果沒有需要提供，可以傳入 null 或 undefined 。從 ECMAScript 5 開始，這些參數不僅可以是泛型的 array-like object ，而不一定要是一組陣列。

以上資料來源:[https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/apply](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)


 
## 新增修改的部分

* 修改卷軸滑到圖片頂點(原範例解答為:滑到超過圖片一半)即浮現
* 新增簡易的lazy load功能，運用了getAttribute()/setAttribute()/監聽事件(load)



