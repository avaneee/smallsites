let container = document.querySelector('.container');
setTimeout(() => {
	container.innerText = "hello";
	container.style.fontSize = "100px";
}, 500)
setTimeout(() => {
	container.innerText = "as you know,";
	container.style.fontSize = "50px";
}, 1500)
setTimeout(() => {
	container.innerText = "im a website";
	container.style.fontSize = "200px";
}, 2300)
setTimeout(() => {
	container.innerText = "";
}, 3000)
setTimeout(() => {
	container.innerText = "so what?";
	container.style.fontSize = "50px";
}, 5000)
setTimeout(() => {
	container.innerText = "";
}, 6000)
setTimeout(() => {
	container.innerText = "u wanna fight about it?";
	container.style.fontSize = "300px";
}, 9000)
setTimeout(() => {
	container.innerText = "";
	let size = 10;
	setInterval(() => {
		container.innerText += " go away ";
		container.style.fontSize = size + "px";
		size += 1;
	}, 100)
}, 12000)