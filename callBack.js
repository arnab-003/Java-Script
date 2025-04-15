// Asynchronous Programming --> due to synchronus programming , sometimes imp instructions get blocked due to some previous instructions, wich causes a delay in the UI.
// Asynchronus code execution allows to execute next instructions immediately and doesn't block the flow.

// console.log("one");
// console.log("two");
// setTimeout(() => { // time out
//     console.log("hello");
// },4000);
// console.log("three");
// console.log("four");


// Call-Back --> A function is pass another function as ann argument

// const hello =() => {
//     console.log("hello");
// };
// setTimeout(hello,3000);

//Callback Hell --> Nested callbacks stacked below one another forming a pyramid structure.

//nesting

// let age=19;
// if(age>=18){
//     if(age>=60){
//         console.log("senior");
//     }else {
//         console.log("middle");
//     }
// } else {
//     console.log("child");
// }



// function getData(dataId, getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }

// //callback Hell problem
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4,()=>{

//             });
//         });
//     });
// });

//Promises --> Promise is for 'eventual" completion of task. it is an object in JS.
// It is a solution to callback hell.

// let promise = new Promise ((resolve , reject) =>{
//     console.log("I am a promise");
//     reject("err");
// });

// .then--> after full filles promise
// .catch--> after promise gets rejects

// const getPromise =()=> {
// return new Promise ((resolve , reject) =>{
//     console.log("I am a promise");
//     // resolve("success");
//     reject("error");
// });
// };


// let promise = getPromise();
// promise.then(()=>{
//     console.log("promise fulfilled");
// });

// promise.catch(()=>{
//     console.log("promise rejected");
// });


//promise chain

// function asyncFunc1() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data1");
//             resolve("success");
//         },4000);
//     });
// }


// function asyncFunc2() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("some data1");
//             resolve("success");
//         },4000);
//     });
// }

// console.log("Featching data1....")
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
//     console.log("Featching data2...");
//     let p2 = asyncFunc2();
//     p2.then((res)=>{}) // promise chain
// });



// Async-Await
// async function always returns a promise.

// async function hello(){
//     console.log("hello");
// }

// await pauses the execution of its surrounding async function unntil the promise is settled

// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout( () =>{
//             console.log("weather data");
//             resolve(200);
//         } , 2000);
//     });
// }

// async function getWeatherData() {
//     await api();
//     await api();
// }




// function getData(dataId, getNextData){
//     return new Promise((resolve, reject)=> {

//         setTimeout(()=>{
//             console.log("data",dataId);
//           resolve("success");
//         },2000);
//     });
// }    

// async function getAllData() {
//     await getData(1);
//     await getData(2);
//     await getData(3);
// }