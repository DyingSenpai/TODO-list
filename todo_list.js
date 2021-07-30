'use strict'
function addElement() {
	let input_text = document.getElementById('input_add').value; // Берём текст из инпута
	let list = document.getElementById('myList'); // Берём айди списка
	let li = document.createElement('li'); // Создаём пункт списка
	let div = document.createElement('div'); // Создаём див для пункта списка
	let btn = document.createElement('button');
	btn.setAttribute("onclick", "deleteElement()");
	btn.className += "btn li__button";
	let img = document.createElement('img');
	img.setAttribute("src", "img/close.svg");
	img.className += "close";
	btn.appendChild(img);
	div.className += "li__text";
	div.innerHTML = input_text;
	li.appendChild(div);
	li.appendChild(btn);
	list.appendChild(li);
}