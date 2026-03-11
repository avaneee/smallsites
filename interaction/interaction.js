let container = document.querySelector('.container');
let numberOfInteractions = 0;
function runAway() {
	container.style.transform = `translate(${Math.random()*100-50}vw, ${Math.random()*100-50}vh)`;
	numberOfInteractions++;
	if (numberOfInteractions > 10) {
		container.innerText = "AHHHHHH";
	}
	if (numberOfInteractions > 20) {
		container.innerText = "STOP IT STOP IT STOOOOOP";
	}
}
container.addEventListener('mouseenter', runAway)