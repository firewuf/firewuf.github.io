let slides;
let prevButton;
let nextButton;
let currentSlideInput;
let totalSlidesDisplay;
let position;
let numberOfSlides;

class Carousel extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "closed"});

        const carouselTemplate = document.createElement("div");
        carouselTemplate.innerHTML = `
    <link rel="stylesheet" href="../css/carousel.css">
    <div class="carousel">
        <slot name="carousel-itself">Warning: no slides in carousel</slot>

        <div class="carousel-controls">
            <button id="carousel-button-prev" aria-label="Previous">Prev</button>

            <div id="slide-counter">
                <input id="current-slide-input" type="text" aria-label="Slide number" value="1">
                <p id="total-slides-display">/0</p>
            </div>

            <button id="carousel-button-next" aria-label="Next">Next</button>
        </div>
    </div>`;
        shadow.append(carouselTemplate);

        slides = document.getElementsByClassName("carousel-item");
        prevButton = shadow.getElementById("carousel-button-prev");
        nextButton = shadow.getElementById("carousel-button-next");
        currentSlideInput = shadow.getElementById("current-slide-input");
        totalSlidesDisplay = shadow.getElementById("total-slides-display");
        position = 0;
        numberOfSlides = slides.length;
        
        prevButton.addEventListener("click", moveToPrevSlide);
        nextButton.addEventListener("click", moveToNextSlide);
        document.addEventListener("DOMContentLoaded", function () {
            totalSlidesDisplay.innerHTML = "/" + numberOfSlides;
        });
        currentSlideInput.addEventListener("focusout", changeCurrentSlideFromInput);
        currentSlideInput.addEventListener("keypress", function (e) {
            if (e.code === "Enter") changeCurrentSlideFromInput()
        })
    }
}

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden");
    }
}

function updateVisibleSlide() {
    slides[position].classList.remove("carousel-item-hidden");
    slides[position].classList.add("carousel-item-visible");
}

function moveToNextSlide() {
    hideAllSlides();

    if (position + 1 < numberOfSlides) {
        position++;
        currentSlideInput.value++;
    } else {
        position = 0;
        currentSlideInput.value = 1;
    }

    updateVisibleSlide();
}

function moveToPrevSlide() {
    hideAllSlides()

    if (position - 1 >= 0) {
        position--;
        currentSlideInput.value--;
    } else {
        position = numberOfSlides - 1;
        currentSlideInput.value = numberOfSlides;
    }

    updateVisibleSlide();
}

function changeCurrentSlideFromInput() {
    if (currentSlideInput.value - 1 === position || currentSlideInput.value - 1 < 0 || currentSlideInput.value - 1 >= numberOfSlides) return;

    hideAllSlides();

    position = currentSlideInput.value - 1;

    updateVisibleSlide();
}

customElements.define("carousel-", Carousel);