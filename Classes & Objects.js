// Prototypes in JS 
// A JS object is an entity having state and behavior( properties and method)
// JS objects have a special property called prototype.
// We can set prototype using__proto__


// const employee ={
//     calcTax() {
//         console.log("tax rate is 10 %");
//     },
// };

// const karanArjun ={
//     salary : 50000,
//     calcTax() {
//         console.log("tax rate is 20 %");   // if object & prototype have same methhod, object's method will be used
//     },
// };

// karanArjun.__proto__=employee;



// CLASSES IN JS

// class is a program code template for creating objects.
// those objects will have some state (variables) & some behaviour (functions) inside it.



// class Toyotacar{
//     constructor(brand,milage) {   // cteating costom constructor
//         console.log("crating new object");
//         this.brand = brand;
//         this.milage = milage;
//     }
//      start(){
//         console.log("start");
//      }

//      stop(){
//         console.log("stop");
//      }

//     //  setBrand(brand){
//     //     this.brandName = brand;
//     //  }
// };

// let fortuner = new Toyotacar("fortuner", 15);
// console.log(fortuner);
// // fortuner.setBrand("fortuner");
// let lexus = new Toyotacar("lexus",20);
// console.log(lexus);
// lexus.setBrand("lexus");

// Constructor...

// Constructor() method is:
// * autometically invoked by new
// * initializes objects





//INHERITANCE...

// Inheritance is passing down properties & methods from parent class to child class.

// class Parent {

// }
// class Child extends Parent {

// }

// if child & parent have same method, child's method will be used [Method Overriding]

// class Parent {
//     hello() { 
//         console.log("hello");
//     }
// }

// class Child extends Parent {}
// let obj= new Child();


// class Person {
//     constructor(){
//         console.log("enter parent constructor");
//         this.species = "homo spaience";
//     }
//     eat(){
//         console.log("eat");
//     }

//     sleep() {
//         console.log("sleep");
//     }

//     work(){
//         console.log("do nothing");
//     }
// }

// class Engineer extends Person {
//     constructor(branch){
//         console.log(" enter child constructor");
//         super(); // to nvole perent class connstructor
//         this.branch = branch;
//         console.log(" exit child constructor");
//     }
//     work() {
//         console.log("Solve problrms , build something");
//     }
// }

// let arnab =  new Engineer("chemical Engg");


// Super Keyword 
// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.



// ERROR handling

// try-catch..

// let a=5;
// let b=10;

// console.log("a=",a);
// console.log("b=",b);
// console.log("a+b=",a+b);
// console.log("a+b=",a+b);
// try {
//     console.log("a+b=",a+c);// error
// } catch(err) {
//     console.log(err);
// }

// console.log("a+b=",a+b);
// console.log("a+b=",a+b);
// console.log("a+b=",a+b);


