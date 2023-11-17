let date = document.querySelector(".date");

let d = new Date();
let year = d.getFullYear()
date.innerHTML=year;
console.log(year)

let links = document.querySelector(".links");
let button = document.querySelector(".icon-hamburger");

button.addEventListener("click" , ()=>{
    links.classList.toggle("showLinks")
})
