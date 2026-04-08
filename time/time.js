
function playLoveStory() {
	let lovestory = document.querySelector('.lovestory');

	setTimeout(() => {
		lovestory.innerText = "Romeo take me";
	}, 1000)
	setTimeout(() => {
		lovestory.innerText = "Somewhere we can be alone";
	}, 3000)
	setTimeout(() => {
		lovestory.innerText = "I'll be waiting";
	}, 5500)
	setTimeout(() => {
		lovestory.innerText = "All there's left to do is run";
	}, 7000)
	setTimeout(() => {
		lovestory.innerText = "You'll be the prince";
	}, 9000)
	setTimeout(() => {
		lovestory.innerText = "And I'll be the princess";
	}, 11000)
	setTimeout(() => {
		lovestory.innerText = "It's a love story";
	}, 13000)
	setTimeout(() => {
		lovestory.innerText = "Baby, just say";
	}, 15000)
	setTimeout(() => {
		lovestory.innerText = "Yes";
	}, 16000)
}

function playSweetCaroline() {
	let sweetcaroline = document.querySelector('.sweetcaroline');

	setTimeout(() => {
		sweetcaroline.innerText = "Sweeeeeet carolineeeee";
	}, 1000)
	setTimeout(() => {
		sweetcaroline.innerText = "Dun dun dun";
	}, 2000)
	setTimeout(() => {
		sweetcaroline.innerText = "Good times never felt so good";
	}, 3000)
}

function playIris() {
	let iris = document.querySelector('.iris');

	setTimeout(() => {
		iris.innerText = "And I don't want the world to see me";
	}, 1000)
	setTimeout(() => {
		iris.innerText = "Cause I don't think that they'd understand";
	}, 2500)
	setTimeout(() => {
		iris.innerText = "When everything's made to be broken";
	}, 3500)
	setTimeout(() => {
		iris.innerText = "I just want you to know who I am";
	}, 4500)
}
// love story karaoke link: https://www.youtube.com/watch?v=1layuASCZV4


// let sweetcaroline = document.querySelector('.sweetcaroline');

// setTimeout(() => {
// 	sweetcaroline.innerText = "Sweeeeet carolineeeee";
// }, 1000)


// getting the song from clicking the button?
function getSong(song) {
	// hiding all songs 
	document.querySelector('.lovestory').style.display = "none";
	document.querySelector('.sweetcaroline').style.display = "none";
	document.querySelector('.iris').style.display = "none";

	// show selected song
	document.querySelector(`.${song}`).style.display = "block";

	// play the song
	if (song === "lovestory") {
		playLoveStory();}
	if (song === "sweetcaroline") {
		playSweetCaroline();}
	if (song === "iris") {
		playIris();}
}

let output = document.querySelector("#output");
output.innerHTML = karaokeSongs[song];
