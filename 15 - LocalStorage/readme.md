

# 練習筆記

記錄實踐過程中的學習心得以及做了什麼新增和修改的部分  



## 學習心得

以to do list清單學習localstorage的運用

* localstorage.getItem() 讀取資料
* localstorage.setItem() 儲存資料
* localStorage.clear() 清空資料
* map() 建立新陣列
* matches() 比對
* JSON.parse() 將字串轉物件
* JSON.stringify() 將物件轉字串


### matches()

回傳true/false。

selectorString可以是className('.color')或tagName('span')

```js
var result = element.matches(selectorString); 
```

### localstorage

HTML5的Storage主要分為兩種：localStorage與sessionStorage，這兩者主要在生命週期上有較明顯的差別，localStorage的生命週期較長，原則上要等到透過Javascript將內容清掉或者使用者清空Cache時才會消失；而sessionStorage則是在Browser/Tab關閉時就會清空。

HTML5的Storage與cookie差別為:
* Cookie在每個HTTP request送出時都會被送到Server端，不管你沒有要用到Cookie中的資訊，在某種程度上會拖慢執行的效能與浪費不必要的網路頻寬
* Cookie送出的資料本身並沒有加密，因此除非我們用SSL一類的技術做加密，否則Cookie中不宜放任何重要的資訊
* Cookies最大才4KB，不可能存太多資料

以上資料來源:[https://dotblogs.com.tw/jimmyyu/2011/03/27/html5-client-storage](https://dotblogs.com.tw/jimmyyu/2011/03/27/html5-client-storage)


#### localstorage methods
  
* getItem() 得到結果為字串，若要使用需轉成js物件，所以用JSON.parse(data);
```js
    let data = JSON.parse(localstorage.getItem('list'));
```
  
* setItem() 若要儲存資料到localStorage需將物件轉字串，所以用JSON.stringify(data);
```js
    localStorage.setItem('list',JSON.stringify(data)));
```
  
* removeItem() 為移除key裡的所有資料
```js
    localStorage.removeItem('list');
```
  
* clear() 清空localstorage所有資料
  
## 新增修改的部分

* 新增刪除個別選項的功能
* 新增清空全部清單的功能



