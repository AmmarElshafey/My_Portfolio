
// typing animation
document.addEventListener("DOMContentLoaded", function () {

  new Typed("#typing", {
    strings: [
      "Software Engineer",
      "Frontend Developer",
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });

});

// Scroll BTN ---------------
let btn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function(){

if(window.scrollY > 200){
  btn.classList.remove("d-none");
}else{
  btn.classList.add("d-none");
}

});
btn.addEventListener("click", function(){
window.scrollTo({
  top: 0,
  behavior: "smooth"
});

});
