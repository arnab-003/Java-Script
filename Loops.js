// // For loop
// for(let i=0;i<=5;i++){
//     console.log("Arnab");
// }

// let sum=0;
// for(let i=0;i<=5;i++){
//     sum=sum+i;
// }
// console.log(sum);



//while loop

// let i=1;
// while(i<=5){
//     console.log("arnab");
//     i++;
// }



//Do- While loop

// let i=1;
// do{
//     console.log("Arnab");
//     i++;
// } 
// while(i<=5);



//for-of-loop

// let str="Arnab";
// let size=0;

// for(let i of str){ // iterator --> characters
//     console.log("i=",i);
//     size++;
// }
// console.log("Strings Size=",size);



//For-in-loop (Works upon  objects)


// let STD={
//     name:"Arnab Deb",
//     age: 21,
//     cgpa: 8.5,
//     isPass: true,
// };

// for (let key in STD){
//     console.log("key=",key,"value=",STD[key]);
// }


// print even num 0 to 100

// for(let num=0;num<=100;num++){
//     if(num%2==0){
//         console.log("num=",num);
//     }
// }


// game 2


// let gameNum=Math.floor(Math.random() * 20);

// let userNum = prompt("Guess the game number");

// while(userNum != gameNum){
//      userNum = prompt("you entered the wrong Number , Guess again");
// }

// console.log("Congrats you entered the correct number");