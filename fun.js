// DARK MODE TOGGLE
const toggle = document.getElementById("toggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// BUTTON CLICK EFFECT
const btn = document.getElementById("cta");

btn.addEventListener("click", () => {
    btn.innerText = "Loading...";
    setTimeout(() => {
        btn.innerText = "Started!";
    }, 1000);
});

// STICKY NAV EFFECT
window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (window.scrollY > 50) {
        nav.style.background = "black";
    } else {
        nav.style.background = "transparent";
    }
});