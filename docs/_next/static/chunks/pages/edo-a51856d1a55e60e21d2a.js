(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[379],{7028:function(e,n,t){"use strict";t.r(n);var r=t(4121),i=t(4047),a=t(2700),o=t(6265),u=t(9999),s=t(5893),c=t(7771),l=t(7294),d=t(7423);function h(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,u=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return o=e.done,e},e:function(e){u=!0,a=e},f:function(){try{o||null==t.return||t.return()}finally{if(u)throw a}}}}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash"],m={attack:{label:"attack (s)",mapping:function(e){return(10*Math.exp(.0206*e)-10)/6.342},round:!1,device:"synth",assign:function(e,n){e.envelope.attack=n,e.modulationEnvelope.attack=n}},release:{label:"release (s)",mapping:function(e){return(10*Math.exp(.0206*e)-10)/3.9635},round:!1,device:"synth",assign:function(e,n){e.envelope.release=n,e.modulationEnvelope.release=n}},modulation:{label:"modulation",mapping:function(e){return 7.884*(10*Math.exp(.0206*e)-10)},round:!0,device:"synth",assign:function(e,n){return e.modulationIndex.value=n}},reverb:{label:"reverb",mapping:function(e){return e/127},round:!1,device:"reverb",assign:function(e,n){return e.wet.value=n}},feedback:{label:"feedback",mapping:function(e){return e/158},round:!1,device:"delay",assign:function(e,n){e.feedback.value=n}},time:{label:"time (s)",mapping:function(e){return(10*Math.exp(.0206*e)-10)/12.68},round:!1,device:"delay",assign:function(e,n){return e.delayTime.value=n}},lowpass:{label:"lowpass (Hz)",mapping:function(e){return 157.32*(Math.exp(.038205*e)-1)+20},round:!0,device:"lowpass",assign:function(e,n){return e.frequency.value=n}},gain:{label:"gain",mapping:function(e){return e/127},round:!1,device:"gain",assign:function(e,n){return e.gain.value=n}}},y=function(e){var n=e.label,t=e.displayValue,r=e.input,i=e.setInput,a=e.midiInput,o=e.changeParameter;return(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:n}),(0,s.jsx)("span",{children:t}),(0,s.jsx)("button",{className:"midimap",onClick:o,children:a?"set"===a?"map":"".concat(a):"map"}),(0,s.jsx)("input",{type:"range",min:"0",max:"127",value:r,className:"slider",onChange:function(e){return i(Number(e.target.value))}})]})};n.default=function(){var e="ontouchstart"in window,n=(0,l.useRef)(null),t=(0,l.useState)(110),r=t[0],i=t[1],a=(0,l.useState)(Math.round(24*Math.random())),h=a[0],f=a[1],v=(0,l.useState)(null),x=v[0],j=v[1],w=(0,l.useState)({attack:60*Math.random(),release:127*Math.random(),modulation:60*Math.random(),reverb:127*Math.random(),feedback:127*Math.random(),time:127*Math.random(),lowpass:120*Math.random()+7,gain:101}),k=w[0],M=w[1],S=(0,l.useState)(),D=S[0],O=S[1],K=(0,l.useState)([{},{}]),N=K[0],E=K[1],I=(0,l.useState)(),A=I[0],P=I[1],C=(0,l.useState)([]),_=(C[0],C[1],(0,l.useState)(0)),q=(_[0],_[1],(0,l.useState)()),T=(q[0],q[1],isNaN(r)||isNaN(h)||h<1||h>24||r<1),z=[],R=2*h;if(!T)for(var Z=0,H=(0,u.Z)(Array(R).keys());Z<H.length;Z++){var L=H[Z];0===L?z.push(r):z.push(Math.pow(2,1/h)*z[L-1])}var Y,B=function(e){var n=e.input,t=e.value;if(D){var r=p(p({},N[0]),{},(0,o.Z)({},D,n)),i=Object.keys(r).reduce((function(e,n){return p(p({},e),{},(0,o.Z)({},r[n],e[r[n]]?e[r[n]].concat([n]):[n]))}),{}),a=[r,i];E(a),O(void 0),localStorage.midiMap=JSON.stringify(a)}else{var u=N[1][n];if(u){var s=p({},k);u.forEach((function(e){return s[e]=t})),M(s)}}};return(0,l.useEffect)((function(){if(n.current){console.log("setting message callback");var e=B;window.onDeviceInput=e,n.current.onDeviceInput=e}}),[D,k,N]),(0,l.useEffect)((function(){if(x||j(function(){var e=new d.S9(.8),n=new d.S9(.8),t=new d.E8({wet:.6,decay:30}),r=new d.D0({time:.1,feedback:.7,wet:.5}),i=new d.wn(2e3,"lowpass");return e.connect(t),t.connect(r),r.connect(i),i.connect(n),n.toDestination(),{synth:new d.tC({oscillator:{type:"sine"},modulationIndex:10,modulation:{type:"sawtooth"},modulationEnvelope:{attack:5,release:9},envelope:{attack:3,decay:3,sustain:.8,release:8,attackCurve:"sine"}}).connect(e),lowpass:i,delay:r,reverb:t,gain:n}}()),!n.current){var e=new b;e.start().then((function(){console.log("Started!")})).catch(console.error),n.current=e}if(localStorage.midiMap){var t=JSON.parse(localStorage.midiMap);E(t)}navigator&&navigator.keyboard&&navigator.keyboard.getLayoutMap().then((function(e){P(e)}))}),[]),(0,l.useEffect)((function(){var e=function(e){console.log(e.code);var n=g.indexOf(e.code);-1!==n&&n<z.length&&x.synth.triggerAttack(z[n])},n=function(e){return x.synth.triggerRelease()};return document.addEventListener("keydown",e),document.addEventListener("keyup",n),function(){document.removeEventListener("keydown",e),document.removeEventListener("keyup",n)}}),[z,x]),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{class:"deeper",children:[(0,s.jsx)("title",{children:"EDO SYNTH"}),(0,s.jsx)("h1",{children:"EDO SYNTH [beta]"}),(0,s.jsx)("h2",{children:(0,s.jsx)("a",{href:"index.html",title:"Get me out of here!",children:"Richard Hughes"})})]}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Generate a microtonal synth by entering in the starting frequency and the amount of ocatve divisions."}),(0,s.jsx)("li",{children:"You can MIDI map your own deivce to the sliders and the map will be stored locally."}),(0,s.jsx)("li",{children:"The keys are assigned to your computer keyboard, from top left to bottom right."})]}),(0,s.jsxs)("ul",{id:"acknowledge",children:["Thanks to ",(0,s.jsx)("a",{href:"https://rory.ie",target:"_blank",children:"Rory Hughes"})," for help with coding",(0,s.jsx)("br",{})]}),(0,s.jsxs)(c.gq,{children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("form",{name:"edo-cal",children:[(0,s.jsxs)("span",{children:[(0,s.jsx)("i",{children:" f"}),(0,s.jsx)("sub",{children:"0"})," (Hz)"]}),(0,s.jsx)("input",{name:"f0",id:"f0",type:"text",placeholder:"e.g 110",size:"10",required:!0,value:Math.round(r),onChange:function(e){return i(Number(e.target.value))}}),(0,s.jsx)("input",{type:"range",min:"1",max:"20000",value:(Y=r,Math.log(Y)/49517e-8),className:"slider",onChange:function(e){return i(function(e){return Math.exp(49517e-8*e)}(Number(e.target.value)))}}),(0,s.jsx)("span",{children:"divisions"}),(0,s.jsx)("input",{name:"divisions",type:"text",placeholder:"max: 24",size:"10",required:!0,value:h,onChange:function(e){return f(Number(e.target.value))}}),(0,s.jsx)("input",{type:"range",min:"1",max:"24",value:h,className:"slider",onChange:function(e){return f(Number(e.target.value))}}),T&&(0,s.jsx)("p",{id:"invalid",children:"enter a valid number in both boxes"})]}),(0,s.jsx)("br",{}),(0,s.jsxs)("div",{className:"field",children:[(0,s.jsx)("span",{children:"oscillator"}),(0,s.jsxs)("select",{id:"oscillator-type",onChange:function(e){return x.synth.oscillator.type=e.target.value},children:[(0,s.jsx)("option",{value:"sine",children:"sine"}),(0,s.jsx)("option",{value:"triangle",children:"triangle"}),(0,s.jsx)("option",{value:"sawtooth",children:"sawtooth"}),(0,s.jsx)("option",{value:"square",children:"square"})]})]}),(0,s.jsxs)("div",{className:"slidecontainer",children:[Object.keys(m).map((function(e){var n=m[e],t=n.label,r=n.mapping,i=n.round,a=n.device,u=n.assign,c=k[e],l=r(c);x&&u(x[a],l);var d=i?Math.round(l):l.toFixed(2);return(0,s.jsx)(y,{label:t,displayValue:d,input:c,setInput:function(n){M(p(p({},k),{},(0,o.Z)({},e,n)))},midiInput:D&&D===e?"set":N[0][e],changeParameter:function(){return O(e)}},e)})),(0,s.jsx)("br",{}),(0,s.jsx)("button",{onClick:function(){E([{},{}]),localStorage.removeItem("midiMap")},className:"clear",children:"clear midi map"})]})]}),(0,s.jsx)(c.zh,{children:(0,s.jsx)("div",{id:"container",children:A&&z.map((function(n,t){return(0,s.jsx)("div",{className:"note",onMouseDown:e?void 0:function(){return x.synth.triggerAttack(n)},onTouchStart:e?function(){return x.synth.triggerAttack(n)}:void 0,onMouseUp:e?void 0:function(){return x.synth.triggerRelease()},onTouchEnd:e?function(){return x.synth.triggerAttack()}:void 0,onMouseLeave:e?void 0:function(){return x.synth.triggerRelease()},children:(0,s.jsx)("span",{children:A.get(g[t])})},n)}))})})]}),(0,s.jsx)("footer",{children:"\xa9 Richard Hughes 2021"})]})};var b=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,i.Z)(this,e),this.onDeviceInput=n.onDeviceInput||console.log}return(0,a.Z)(e,[{key:"start",value:function(){var e=this;return new Promise((function(n,t){e._requestAccess().then((function(t){e.initalize(t),n()})).catch((function(){return t("Something went wrong.")}))}))}},{key:"initalize",value:function(e){var n,t=h(e.inputs.values());try{for(t.s();!(n=t.n()).done;){var r=n.value;this.initalizeDevice(r)}}catch(i){t.e(i)}finally{t.f()}}},{key:"initalizeDevice",value:function(e){e.onmidimessage=this.onMessage.bind(this)}},{key:"onMessage",value:function(e){var n=(0,r.Z)(e.data,3),t=(n[0],n[1]),i=n[2];this.onDeviceInput({input:t,value:i})}},{key:"_requestAccess",value:function(){return new Promise((function(e,n){navigator.requestMIDIAccess?navigator.requestMIDIAccess().then(e).catch(n):n()}))}}]),e}()},3629:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/edo",function(){return t(7028)}])}},function(e){e.O(0,[400,774,888,179],(function(){return n=3629,e(e.s=n);var n}));var n=e.O();_N_E=n}]);