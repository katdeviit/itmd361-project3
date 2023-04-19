let imgs = [];
let activeIndex = 0;

function next() {
    activeIndex++;
    if(activeIndex >= imgs.length) {
        activeIndex = 0;
    }
    updateImgs();
}

function prev() {
    activeIndex--;
    if(activeIndex < 0) {
        activeIndex = imgs.length - 1;
    }
    updateImgs();
}

function updateImgs() {
    for(let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = i === activeIndex ? "block" : "none";
    }
}


window.addEventListener("load", () => {
    let nextButton = document.getElementById("img-next");
    nextButton.addEventListener("click", next);
    let prevButton = document.getElementById("img-prev");
    prevButton.addEventListener("click", prev);
    let imgSlide = document.getElementById("img-slide");
    for(let img of imgSlide.children) {
        imgs.push(img);
    }
    updateImgs();
})