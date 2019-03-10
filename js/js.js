var SecondSlideBtn = document.querySelector('.slider__second-slide-btn');
var FirstSlideBtn = document.querySelector('.slider__first-slide-btn');
var ThirdSlideBtn = document.querySelector('.slider__third-slide-btn');
var Container = document.querySelector('.container');
var Body = document.querySelector('.page-body');
var FirstSliderText = document.querySelector('.slider__text--first-slide');
var SecondSliderText = document.querySelector('.slider__text--second-slide');
var ThirdSliderText = document.querySelector('.slider__text--third-slide');


FirstSlideBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    FirstSlideBtn.classList.add("slider-btn--checked");
    SecondSlideBtn.classList.remove("slider-btn--checked");
    ThirdSlideBtn.classList.remove("slider-btn--checked");
    Container.classList.remove("container--second-slide");
    Container.classList.remove("container--third-slide");
    Container.classList.add("container--first-slide");
    Body.classList.remove("page-body--brown");
    Body.classList.remove("page-body--blue");
    Body.classList.add("page-body--green");
    FirstSliderText.classList.remove("slider__text--hide");
    SecondSliderText.classList.add("slider__text--hide");
    ThirdSliderText.classList.add("slider__text--hide");
});

SecondSlideBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    FirstSlideBtn.classList.remove("slider-btn--checked");
    SecondSlideBtn.classList.add("slider-btn--checked");
    ThirdSlideBtn.classList.remove("slider-btn--checked");
    Container.classList.remove("container--first-slide");
    Container.classList.remove("container--third-slide");
    Container.classList.add("container--second-slide");
    Body.classList.remove("page-body--brown");
    Body.classList.remove("page-body--green");
    Body.classList.add("page-body--blue");
    FirstSliderText.classList.add("slider__text--hide");
    SecondSliderText.classList.remove("slider__text--hide");
    ThirdSliderText.classList.add("slider__text--hide");
});

ThirdSlideBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    FirstSlideBtn.classList.remove("slider-btn--checked");
    SecondSlideBtn.classList.remove("slider-btn--checked");
    ThirdSlideBtn.classList.add("slider-btn--checked");
    Container.classList.remove("container--second-slide");
    Container.classList.remove("container--first-slide");
    Container.classList.add("container--third-slide");
    Body.classList.remove("page-body--green");
    Body.classList.remove("page-body--blue");
    Body.classList.add("page-body--brown");
    FirstSliderText.classList.add("slider__text--hide");
    SecondSliderText.classList.add("slider__text--hide");
    ThirdSliderText.classList.remove("slider__text--hide");
});