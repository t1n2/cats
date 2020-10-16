'use strict';

window.addEventListener('DOMContentLoaded', () => {

	const tabsParent = document.querySelector('.slider__menu'),
		  tabs = document.querySelectorAll('.slider__link'),
		  tabsContent = document.querySelectorAll('.slider__inner');
	           
    
	function hideTabsContent() {
		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show');
		})

		tabs.forEach(item => {
            item.classList.remove('active');
        });
	};

	function showTabsContent(i) {
		tabsContent[i].classList.add('show');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('active');
	};

	hideTabsContent();
	showTabsContent(0);
	
	tabsParent.addEventListener ('click', (e) => {
		const target = e.target;

		if (target && target.classList.contains('slider__link')) {
			tabs.forEach((item, i) => {
				if (target == item) {	
					hideTabsContent();
					showTabsContent(i);
				}
			})
		}
	});

	// Care Accordeon

	const careBtn = document.querySelectorAll('.care__item .slider__btn.slider__btn--next'),
		  careContent = document.querySelectorAll('.care__text-drop');

	function accordeon(btn, content, btnAnimation, selector) {
		btn.forEach((item, i) => {
			item.addEventListener('click', () => {
				item.classList.toggle('active');
				content[i].classList.toggle('show');
				btnAnimation[i].classList.toggle(selector);
			});
		});
	}

	accordeon(careBtn, careContent, careBtn, 'rotate');


	// Team Slider

	const teamItem = document.querySelectorAll('.item__border'),
	teamBtnNext = document.querySelectorAll('.team__item .slider__btn.slider__btn--next'),
	teamBtnPrev = document.querySelectorAll('.team__item .slider__btn.slider__btn--prev');

	function hideSliderContent(content) {
		content.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show');
		});
	}

	function showSliderContent(content, i) {
		content[i].classList.remove('hide');
		content[i].classList.add('show');
	}

	hideSliderContent(teamItem);
	showSliderContent(teamItem, 0);

	function sliderPrev(btn, content) {
		btn.forEach((item, i) => {
			item.addEventListener('click', () => {
				if (i > 0 && i < btn.length) {
					hideSliderContent(content);
					showSliderContent(content, i - 1);
				}
			});
		});
	}

	function sliderNext(btn, content) {
		btn.forEach((item, i) => {
			item.addEventListener('click', () => {
				if (i < btn.length - 1) {
					hideSliderContent(content);
					showSliderContent(content, i + 1);
				}
			});
		});
	}

	sliderPrev(teamBtnPrev, teamItem);
	sliderNext(teamBtnNext, teamItem);


	// FAQ accordeon

	const faqBtn = document.querySelectorAll('.right__part'),
		  faqContent = document.querySelectorAll('.item__answer'),
		  btnSymbol = document.querySelectorAll('.item__symbol');

	accordeon(faqBtn, faqContent, btnSymbol, 'item__symbol--minus');

	// Reviews Slider

	const reviewsSlider = document.querySelectorAll('.reviews__item'),
	reviewsBtnNext = document.querySelectorAll('.reviews__item .slider__btn.slider__btn--next'),
	reviewsBtnPrev = document.querySelectorAll('.reviews__item .slider__btn.slider__btn--prev');

	hideSliderContent(reviewsSlider);
	showSliderContent(reviewsSlider, 0);

	sliderPrev(reviewsBtnPrev, reviewsSlider);
	sliderNext(reviewsBtnNext, reviewsSlider);
	
	let i = 0;
	const timerId = setInterval(function () {
		i++;
        if (i < reviewsSlider.length) {
			hideSliderContent(reviewsSlider);
			showSliderContent(reviewsSlider, i);
		} else {
			i = 0;
			hideSliderContent(reviewsSlider);
			showSliderContent(reviewsSlider, i);
		}
	}, 3000);

});




