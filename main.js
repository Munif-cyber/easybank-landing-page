const menu= document.querySelector(".menu");
const navi = document.querySelector(".ul");
const blue = document.querySelector(".cover");
const hamb = document.querySelector("#menu-open");
const clos = document.querySelector("#menu-close");

menu.addEventListener("click", function(){
    navi.classList.toggle("open");
    blue.classList.toggle("open");
    clos.classList.toggle("open");
    hamb.classList.toggle("open");

});
