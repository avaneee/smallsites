// src="http://cdnjs.com/libraries/tone" 

let playButton = document.getElementById("play");

// connecting to speakers
let synth = new Tone.Synth().toDestination();

// older code
// playButton.addEventListener("click", () => {
//     if (Tone.context.state !== "running"){
//         Tone.start();
//     }
//     synth.triggerAttackRelease("C3","8n"); 
// });

// mapping keyboard keys to their notes
let keyMap = {
    "1": "C3",
    "2": "D3",
    "3": "E3",
    "4": "F3",
    "5": "G3",
    "6": "A3",
    "7": "B3",
    "8": "C4"
};

// start audio context on button click 
playButton.addEventListener("click", () => {
    if (Tone.context.state !== "running") {
        Tone.start();
    }
});

// listen for keyboard presses
document.addEventListener("keydown", (event) => {
    let key = event.key;

    if (keyMap[key]) {
        synth.triggerAttackRelease(keyMap[key], "8n");
    }
});

// tutorial on yt: https://www.youtube.com/watch?v=7ZhbKclhDf4

