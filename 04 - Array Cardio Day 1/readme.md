

# 練習筆記

記錄實踐過程中的學習心得以及做了什麼新增和修改的部分 
本次挑戰從console查看


## 學習心得

* 資料搜尋整合常用到的:
* filter()
* map()
* sort()
* reduce()


#### filter()資料過濾

1.過濾出生在1500年代的inventors

```js
let answer = inventors.filter(function(item,index,array){
        return 設定條件;
    });
```
#### map()整合資料
2.結合inventors的first 與 last names整合成array

```js
let answer = inventors.map(function(item,index,array){
        return 設定條件;
    });
```
#### sort()排列資料
3.排列inventors的年齡，從老到年輕的排序
5.排列inventors活的年紀長短
7.依照inventors的last name字母排列

```js
let answer = inventors.sort(function(a,b){
        return 設定條件;
    });
```
#### reduce()累加資料
4.inventors每個人累加，所有人總共活了幾年
8.從交通工具data處理各種類的數量

```js
let answer = data.reduce(function(accumlator, currentValue,         currentIndex, array){
        return 設定條件;
    },number/obj/array);
```

## 新增修改的部分

* 每題以es6寫法再練習一次
* 第7題以indexOf()找出last name字元位置後，再以charAt()轉換去排列字母順序

