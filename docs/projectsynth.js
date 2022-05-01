//TONE.JS SYNTH//
//effects chain
const inmix = new Tone.Gain(0.9);
const outmix = new Tone.Gain(0.9);
const reverb = new Tone.Reverb({
      wet: .5,
      decay: 5,
    });
const delay = new Tone.PingPongDelay({
      time: 0.1,
      feedback: 0.2,
      wet: 0.1,
    });
const lowpass = new Tone.Filter(800, "lowpass");
const stereo = new Tone.StereoWidener(0.4);
  // inmix => reverb => delay
  // => lowpass filter => highpass filter => stereo width => outmix
  inmix.connect(reverb);
  reverb.connect(delay);
  delay.connect(lowpass);
  lowpass.connect(stereo);
  stereo.connect(outmix);
  outmix.toDestination();


//synth
const synth = new Tone.FMSynth({
  oscillator: {
    type: 'triangle'
  },
  modulationIndex: 5,
  modulation: {
    type: 'square'
    },
  modulationEnvelope: {
        attack: 0.1,
        release: 0.2
    },
  envelope: {
    attack: 0.15,
    decay: 0.05,
    sustain: .7,
    release: 0.2,
    attackCurve: 'sine'
  }
}).connect(inmix);

const now = Tone.now();
const f = 80;
  
  // document.getElementById("audio").addEventListener("click", async () => {
  //   await Tone.start();
  //   document.getElementById("audio").style.opacity = 0;
  //   console.log('audio is ready')
  // });

  for (let i = 0; i < 19; i++){
    document.getElementById(i).addEventListener("mouseenter", async () => {
      delay.wet.value = 0.1;
      synth.modulationIndex.value = 180*(1/(1+i));
      synth.triggerAttackRelease(f+i,0.2);
    });
  }

  document.getElementById("music").addEventListener("mouseenter", async () => {
    delay.wet.value = 0.8;
    synth.triggerAttackRelease(212.2, 0.5);
  });

  document.getElementById("concerts").addEventListener("mouseenter", async () => {
    delay.wet.value = 0.8;
    synth.triggerAttackRelease(280, 0.5);
  });

  document.getElementById("projects").addEventListener("mouseenter", async () => {
    delay.wet.value = 0.8;
    synth.triggerAttackRelease(243.75, 0.5);
  });

  document.getElementById("about").addEventListener("mouseenter", async () => {
    delay.wet.value = 0.8;
    synth.triggerAttackRelease(321.64, 0.5);
  });

  document.getElementById("index").addEventListener("mouseenter", async () => {
    delay.wet.value = 0.9;
    synth.triggerAttackRelease(369.47, 0.5);
  });