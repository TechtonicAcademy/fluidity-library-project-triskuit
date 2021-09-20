let links = document.querySelector(".nav__links");
let icon = document.querySelector(".nav__icon");

icon.addEventListener("click", toggleMenu)

function toggleMenu() {
    links.classList.contains("nav__links--visible") ? links.classList.remove("nav__links--visible") : links.classList.add("nav__links--visible")
}