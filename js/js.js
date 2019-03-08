var SecondSlideBtn = document.querySelector('.slider__second-slide-btn');
var FirstSlideBtn = document.querySelector('.slider__first-slide-btn');
var ThirdSlideBtn = document.querySelector('.slider__third-slide-btn');
var Container = document.querySelector('.container');
var Body = document.querySelector('.page-body');


FirstSlideBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    Container.classList.remove("container--second-slide");
    Container.classList.remove("container--third-slide");
    Container.classList.add("container--first-slide");
    Body.classList.remove("page-body--brown");
    Body.classList.remove("page-body--blue");
    Body.classList.add("page-body--green");
});

SecondSlideBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    Container.classList.remove("container--first-slide");
    Container.classList.remove("container--third-slide");
    Container.classList.add("container--second-slide");
    Body.classList.remove("page-body--brown");
    Body.classList.remove("page-body--green");
    Body.classList.add("page-body--blue");
});

ThirdSlideBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    Container.classList.remove("container--second-slide");
    Container.classList.remove("container--first-slide");
    Container.classList.add("container--third-slide");
    Body.classList.remove("page-body--green");
    Body.classList.remove("page-body--blue");
    Body.classList.add("page-body--brown");
});