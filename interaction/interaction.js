// src="http://cdnjs.com/libraries/tone" 

// with help from this tutorial on yt: https://www.youtube.com/watch?v=7ZhbKclhDf4


let playButton = document.getElementById("play");

// connecting to speakers
let synth = new Tone.Synth().toDestination();

// mapping keyboard keys to their notes
// made an object where each key on the keyboard relates to a specific note
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

