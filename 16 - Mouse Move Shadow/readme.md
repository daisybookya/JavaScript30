
# 學習心得

滑鼠移動，文字陰影rgb分散也跟著浮動的特效。 

* ES6解構賦值
* Math.round() 回傳四捨五入的近似值
* css text-textShadow (x,y,blur,color))


## ES6解構賦值

在賦值的左側是宣告要從來源變數接收解開的值之變數

這類似於 Perl 和 Python。

```js
//陣列指派
var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y); // 1
console.log(z); // 2
   
var a, b;
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2
  
var a = 1;
var b = 3;
[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

//物件解構
var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); // 42
console.log(q); // true
```


以上資料來源:[https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Math.round()

回傳四捨五入的近似值

```js
x = Math.round(50.49); //50

x = Math.round(50.5); //51

x = Math.round(-50.5); //50

x = Math.round(-50.51); //51


```


  
## 新增修改的部分

無



