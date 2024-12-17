//let headingElements = document.getElementById("page1");
//console.log(headingElements);

//let paragraph = document.getElementById("text2");
//paragraph.innerHTML = '<strong> This is a new paragraph </strong>';
//paragraph.innerTEXT = '<strong> This is a new paragraph </strong>';

//function changeStyle() {
// const divElement = document.getElementById("div1");
// divElement.style.backgroundColor = "yellow";
//}



//let paragraph = document.getElementById("content");

//function handleClick() {
// paragraph.classList.add("red-text");
// console.log(paragraph.classList);
// console.log(paragraph.classList[2]);
//}

//let image = document.getElementById("image");

//function changeImage() {
// image.setAttribute("src", "pexels-edouard-matte-50967295-14277667.jpg");
//image.setAttribute("alt", "other picture");
//}


//let colorElements = document.getElementsByClassName("bg-color");

//colorElements[0].style.border = "2px solid green";

//for (let el of colorElements) {
//    el.style.backgroundColor = "pink";
//}

//let allParagraphs = document.getElementsByTagName("p");
//for (let p of allParagraphs) {
//  p.style.color = "red";
//}


//let firstClass = document.querySelector("ul > .lesson");

//firstClass.classList.add("blue-outline");

//let onlineClasses = document.querySelectorAll(".lesson.online");

//for (let cls of onlineClasses) {
// cls.classList.add("yellow-highlight");
//}

let headingElement = document.querySelector("h1");
headingElement.style.border = "2px solid blue";

let parentOfHeading = headingElement.parentElement;
parentOfHeading.style.border = "4px dashed orange";

let paragraphOne = headingElement.nextElementSibling;
paragraphOne.style.border = "3px dotted green";

let paragraphTwo = headingElement