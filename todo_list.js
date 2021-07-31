'use strict'
function addElement() {
	let input_text = document.getElementById('input_add').value; // Берём текст из инпута
	if(input_text === "") {
		alert("Поле не должно быть пустым!");
		return;
	}
	let list = document.getElementById('myList'); // Берём айди списка
	let li = document.createElement('li'); // Создаём пункт списка
	let div = document.createElement('div'); // Создаём див для пункта списка
	let btn = document.createElement('button');
	btn.className += "btn li__button close";
	let img_close = document.createElement('img');
	img_close.setAttribute("src", "img/close.svg");
	btn.appendChild(img_close);
	let img_check = document.createElement('img');
	img_check.setAttribute("src", "img/check.svg");
	img_check.className += "check";
	div.className += "li__text ";
	div.innerHTML = input_text;
	div.appendChild(img_check);
	li.appendChild(div);
	li.appendChild(btn);
	li.setAttribute("id", "myList_li");
	list.appendChild(li);
	document.getElementById('input_add').value = "";
	// appendChild(node) - старый код 
}
// Удаление элемента списка
document.querySelector('ul').onclick = function(e) {
	const btn = e.target.closest('.close');
	if(!btn) {
		return;
	}
	btn.parentElement.remove();
}
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
	if (ev.target.tagName === 'LI') {
    	ev.target.classList.toggle('active');
	}
}, false);