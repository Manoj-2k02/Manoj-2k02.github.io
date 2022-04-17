let myimage = document.querySelector('img');

myimage.onclick = () => {
	let imgSrc = myimage.getAttribute('src');
	if(imgSrc == 'images/attack-on-titan.jpg') {
		myimage.setAttribute('src', 'images/attack-on-titan2.jpg');
	} else {
		myimage.setAttribute('src', 'images/attack-on-titan.jpg');
	}
	return;
};

let user = document.getElementById('user');
let button = document.querySelector('button');

function setUserName() {
	let name = prompt('Enter your name');
	if(!name) {
		setUserName();
		return;
	} 
	localStorage.setItem('name', name);
	user.textContent = 'Welcome, ' + name + '!';
} 

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let name = localStorage.getItem('name');
	user.textContent = 'Welcome, ' + name + '!';
}


button.onclick = () => {
	setUserName();
}










// myimage.addEventListener('click', () => {
// 	let imgSrc = myimage.getAttribute('src');
// 	if(imgSrc == 'images/attack-on-titan.jpg') {
// 		myimage.setAttribute('src', 'images/attack-on-titan2.jpg');
// 	} else {
// 		myimage.setAttribute('src', 'images/attack-on-titan.jpg');
// 	}
// 	return;
// });