let words = document.querySelectorAll('p');
function randomizeEverything() {
	words.forEach((element) => {
		let red = Math.round(Math.random()*255);
		let green = Math.round(Math.random()*255);
		let blue = Math.round(Math.random()*255);
		element.style.color = `rgb(${red},${green},${blue})`;
		element.style.backgroundColor = `rgb(${255-red},${255-green},${255-blue})`;
		element.style.transform = `rotate(${Math.random()*720-360}deg)`;
	})
}
setInterval(randomizeEverything, 1000)