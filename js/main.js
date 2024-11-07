let links = document.querySelectorAll('.link')


links.forEach((e)=>{
  e.addEventListener('click',()=>{
    links.forEach((e)=>{e.classList.remove('active')})
    e.classList.add('active')
  })
})

let drop = document.querySelectorAll('.drop');

drop.forEach((e)=>{
  e.addEventListener('click',()=>{
    e.classList.toggle('active');
  })
})


let header = document.querySelector(".header");
window.addEventListener('scroll',()=>{
  if(window.scrollY >= 100){
    header.classList.add('color');
  }else{
    header.classList.remove('color');
  }
})

let homeMedia = document.getElementById('homeMedia');
if(homeMedia){
  homeMedia.addEventListener('click',()=>{
    homeMedia.classList.toggle('active');
  })
  
  if(window.innerWidth <= 421){
    homeMedia.addEventListener('mouseleave',()=>{
      homeMedia.classList.remove('active');
    })
  }
}



let nav = document.querySelector(".nav");
let menu = document.querySelector(".menu");

nav.style.transition = "left 0.5s ease-in-out, display 0.5s ease-in-out";

menu.addEventListener("click", () => {
  if (nav.style.left === "0px") {
    nav.style.left = "-800px";
    setTimeout(() => {
      nav.style.display = "none";
    }, 500);
  } else {
    nav.style.display = "flex";
    setTimeout(() => {
      nav.style.left = "0px";
    }, 10);
  }
  menu.classList.toggle("active");
})