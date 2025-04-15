// // // // // // // Arrays --> Collections of items
// // // // // // //Create array

// // // // // let marks=[67,99,98,78,68];
// // // // // console.log(marks);
// // // // // console.log(marks.length);


// // // // // let heroes =["spyderman","ironman"];
// // // // // console.log(heroes);


// // // // // // Arrays index
// // // // // console.log(marks[0]);
// // // // // console.log(marks[2]);

// // // // // //updation of array                /// Strings--> immutable
// // // // // console.log(marks[0]=80);          /// array--> mutable
// // // // // console.log(marks[4]=40);


// // // // // // Looping over array


// // // // let heroes = ["ironman","thor","hulk","shaktiman","spiderman","antman"];

// // // // // for(let i=0;i<heroes.length;i++){
// // // // //     console.log(heroes[i]);
// // // // // }


// // // // //for-of loop

// // // // for(let hero of heroes){
// // // //     console.log(hero);
// // // // }

// // // // let cities =["delhi","kolkata","mumbai","channai"];
// // // // for(let city of cities){
// // // //     console.log(city.toUpperCase());
// // // // }

// // // let marks=[85,97,44,37,76,60];
// // // let s=0;

// // // for(let val of marks) { // avg marks
// // //     s=s+val;
// // // }
// // // let avg= s / marks.length;
// // // console.log(`avg marks of class =${avg}`);



// // // Discount items 

// // let items=[250,645,300,900,50];

// // let idx=0;
// // for(let val of items){
// //     console.log(`Value at index ${val}`);
// //     let offer = val /10;
// //     items[idx]=items[idx]-offer;
// //     console.log(`Value after offer =${items[idx]}`);
// //     idx++;
// // }


// // Arrays methods

// //Push()]-->add items at end

// let foodItems=["mango","lichi","potato","apple"];
// foodItems.push("chhips","burger","pizza");
// console.log(foodItems);

// let deletedItem=foodItems.pop(); //pop()-->deleted items from end
// console.log(foodItems);
// console.log("deleted",deletedItem);

// console.log(foodItems.toString()); //toSstring()--> convert into String type

