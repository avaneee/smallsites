// src="http://cdnjs.com/libraries/tone" 

let playButton = document.getElementById("play");

// connecting to speakers
let synth = new Tone.Synth().toDestination();


playButton.addEventListener("click", () => {
    if (Tone.context.state !== "running"){
        Tone.start();
    }
    synth.triggerAttackRelease("C3","8n"); 
});


// tutorial on yt: https://www.youtube.com/watch?v=7ZhbKclhDf4

