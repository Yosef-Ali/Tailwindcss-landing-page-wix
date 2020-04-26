'use strict';

var menuTarget = document.querySelector('[dataMenuToggle]');
var menu = document.querySelector('[dataMenu]');
menuTarget.addEventListener('click', function (event) {
	event.preventDefault();
	menuTarget.lastElementChild.classList.toggle('text-primary');
	menu.classList.toggle('hidden');
});
