let container = document.querySelector('.container');

// CHANGE THIS?
container.style.transform = `rotate(${Math.random() * 180 - 45}deg) scale(${Math.random() + 1})`;

let images = [
	"pic1.jpg",
	"pic2.jpg",
	"pic3.jpg",
	"pic4.jpg",
	"pic5.jpg",
	"pic6.jpg",
	"pic7.jpg",
	"pic8.jpg",
	"pic9.jpg",
	"pic10.jpg",
	"pic11.jpg",
	"pic12.jpg",
	"pic13.jpg",
	"pic14.jpg",
	"pic15.jpg",
	"pic16.jpg",
	"pic17.jpg",
];

let randomImage = images[Math.floor(Math.random() * images.length)];

container.innerHTML = `<img src="${randomImage}" alt="random image">`;

// parallax hover effect

/* Store the element in el */
let el = document.getElementById('tilt')

/* Get the height and width of the element */
const height = el.clientHeight
const width = el.clientWidth

/*
  * Add a listener for mousemove event
  * Which will trigger function 'handleMove'
  * On mousemove
  */
el.addEventListener('mousemove', handleMove)

/* Define function a */
function handleMove(e) {

	const xVal = e.layerX
	/* Store the y position */
	const yVal = e.layerY
	const yRotation = 20 * ((xVal - width / 2) / width)
	const xRotation = -20 * ((yVal - height / 2) / height)
	const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'

	el.style.transform = string
}

/* Add listener for mouseout event, remove the rotation */
el.addEventListener('mouseout', function () {
	el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

/* Add listener for mousedown event, to simulate click */
el.addEventListener('mousedown', function () {
	el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
})

/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener('mouseup', function () {
	el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
})