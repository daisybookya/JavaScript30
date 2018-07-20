

# 練習筆記

記錄實踐過程中的學習心得以及做了什麼新增和修改的部分  


## 學習心得

gallery主要以css flex相關屬性結合transition應用:
 
(最外層container必須設定display:flex;或display:inline-flex; 否則內層css相關屬性都會失效)
* display:flex / display:inline-flex
* flex
* flex-direction 排列方向
* justify-content 水平對齊
* align-items 垂直對齊
* transition
* classList應用
* event:'transitionend'

### css:flex屬性

| 屬性        | 值          | 說明          |
| ------------- |:-------------:| -----:|
| flex      | auto | 此屬性將 flex-grow, flex-shrink, flex-basis合併寫在一起 |
|        | initial      |     |
|    | number(比例)      |      |
|    | none      |      |


### classList應用
基本卻好用的classList methods
  
| methods       | 說明           |
| ------------- |:-------------:| 
| add( String [, String] )     | 增加(直接操作classList) | 
| remove( String [, String] )    | 移除(直接操作classList)      | 
| toggle( String [, force] ) | 如果沒有就新增，如果有就移除(直接操作classList) | 
| contains(string) | 檢測是否包含，返回true/false      | 
| item(number) | 返回元素上指定的第幾個class的名字      | 
   
   
```js
element.classList.add('class');
element.classList.remove('class');
element.classList.toggle('class');
element.classList.contains('class'); //true
element.classList.item('0'); // [0]Index className
```

## 新增修改的部分

無

