// Learning JavaScript fundamentals!
console.log("Hello, World!");
console.log(23 + 97);
console.log((4 + 6 + 9) / 77);
let a = 10;
console.log(a);
console.log(9 * a);
let b = 7 * a;
console.log(b);
const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(percentage);

function add7(num) {
  return num + 7;
}

console.log(add7(1));

let multiply = function (num1, num2) {
  return num1 * num2;
};

console.log(multiply(5, 5));

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize("hello World!"));

let lastLetter = (str) => str.charAt(str.length - 1);

console.log(lastLetter("abcd"));

// Learning about DOM MANIPULATION

let container = document.querySelector("#container");
let redP = document.createElement("p");
redP.textContent = "Hey I'm red!";
redP.style.cssText = "color: red";
container.appendChild(redP);

let blueHeader = document.createElement("h3");
blueHeader.textContent = "I'm a blue h3!";
blueHeader.style.cssText = "color: blue";
container.appendChild(blueHeader);

let div = document.createElement("div");
div.style.cssText = "border: 1px solid black; background-color: pink";
container.appendChild(div);

let divH1 = document.createElement("h1");
divH1.textContent = "I'm in a div";
div.appendChild(divH1);

let divP = document.createElement("p");
divP.textContent = "ME TOO!";
div.appendChild(divP);
