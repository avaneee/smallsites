
function rotateLinks() {
	let allSpans = document.querySelectorAll('span');
	allSpans.forEach((element) => {
		let randomDeg = Math.random()*20;
		element.style.rotate = randomDeg + "deg";
	})
}
setInterval(rotateLinks, 500);