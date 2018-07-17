

# 練習筆記

記錄實踐過程中的學習心得和自己多做了什麼新增和修改的部分 


## 學習心得

* input type:range/color應用方式
* input change/mousemove(使用者移動物件時才會同步改變)事件監聽使用
* css 原生變數var()的使用方式(取代sass)
* forEach應用

### css 變數方法補充

* 命名變數前綴一定要加--(sass則是$)
* 可以在:root{--main-color: #369;}命名變數，或是各個tag/class命名變數h1{--main-color: #369;} / .p{--main-color: #369;}
* 再把變數放進var()裡使用-> color:var(--main-color);
* 可以依照繼承特性去使用變數->color:var(--main-color);@media (min-width: 1024px) {h1{--main-color: #000;}}



## 新增修改的部分

* 新增旋轉圖片應用

