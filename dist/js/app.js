const
    accordion__items =
        [...document.querySelectorAll(" .accordion .accordion__item")];
window.addEventListener('load', function () {
    if (accordion__items[0].classList.contains('open')) {
        accordion__items[0].lastElementChild.style.height =
            accordion__items[0].lastElementChild.scrollHeight + "px";
    }
})

accordion__items.forEach((item) => {
    header = item.querySelector(".accordion__header");
    header.addEventListener("click", () => {
        opened = document.querySelector(".accordion__item.open");
        toggler(item);
        if (opened && opened !== item) {
            toggler(opened);
        }
    });
});

function toggler(item) {
    let accordion__body = item.querySelector(".accordion__body");
    if (accordion__body) { // if 
        if (!item.classList.contains('open')) {
            item.classList.add("open");
            accordion__body.style.height = accordion__body.scrollHeight + "px";
        } else {
            item.classList.remove("open");
            accordion__body.style.height = "0px";
        }
    }
}

