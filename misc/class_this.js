// 类的this绑定
class Foo {
    constructor(name){
      this.name = name
    }
    display(){
      console.log(this);
    }
  }
var foo = new Foo('coco');
foo.display(); // coco

// 下面例子类似于在 React Component 中 handle 方法当作为回调函数传参
var display = foo.display;
display() // TypeError: this is undefined


// 类的this绑定-构造方法静态绑定
class Foo1 {
    constructor(name){
        this.name = name
        this.display = this.display.bind(this); // 构造方法
    }
    display(){
        console.log(this);
    }
}
var foo = new Foo1('coco');
foo.display(); // coco
var display = foo.display;
display(); // coco


class Foo2 {
  constructor(name){
      this.name = name
  }
  display(){
      console.log(this);
  }
}
// 类的this绑定-非构造方法绑定
var foo = new Foo2('coco');
var display = foo.display.bind(foo);
display(); // coco

// 测试绑定是否一直都有效-不是一直有效
var display = foo.display;
display(); // coco

// 测试绑定是否一直都有效-本质是将一个函数变成了一个成员方法
var limix = {
  name: "limix"
}
var display = foo.display.bind(limix)
display(); // coco