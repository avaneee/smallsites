function changeLinkSizes() {
	let allSpans = document.querySelectorAll('span');
	allSpans.forEach((element) => {
		let randomSize = Math.random()*50;
		element.style.fontSize = randomSize + "px";
	})
}
setInterval(changeLinkSizes, 1000);