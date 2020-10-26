'use strict';

window.addEventListener('DOMContentLoaded', () => {

	const tabsParent = document.querySelector('.slider__menu'),
		  tabs = document.querySelectorAll('.slider__link'),
		  tabsContent = document.querySelectorAll('.slider__inner');
	           
    
	function hideTabsContent() {
		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show');
		});

		tabs.forEach(item => {
            item.classList.remove('active');
        });
	}

	function showTabsContent(i) {
		tabsContent[i].classList.add('show');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('active');
	}

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
			});
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

	const teamSlides = document.querySelectorAll('.item__border'),
		  teamBtnNext = document.querySelectorAll('.team__item .slider__btn.slider__btn--next'),
		  teamBtnPrev = document.querySelectorAll('.team__item .slider__btn.slider__btn--prev');

	function hideSlideContent(slides) {
		slides.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show');
		})
	}

	function showSlideContent(slides, i = 0) {
		slides[i].classList.add('show', 'fade');
		slides[i].classList.remove('hide');
	}

	hideSlideContent(teamSlides);
	showSlideContent(teamSlides);

	function prevBtn(slides, btn) {
		btn.forEach((item, i) => {
			item.addEventListener('click', () => {
				if (i <= 0) {
					hideSlideContent(slides);
					showSlideContent(slides, slides.length - 1);
				} else {
					hideSlideContent(slides);
					showSlideContent(slides, i - 1);
				}
			});
		});
	}

	function nextBtn(slides, btn) {
		btn.forEach((item, i) => {
			item.addEventListener('click', () => {
				if (i < slides.length - 1) {
					hideSlideContent(slides);
					showSlideContent(slides, i + 1);
				} else {
					hideSlideContent(slides);
					showSlideContent(slides, 0);
				}
			});
		});
	}

	prevBtn(teamSlides, teamBtnPrev);
	nextBtn(teamSlides, teamBtnNext);

	// FAQ accordeon

	const faqBtn = document.querySelectorAll('.right__part'),
		  faqContent = document.querySelectorAll('.item__answer'),
		  btnSymbol = document.querySelectorAll('.item__symbol');

	accordeon(faqBtn, faqContent, btnSymbol, 'item__symbol--minus');


	// Reviews Slider

	const reviewsSlides = document.querySelectorAll('.reviews__item'),
		  reviewsBtnNext = document.querySelectorAll('.reviews__item .slider__btn.slider__btn--next'),
		  reviewsBtnPrev = document.querySelectorAll('.reviews__item .slider__btn.slider__btn--prev');
	
	hideSlideContent(reviewsSlides);
	showSlideContent(reviewsSlides);

	prevBtn(reviewsSlides, reviewsBtnPrev);
	nextBtn(reviewsSlides, reviewsBtnNext);

    let n = 0;
	setInterval(() => {
		n++;
		if (n > reviewsSlides.length - 1) {
			n = 0;
		}
		hideSlideContent(reviewsSlides);
		showSlideContent(reviewsSlides, n);
	}, 3000);
	

});




