//Bars uchun
let bars = document.querySelector(".bars");
let menu = document.querySelector(".menu");
let closeBtn = document.querySelector(".close-btn");

bars.addEventListener("click", function () {
    menu.classList.add("show-menu");
});

closeBtn.addEventListener("click", function () {
    menu.classList.remove("show-menu");
});
// Carousel uchun
let carouselInner = document.querySelector(".carousel__inner")
let dots = document.querySelectorAll(".dot")
let current = 0

function changeSlider() {
    carouselInner.style.transform = `translate(-${current * 100}%)`
    dots.forEach(function (dot) {
        dot.classList.remove("active")
    })
    dots[current].classList.add("active")
}
dots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
        current = index
        changeSlider()
    })
})
setInterval(function () {
    current++
    if (current === dots.length) {
        current = 0
    }
    changeSlider()
}, 3000)
// Modal uchun
let modal = document.querySelector("#modal")
let modalClose = document.querySelector("#modalClose")
let modalBtn = document.querySelector("#modal-btn")
modalBtn.addEventListener("click", (e) => {
    e.preventDefault()
    modal.classList.add("show-modal")
})
modalClose.addEventListener("click", (e) => {
    modal.classList.remove("show-modal")
})
//login uchun

let loginUp = document.querySelector("#loginUp")
let loginClose = document.querySelector("#loginClose")
let loginBtn = document.querySelector("#login-btn")

loginBtn.addEventListener("click", (e) => {
    e.preventDefault()
    loginUp.classList.add("show-login")
})

loginClose.addEventListener("click", (e) => {
    loginUp.classList.remove("show-login")
})
//sign up ga otish uchun
let goModal = document.querySelector("#goModal")
let goLogin = document.querySelector("#goLogin")
goModal.addEventListener("click", () => {
    modal.classList.remove("show-modal")
    loginUp.classList.add("show-login")
})

goLogin.addEventListener("click", () => {
    loginUp.classList.remove("show-login")
      modal.classList.add("show-modal")
})