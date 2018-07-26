

# 練習筆記

記錄實踐過程中的學習心得以及做了什麼新增和修改的部分  



## 學習心得

學習複製陣列與物件的淺層和深層複製，運用以下:

* array.slice() 擷取陣列
* array.concat() 連接陣列
* es6-Array.from() 建立新陣列
* es6-[...array] 淺層複製物件
* es6-{...obj} 淺層複製物件
* es6-Object.assign() 淺層複製物件
* JSON.parse() 將字串轉物件
* JSON.stringify() 將物件轉字串



### Array.from()

Array.from() 方法會從類陣列（array-like）或是可迭代（iterable）物件建立一個新的 Array 實體。

```js
let newArray = Array.from(arrayLike,mapFn,thisArg)
```

* arrayLike
被轉換至陣列的類陣列獲釋可迭代的物件。
* mapFn 可略
Map 函式走訪陣列中的每一個元素。
* thisArg 可略
mapFn 函式執行時的 this 對象

```js
Array.from('foo'); 
// ["f", "o", "o"]

// 使用箭頭函式作為 map 函式來
// 操作元素
Array.from([1, 2, 3], x => x + x);      
// [2, 4, 6]

// 產生數值序列
// 因為陣列中的每個位置都會被初始化為 `undefined`，
// 下方 `v` 會是 `undefined`
Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]
```

以上資料來源:[https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/from](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

### 淺層與深層複製物件

以下兩種方式皆只能複製第一層的淺層物件，
若有第二層物件，一旦改動，舊物件與新物件的資料都會更改。
* es6-{...obj} 淺層複製物件
* es6-Object.assign(obj) 淺層複製物件

若要深層複製物件，有以下兩種方式，
使用JSON的方式蠻輕易，但function是無法被複製的，
另外lodash的cloneDeep方法，需要引入lodash，
但範例中作者有註明要深思再使用。
* JSON.parse(JSON.stringify(obj)))
* lodash-cloneDeep


```js
 const person = {
       name: 'Wes Bos',
       age: 80,
       color:{dark:{code:40}}
    };

 let newPerson = {...person};
     newPerson['gender']='male'; //有效，只改動newPerson
     newPerson.color.dark.code = 60; //無效

 let try1 = Object.assign({},person,{'like':'eating'})
     try1.color.dark = 'blue'; //有效，改動所有
     try1.age=75; //有效，只改動try1 

 person.color.dark = 'pink'; //有效，改動所有

 let try2 = JSON.parse(JSON.stringify(person));
     try2.color.dark = 'brown'; //有效，只改動try2

```

 
## 新增修改的部分

無



