const menuBtn  = document.querySelector(".menu-btn");
const navMenu  = document.querySelector(".menu");

// click listeners for small screen size menu. The virtical one 
document.querySelectorAll(".menu").forEach(n => n.addEventListener("click", () => {
    navMenu.classList.remove("active");
}))

// works for three bars on top right when using small display screen
function clickFunction() {
    navMenu.classList.toggle("active");
}