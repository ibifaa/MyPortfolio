let date = document.querySelector(".date");
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelector(".links ");
let logo = document.querySelector(".logo ");
// let name = document.querySelectorAll(".name")

let d = new Date();
let year = d.getFullYear()
date.innerHTML=year;
console.log(year)

let links = document.querySelector(".links");
let button = document.querySelector(".icon-hamburger");
let closeBtn = document.querySelector(".close");

button.addEventListener("click" , ()=>{
    links.classList.toggle("showLinks")
})

closeBtn.addEventListener("click" , ()=>{
    links.classList.toggle("closeLinks")
})


window.addEventListener("scroll" ,()=>{
    if(window.scrollY>0){
        navbar.style.backgroundColor = "goldenrod";
        navLinks.style.color = "white";
        logo.style.backgroundColor ="black"
        logo.style.color ="goldenrod"
    }
})

document.addEventListener("DOMContentLoaded", function(){
    const names = document.querySelectorAll(".name")
    let index = 0;

    function displayNextName(){
        if(index <names.length){
            names[index].style.opacity = 1;
            index++;
            setInterval(displayNextName, 2000);
        }
    }

    displayNextName();
});