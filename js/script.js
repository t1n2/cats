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
	let slideIndex = 1;

	showSlides(teamSlides, slideIndex);

    function showSlides(slideList, n) {
		if (n > slideList.length) {
			slideIndex = 1;
		}

		if (n < 1) {
			slideIndex = slideList.length;
		}

		slideList.forEach(item => item.classList.add('hide'));

		slideList[slideIndex - 1].classList.add('show', 'fade');
		slideList[slideIndex - 1].classList.remove('hide');
	}

	function plusSlides(slideList, n) {
		showSlides(slideList, slideIndex += n);
	}
	
	function slideBtns(slideList, prevBtn, nextBtn) {
		prevBtn.forEach(item => {
			item.addEventListener('click', () => {
				plusSlides(slideList, -1);
			});
		});
	
		nextBtn.forEach(item => {
			item.addEventListener('click', () => {
				plusSlides(slideList, 1);
			});
		});
	}

	slideBtns(teamSlides, teamBtnPrev, teamBtnNext);


	// FAQ accordeon

	const faqBtn = document.querySelectorAll('.right__part'),
		  faqContent = document.querySelectorAll('.item__answer'),
		  btnSymbol = document.querySelectorAll('.item__symbol');

	accordeon(faqBtn, faqContent, btnSymbol, 'item__symbol--minus');
	

	// Reviews Slider

	const reviewsSlides = document.querySelectorAll('.reviews__item'),
		  reviewsBtnNext = document.querySelectorAll('.reviews__item .slider__btn.slider__btn--next'),
		  reviewsBtnPrev = document.querySelectorAll('.reviews__item .slider__btn.slider__btn--prev');

	showSlides(reviewsSlides, slideIndex);
	slideBtns(reviewsSlides, reviewsBtnPrev, reviewsBtnNext)
	
	let i = 0;
	
	setInterval(() => {
		plusSlides(reviewsSlides, 1)
	}, 3000);
	

});




