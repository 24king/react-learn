// 场景一: 动态绑定:global
function display(){
    // this默认指向了全局变量
    console.log(this);
}
display();


// 因为obj会创建一个新的作用域,this便会绑定到obj
var obj = {
    name: 'coco',
    display: function(){
      console.log(this); // this指向obj
    }
};
obj.display(); // coco


// 场景二: 动态绑定: outerDisplay的作用域
var name = "oh! global";
var outerDisplay = obj.display;
outerDisplay(); // oh! global


// 动态绑定: 回调 -> 传递的是一个函数,函数执行时动态绑定作用域
function handleClick(callback) {
    callback()
}
var name = 'oh! global';
handleClick(obj.display);
// oh! global



// 显示绑定
var name = "oh! global";
obj.display = obj.display.bind(obj); 
var outerDisplay = obj.display;
outerDisplay();
// coco



