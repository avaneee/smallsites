let container = document.querySelector('.container');

let images = [
    "cd1.png",
    "cd2.png"
];

let rotations = [20, 30, 8, 10, 5]
let speeds = ["12", "50", "10", "2"]

// CDs
for (let i = 0; i < 60; i++) {
    let randomSize = Math.random() * 100 + 50;
    let randomX = Math.random() * window.innerWidth;
    let randomY = Math.random() * window.innerHeight;
    let randomSpeed = Math.random() * 10;

    let randomImage = images[Math.floor(Math.random() * images.length)];

    rotations.push(0);
    speeds.push(randomSpeed);

    let newCD = `<img src="${randomImage}
    "style="
		width: ${randomSize}px;
		left: ${randomX}px;
		top: ${randomY}px;
		position: absolute;">`;
    container.innerHTML += newCD;
}

function rotateCDs() {
    let cds = document.querySelectorAll('.container img');

    cds.forEach(function (cd, index) {
        rotations[index] = rotations[index] + speeds[index];
        cd.style.transform = "rotate(" + rotations[index] + "deg)";
    });
}

setInterval(rotateCDs, 50);
