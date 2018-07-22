

# 練習筆記

記錄實踐過程中的學習心得以及做了什麼新增和修改的部分  
本次挑戰從console查看


## 學習心得

資料搜尋整合常用到的:
* some()
* every()
* find()
* findIndex()


### some()資料過濾

確認是否people中至少有一人大於等於 19歲?

```js
let answer = people.some(function(item,index,array){
        return 設定條件;
    });
//只要其中一個符合條件就會回傳true
```
 
### every()資料過濾

確認是否people每個人大於等於 19歲?

```js
let answer = people.every(function(item,index,array){
        return 設定條件;
    });
//只要其中一個沒有符合條件就會回傳false
```
 
### find()資料過濾

找到comments中id為823423

```js
let answer = people.find(function(item,index,array){
        return 設定條件;
    });
//就算找到三個符合條件的，也只會回傳一個(第一個正確)的值
```
### findIndex()資料過濾

找到comments中id為823423的索引值，並且刪掉該則

```js
let answer = people.findIndex(function(item,index,array){
        return 設定條件;
    });
//就算找到三個符合條件的，也只會回傳一個(第一個正確)的索引值
```
  
## 新增修改的部分

* 每題以es6寫法再練習一次

