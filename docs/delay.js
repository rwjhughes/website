
//microphone
const meter = new Tone.Meter({
  smoothing: 0.05
});
const inmeter = new Tone.Meter({
  smoothing: 0.05
});
const outmeter = new Tone.Meter({
  smoothing: 0.05
});
const mic = new Tone.UserMedia();
const micmeter = mic.connect(meter);
micmeter.open().then(() => {
	// promise resolves when input is available
	console.log("mic open");
  //input level
	// print the incoming mic levels in decibels
  setInterval(function(){
    var inputlevel = inmeter.getValue();
    // console.log(inputlevel);
    // console.log(Math.exp(0.01*inputlevel))
    document.getElementById("inLevel").value = Math.exp(0.028*inputlevel);
    var outputlevel = outmeter.getValue();
    // console.log(outputlevel);
    document.getElementById("outLevel").value = Math.exp(0.028*outputlevel);
    
    if (inputlevel >= -7){
      document.getElementById("inLevel").style["border-color"] = "red";
    }
    else {
      document.getElementById("inLevel").style["border-color"] = "#F3F8F2";
    }
    if (outputlevel >= -7){
      document.getElementById("outLevel").style["border-color"] = "red";
    }
    else {
      document.getElementById("outLevel").style["border-color"] = "#F3F8F2";
    }
  }, 30);
}).catch(e => {
	// promise is rejected when the user doesn't have or allow mic access
	console.log("mic not open");
});

document.getElementById("mic").addEventListener("click", async () => {
  let micStatus = document.getElementById("mic").innerHTML;
  if (micStatus == "on"){
    mic.mute = true;
    document.getElementById("mic").style.background = "#989b97";
    document.getElementById("mic").innerHTML = "off";
  } else if (micStatus == "off"){
    mic.mute = false;
    document.getElementById("mic").style.background = "#F3F8F2";
    document.getElementById("mic").innerHTML = "on";
  }
});

// audio context
document.getElementById("audio").addEventListener("click", async () => {
    await Tone.start();
    document.getElementById("audio").style.opacity = 0.2;
    console.log('audio is ready')
  });

const delay = new Tone.Delay({
    delayTime: 4,
    maxDelay: 100
});
const feedb = new Tone.Gain(0.5);
const inmix = new Tone.Gain(0.9);
const outmix = new Tone.Gain(0.9);
// mic => inmix => delay => outmix
//                '>fb-^
mic.connect(inmix);
inmix.connect(delay);
delay.connect(feedb);
feedb.connect(delay);
delay.connect(outmix);
outmix.toDestination();
inmix.connect(inmeter);
outmix.connect(outmeter);

//feedback
function setFeedback() {
    var feedback = (this.value);
    // delay.feedback.value = feedback;
    feedb.gain.value = feedback;
    if (feedback >= 1){
      document.getElementById("feedback").style.background = 'rgb(228, 64, 64)';
    }
    else {
      document.getElementById("feedback").style.background = '#F3F8F2';
    }
    // document.getElementById("feedback").innerHTML = feedback.toFixed(2);
  }
  document.getElementById("feedback").oninput = setFeedback;
  setFeedback.bind(document.getElementById("feedback"))();

  document.getElementById("feedbackStop").addEventListener("click", async () => {
    var feedback = 0;
    feedb.gain.value = feedback;
    document.getElementById("feedback").style.background = '#F3F8F2';
    document.getElementById("feedback").value = feedback.toFixed(2)
  });

  //tempo
  function setdelayTime() {
    var tempo = 240/this.value;
    delay.delayTime.value = tempo;
    // document.getElementById("tempo").value = this.value.toFixed(1);
}
  document.getElementById("tempo").oninput = setdelayTime;
  setdelayTime.bind(document.getElementById("tempo"))();

  var i = 0;

  function loopMet(){
    var metronomeStatus = document.getElementById("metStatus").innerHTML;
    var beat = 60000/document.getElementById("tempo").value;
    document.getElementById(i).style.background = "#FCB07E";
    setTimeout(function(){
      document.getElementById(i).style.background = "#F3F8F2";
      // console.log(i);
      i++;
      i = i%4;
      if (metronomeStatus == "start"){
        metClear();
      }
      else {
        loopMet();
      }
    }, beat);
  }

  function metClear() { 
    var i = 0;
    for (i = 0; i++; i<4){
      document.getElementById(i).style.background = "#F3F8F2";
  }
}
  
  function metronomeStart() {
    var metronomeStatus = document.getElementById("metStatus").innerHTML;
    if (metronomeStatus == "start"){
      document.getElementById("metStatus").innerHTML = "stop";
      document.getElementById("metStatus").style.background = "#989b97";
      loopMet();
    }
    else if (metronomeStatus == "stop"){
      document.getElementById("metStatus").innerHTML = "start";
      document.getElementById("metStatus").style.background = "#F3F8F2";
      metClear();
    }
  }

  //output
  function setoutput() {
    var output = this.value;
    outmix.gain.value = output;
}
  document.getElementById("output").oninput = setoutput;
  setoutput.bind(document.getElementById("output"))();

  //input
  function setinput() {
    var input = this.value;
    inmix.gain.value = input;
}
  document.getElementById("input").oninput = setinput;
  setinput.bind(document.getElementById("input"))();