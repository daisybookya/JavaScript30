

# 練習筆記

記錄實踐過程中的學習心得以及做了什麼新增和修改的部分  



## 學習心得

自訂通關密語，做出遊戲中輸入按鍵會出現特效的偵測。

* array.splice()
* array.push()
* array.join()
* array.includes()
* 監聽事件-keyup的運用


### splice() 補充

splice的特性為若第一組參數start為負數，則從最後面開始數
而範例中解答，第一組參數為(-secretCode.length - 1)，
直接設為0，也是同樣可行的，直接刪除陣列第一個。

-splice()操作是直接改變原陣列

```js
array.splice(start,deleteCount,array);
//start-'開始的參數'
//deleteCount-'要刪除的數量'
//array-'要在陣列中放入的新陣列'
```
* start
陣列中要開始改動的元素索引（起始為 0）。若索引大於陣列長度，則實際開始的索引值會被設為陣列長度。若索引為負，則會從陣列中最後一個元素開始往前改動（起始為 -1）且若其絕對值大於陣列的長度，則會被設為 0。

* deleteCount 
一個表示欲刪除的原陣列元素數量的整數。
若省略了 deleteCount，或假如其值大於 array.length - start（也就是 deleteCount 大於 start 算起的剩餘元素數量），則所有從 start 開始到陣列中最後一個元素都會被刪除。
若 deleteCount 為 0 或是負數，則不會有元素被刪除。 因此，你應該給定至少一個欲加入的新元素。
 
* array
從 start 開始，要加入到陣列的元素。 如果你沒有指定任何元素，則 splice() 只會依照 start 和 deleteCount 刪除陣列的元素。


以上資料來源:[https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/splice](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

### includes() 補充

搜尋字串的方式有很多種，範例中使用了includes()直接方便驗證。

-includes()直接回傳true/false

```js
array.includes(searchElement,fromIndex)
//searchElement-欲搜尋的字串或數字
//fromIndex-設定索引值開始搜尋
```
* searchElement
要搜尋的元素

* fromIndex
要於此陣列中開始搜尋 searchElement 的位置。如為負數值，則自 array.length - fromIndex 開始向後搜尋。預設值為 0。

以上資料來源:[https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/includes](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
 
## 新增修改的部分

* 修改splice方法第一組參數(-n-1)改為0



