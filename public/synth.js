//TONE.JS SYNTH//


//effects chain
const inmix = new Tone.Gain(0.8);
const outmix = new Tone.Gain(0.8);
const reverb = new Tone.Reverb({
      wet: .5,
      decay: 20,
    });
const delay = new Tone.PingPongDelay({
      time: 0.1,
      feedback: 0.5,
      wet: 0.3,
    });
const lowpass = new Tone.Filter(3000, "lowpass");
const highpass = new Tone.Filter(150, "highpass");
const stereo = new Tone.StereoWidener(0.66);
  // inmix => reverb => delay
  // => lowpass filter => highpass filter => stereo width => outmix
  inmix.connect(reverb);
  reverb.connect(delay);
  delay.connect(lowpass);
  lowpass.connect(highpass);
  highpass.connect(stereo);
  stereo.connect(outmix);
  outmix.toDestination();


//synth
const synth = new Tone.FMSynth({
  oscillator: {
    type: 'triangle'
  },
  modulationIndex: 5,
  modulation: {
    type: 'sawtooth'
    },
  modulationEnvelope: {
        attack: 0.5,
        release: 2
    },
  envelope: {
    attack: 0.2,
    decay: 0.1,
    sustain: .2,
    release: 2,
    attackCurve: 'sine'
  }
}).connect(inmix);

const now = Tone.now();
  
  document.getElementById("audio").addEventListener("click", async () => {
    await Tone.start();
    document.getElementById("audio").style.opacity = 0;
    console.log('audio is ready')
  });
  
  document.getElementById("music").addEventListener("mouseenter", async () => {
    synth.oscillator.type = 'sine';
    lowpass.frequency.value = 3000;
    seq1.start()
  });
  document.getElementById("music").addEventListener("mouseleave", async () => {
    lowpass.frequency.value = 500;
    seq1.stop()
  });

  document.getElementById("projects").addEventListener("mouseenter", async () => {
    synth.oscillator.type = 'triangle';
    lowpass.frequency.value = 5000;
    seq2.start()
  });
  document.getElementById("projects").addEventListener("mouseleave", async () => {
    lowpass.frequency.value = 500;
    seq2.stop()
  });

  document.getElementById("concerts").addEventListener("mouseenter", async () => {
    synth.oscillator.type = 'sawtooth';
    lowpass.frequency.value = 1800;
    seq3.start()
  });
  document.getElementById("concerts").addEventListener("mouseleave", async () => {
    lowpass.frequency.value = 500;
    seq3.stop()
  });

  document.getElementById("pon").addEventListener("mouseenter", async () => {
    synth.oscillator.type = 'square';
    lowpass.frequency.value = 1000;
    synth.envelope.sustain = 0;
    synth.triggerAttack(30)
  });
  document.getElementById("pon").addEventListener("mouseleave", async () => {
    lowpass.frequency.value = 300;
    synth.triggerRelease();
    synth.envelope.sustain = 0.2;
  });

  seq1 = new Tone.Sequence(function(time, note){
    synth.triggerAttackRelease(note, 0.5);
    // console.log(note);
  }, [220, [333.46, 290.29], 383.04,,191.52,[,252.71]], 0.55);

  seq2 = new Tone.Sequence(function(time, note){
    synth.triggerAttackRelease(note, 0.5);
    // console.log(note);
  }, [[184.73, 212.20, 243.75, 280],[212.20, 243.75, 280, 321.64],
      [243.75, 280, 321.64, 369.46], [280, 321.64, 369.46, 424.4],
      [321.64, 369.46, 424.4, 487.51], [369.46, 424.4, 487.51, 560],
      [ 424.4, 487.51, 560, 643.27],,160.82,,], 0.45);

  seq3 = new Tone.Sequence(function(time, note){
    synth.triggerAttackRelease(note, 0.5);
    // console.log(note);
  }, [[891.44,776.05,675.59,588.13],[512,445.72,388.02],[337.79,294.07,256,222.86],[194.01,337.79],,388.02,,], 0.6);

 Tone.Transport.start();

