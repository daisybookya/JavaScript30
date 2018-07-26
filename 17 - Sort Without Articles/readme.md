

# 練習筆記

記錄實踐過程中的學習心得以及做了什麼新增和修改的部分  



## 學習心得

網站中常見的排序應用，除掉特定開頭字母排列清單。

* RegExp正規式應用
* trim() 刪除空白
* sort() 資料排序
* map()



### trim()

trim() 方法会从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR）。

```js
var orig = '   foo  ';
console.log(orig.trim()); // 'foo'
  
var orig = 'foo    ';
console.log(orig.trim()); // 'foo'
```

以上資料來源:[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)

  
## 新增修改的部分

無



