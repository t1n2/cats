'use strict';

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


