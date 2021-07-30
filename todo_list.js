'use strict'
function addElement() {
	let input_text = document.getElementById('input_add').value; // Берём текст из инпута
	let list = document.getElementById('myList'); // Берём айди списка
	let li = document.createElement('li'); // Создаём пункт списка
	let div = document.createElement('div'); // Создаём див для пункта списка
	let btn = document.createElement('button');
	btn.setAttribute("onclick", "deleteElement()");
	btn.className += "btn li__button";
	let img_close = document.createElement('img');
	img_close.setAttribute("src", "img/close.svg");
	img_close.className += "close";
	btn.appendChild(img_close);
	let img_check = document.createElement('img');
	img_check.setAttribute("src", "img/check.svg");
	img_check.className += "check";
	div.className += "li__text";
	div.innerHTML = input_text;
	div.appendChild(img_check);
	li.appendChild(div);
	li.appendChild(btn);
	list.appendChild(li);
	document.getElementById('input_add').value = "";
	// appendChild(node) - старый код 
}
function deleteElement() {
	// let elem = this;
	// elem.remove();
}