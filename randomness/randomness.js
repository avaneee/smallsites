let container = document.querySelector('.container');
container.style.transform = `rotate(${Math.random()*90-45}deg) scale(${Math.random()*3+1})`;

let randomWords = [
	"HELLO!",
	"HI!",
	"OH HI!",
	"I’M A WEBSITE!",
	"WOW",
	"OMG"
]
let randomWord = randomWords[Math.floor(Math.random()*randomWords.length)];

container.innerHTML = randomWord;
if (Math.random() < .5) {
	let randomWord = randomWords[Math.floor(Math.random()*randomWords.length)];
	container.innerHTML += " " + randomWord;
}