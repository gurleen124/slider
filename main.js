let slides = document.querySelectorAll(".slide");


slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});
let counter = 0;
function carousel() {
    let prev = document.querySelectorAll(".prev");
    let next = document.querySelectorAll(".next");
    if (counter < 0) {
        counter = 0;
    }
    next.forEach(next => {
        if (counter < slides.length - 1) {
            next.style.visibility = "visible";
        } else {
            next.style.visibility = "hidden";
        }
    })
    prev.forEach(prev => {
        if (counter > 0) {
            prev.style.visibility = "visible";
        } else {
            prev.style.visibility = "hidden";
        }
    });
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

function prevBtn() {
    counter--;
    carousel();
}
function nextBtn() {
    counter++;
    carousel();
}

let intervalId = setInterval(() => {
    nextBtn();
    if (counter >= slides.length - 1) {
        clearInterval(intervalId);
    }
    if (counter < slides.length - 1) {
        next.style.visibility = "visible";
    } else {
        next.style.visibility = "hidden";
    }
}, 5000);
