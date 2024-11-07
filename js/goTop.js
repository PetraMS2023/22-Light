
let goTop = document.querySelector(".goTop");
let footer = document.querySelector(".footer");

goTop.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
    if (window.scrollY >= 400) {
        goTop.style.display = "block";
    } else {
        goTop.style.display = "none";
    }
    if (window.scrollY >= footer.offsetTop - 600) {
        if (homeMedia && goTop) {
            goTop.style.display = "none";
            homeMedia.style.display = "none";
        }
    } else {
        if (homeMedia && goTop) {
            goTop.style.display = "block";
            homeMedia.style.display = "flex";
        }
    }
});
