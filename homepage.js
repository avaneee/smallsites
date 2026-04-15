// gabriel's code

// function changeLinkSizes() {
// 	let allSpans = document.querySelectorAll('span');
// 	allSpans.forEach((element) => {
// 		let randomSize = Math.random()*50;
// 		element.style.fontSize = randomSize + "px";
// 	})
// }
// setInterval(changeLinkSizes, 1000);
//

function rotateLinks() {
	let allSpans = document.querySelectorAll('span');
	allSpans.forEach((element) => {
		let randomDeg = Math.random()*20;
		element.style.rotate = randomDeg + "deg";
	})
}
setInterval(rotateLinks, 500);