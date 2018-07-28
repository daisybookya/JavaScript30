
## 學習心得

了解addEventListener參數應用，多層次氣泡捕捉差異 

* options:capture
* options:once
* e.stopPropagation() 停止氣泡捕捉


### 參數介紹

div紫色'one'(最外層) > div粉色'two'(中間層) > div橘色'three'(最內層)

* options:once -> true / false
設定true的話，只觸發一次後，會自動移除監聽事件
 
```js
 button.addEventListener('click', () => {console.log('Click!!!')}, 
                                        {once: true});
```
  
* options:capture -> true / false
設定true:會由外而內執行觸發事件，順序為div紫色(最外層) > div粉色 > div橘色(最內層)
  
設定false:會由內而外執行觸發事件，順序為div橘色(最內層) > div粉色 > div紫色(最外層)

```js
 divs.forEach(div => div.addEventListener('click', logText, {
                                            capture: false}));
```

* e.stopPropagation() 停止氣泡捕捉

添加e.stopPropagation()後，點擊div會各個觸發，不會點到其他層，以範例來說:點橘色(最內層)並不會觸發粉層、紫層(最外層)
  
## 新增修改的部分

無






