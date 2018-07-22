

# 練習筆記

記錄實踐過程中的學習心得以及做了什麼新增和修改的部分  


## 學習心得

簡單的搜尋關鍵字列表應用
* fetch api
* RegExp正規式應用
* replace()
* filter()
* map()
* 監聽事件keyup應用

### fetch api

fetch 和 jQuery.ajax() 有兩個主要的差異:

* fetch() 回傳的 promise 物件, resolve 和 reject 的使用方式有差異, 當遇到 HTTP Status 404, 500 時會使用 resolve 但會將 status 的值從 ok 變為 false， reject 只有在網路發生錯誤或是任何會中斷網路請求時才會使用。
* fetch 預設上不傳送或接收任何 cookies，如果網站依賴 session 會導致請求回傳未經認證，需要使用 cookies 必須額外設定 credentials。

```js
fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
```
  
Use fetch() to POST JSON-encoded data.
```js
var url = 'https://example.com/profile';
var data = {username: 'example'};

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
```

以上資料來源:[https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API/Using_Fetch](https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API/Using_Fetch)

### 正規式Regular Express補充說明

基本及常見使用方式
```js
var pattern = new RegExp('JavaScript');

var pattern = /JavaScript/;
```
* i => 不分大小寫  
* g => 全部比對，而不是搜尋到就停止
* m => 多行比對

## 新增修改的部分

* 新增簡單的搜尋類別(全部/city/state)，供使用者分類搜尋


