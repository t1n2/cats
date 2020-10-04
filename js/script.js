'use strict';

// Team Slider

const teamSlider = document.querySelectorAll('.item__border'),
      teamContent = document.querySelectorAll('.team__item'),
      sliderBtnNext = document.querySelectorAll('.team__item .slider__btn.slider__btn--next'),
      sliderBtnPrev = document.querySelectorAll('.team__item .slider__btn.slider__btn--prev');

function hideSliderContent() {
	teamSlider.forEach(item => {
		item.classList.add('hide');
		item.classList.remove('show');
	});
}

function showSliderContent(i) {
	teamSlider[i].classList.remove('hide');
	teamSlider[i].classList.add('show');
}

hideSliderContent();
showSliderContent(0);

sliderBtnPrev.forEach((item, i) => {
	item.addEventListener('click', () => {
	    if (i > 0 && i < sliderBtnNext.length) {
			hideSliderContent();
			showSliderContent(i - 1);
		}
	});
});

sliderBtnNext.forEach((item, i) => {
	item.addEventListener('click', () => {
	    if (i < sliderBtnNext.length - 1) {
			hideSliderContent();
			showSliderContent(i + 1);
		}
	});
});

// FAQ accordeon

const faqBtn = document.querySelectorAll('.right__part'),
      answer = document.querySelectorAll('.item__answer'),
      itemSymbol = document.querySelectorAll('.item__symbol');

faqBtn.forEach((item, i) => {
	item.addEventListener('click', () => {
		item.classList.toggle('active');
		answer[i].classList.toggle('show');
		itemSymbol[i].classList.toggle('item__symbol--minus');
	});
});


