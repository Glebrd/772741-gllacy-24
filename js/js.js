var SecondSlideBtn = document.querySelector('.slider__second-slide-btn');
var FirstSlideBtn = document.querySelector('.slider__first-slide-btn');
var ThirdSlideBtn = document.querySelector('.slider__third-slide-btn');
var Container = document.querySelector('.slider');
var Body = document.querySelector('.page-body');
var FirstSliderText = document.querySelector('.slider__text--first-slide');
var SecondSliderText = document.querySelector('.slider__text--second-slide');
var ThirdSliderText = document.querySelector('.slider__text--third-slide');


FirstSlideBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    FirstSlideBtn.classList.add("slider-btn--checked");
    SecondSlideBtn.classList.remove("slider-btn--checked");
    ThirdSlideBtn.classList.remove("slider-btn--checked");
    Container.classList.remove("slider--second-slide");
    Container.classList.remove("slider--third-slide");
    Container.classList.add("slider--first-slide");
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
    Container.classList.remove("slider--first-slide");
    Container.classList.remove("slider--third-slide");
    Container.classList.add("slider--second-slide");
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
    Container.classList.remove("slider--second-slide");
    Container.classList.remove("slider--first-slide");
    Container.classList.add("slider--third-slide");
    Body.classList.remove("page-body--green");
    Body.classList.remove("page-body--blue");
    Body.classList.add("page-body--brown");
    FirstSliderText.classList.add("slider__text--hide");
    SecondSliderText.classList.add("slider__text--hide");
    ThirdSliderText.classList.remove("slider__text--hide");
});



var link = document.querySelector(".contacts__button"),
    popup = document.querySelector(".modal-write-us"),
    close = popup.querySelector(".modal-close"),
    form = popup.querySelector("form"),
    name1 = popup.querySelector(".write-us-form-name"),
    email = popup.querySelector(".write-us-form-email"),
    text = popup.querySelector(".write-us-form-letter-text");


link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});


close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!name1.value || !email.value || !text.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
});
