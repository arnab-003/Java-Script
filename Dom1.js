// // DOM -> When a webpage is loaded , the browser creates a Document Object MOdel(DOM) of the page

// // Selecting with ID--> document.getElementByid("myid");

// // let headings= document.getElementsByClassName("heading-class");
// // console.dir(headings);    // Selecting with class-->document.getElementByClass("myClass")
// // console.log(headings);

// // let parahs= document.getElementsByTagName("p");  
// // console.dir(parahs);   // Selectiong with paragraph--> document.getElementByTagName("p")

// //Query Selector

// let elements=document.querySelector("p");
// console.dir(elements);

// let allEl= document.querySelectorAll("heading-class");
// console.dir(allEl);

// //DOM-Manipulation

// //tagName: returns tag for elements nodes
// //innerText: returns the text content of the elemnt and all its children
// // innerHTML: returns the plain text or HTML contents in the element
// //textContent: returns texual content even for hidden elements





// let div= document.querySelector("div");
// console.dir(div);

// let heading= document.querySelector("h1");
// console.dir(heading);


// let id = div.getAttribute("id");
// console.log(id);

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// console.log(newBtn);



// let div= document.querySelector("div");
// div.after(newBtn);