window.addEventListener("load", () => {
    let navul = document.getElementById("navul");
    document.getElementById("nav-hamburger").addEventListener("click", () => {
        navul.classList.toggle("show-nav")
    })
})