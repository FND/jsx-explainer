import render from "./template";

let el = render("Hello World", "lorem ipsum");
console.log(el);

document.body.appendChild(el);
