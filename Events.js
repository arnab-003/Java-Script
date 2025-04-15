// // // The change in the state of an object is known as event.
// // // Events are fired to notify code of "interesting changes" that may affect code execution.


// //  let btn1 = document.querySelector("#btn1");
// // //  btn1.onclick =(e) => {
// // //     console.log(e);
  
// // //  }

// // btn1.addEventListener("click", (evt) =>{
// //     console.log("btn1 was clicked");
// //     console.log(evt);
// //     console.log(evt.type);
// // }
// // );

// //  let div= document.querySelector("div");
// //  div.onmouseover = () => {
// //     console.log('You are inside the div');
// //  }


// //  // Event-object

// //  //it is a special object that has details about the event. All events handlers have access to the event objects properties and methods.



// //  // Event Listeners


// let modeBtn= document.querySelector("#mode");
// let currMode="light";
// modeBtn.addEventListener("click",() => {
//     if(currMode="light"){
//         currMode= " dark";
//         document.querySelector("body").style.backgroundColor ="black";
//     }else{
//         currMode="light";
//         document.querySelector("body").style.backgroundColor ="white";
//     }
//     console.log(currMode);
// });