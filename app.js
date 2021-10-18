const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video");

btn.addEventListener("click", function() {
    if (!btn.classList.contains("slide")) {
        btn.classList.add("slide")
        video.pause()
    }
    else {
        btn.classList.remove("slide")
        video.play()
    }
})

const toggleBar = document.getElementsByClassName("toggle-bar")[0];
const navLink = document.getElementsByClassName("nav-link")[0];


toggleBar.addEventListener("click", () => {
    navLink.classList.toggle("active")
})
