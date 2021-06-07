(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[575],{5458:function(e,n,t){"use strict";t.r(n);var r=t(4121),i=t(4047),a=t(2700),o=t(6265),s=t(9999),c=t(5893),u=t(7771),l=t(7294),d=t(7423);function h(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return f(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,s=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||null==t.return||t.return()}finally{if(s)throw a}}}}function f(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=["Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash"],m={attack:{label:"attack (s)",mapping:function(e){return(10*Math.exp(.0206*e)-10)/6.342},round:!1,device:"synth",assign:function(e,n){e.envelope.attack=n,e.modulationEnvelope.attack=n}},release:{label:"release (s)",mapping:function(e){return(10*Math.exp(.0206*e)-10)/3.9635},round:!1,device:"synth",assign:function(e,n){e.envelope.release=n,e.modulationEnvelope.release=n}},modulation:{label:"modulation",mapping:function(e){return 7.884*(10*Math.exp(.0206*e)-10)},round:!0,device:"synth",assign:function(e,n){return e.modulationIndex.value=n}},reverb:{label:"reverb",mapping:function(e){return e/127},round:!1,device:"reverb",assign:function(e,n){return e.wet.value=n}},feedback:{label:"feedback",mapping:function(e){return e/158},round:!1,device:"delay",assign:function(e,n){e.feedback.value=n}},time:{label:"time (s)",mapping:function(e){return(10*Math.exp(.0206*e)-10)/12.68},round:!1,device:"delay",assign:function(e,n){return e.delayTime.value=n}},lowpass:{label:"lowpass (Hz)",mapping:function(e){return 157.32*(Math.exp(.038205*e)-1)+20},round:!0,device:"lowpass",assign:function(e,n){return e.frequency.value=n}},gain:{label:"gain",mapping:function(e){return e/127},round:!1,device:"gain",assign:function(e,n){return e.gain.value=n}}},y=function(e){var n=e.label,t=e.displayValue,r=e.input,i=e.setInput,a=e.midiInput,o=e.changeParameter;return(0,c.jsxs)("div",{children:[(0,c.jsx)("p",{children:n}),(0,c.jsx)("span",{children:t}),(0,c.jsx)("button",{className:"midimap",onClick:o,children:a?"set"===a?"map":"".concat(a):"map"}),(0,c.jsx)("input",{type:"range",min:"0",max:"127",value:r,className:"slider",onChange:function(e){return i(Number(e.target.value))}})]})};n.default=function(){var e=(0,l.useRef)(null),n=(0,l.useState)(),t=n[0],r=n[1],i=(0,l.useState)(),a=i[0],h=i[1],f=(0,l.useState)(null),p=f[0],x=f[1],j=(0,l.useState)({attack:127*Math.random(),release:127*Math.random(),modulation:127*Math.random(),reverb:127*Math.random(),feedback:127*Math.random(),time:127*Math.random(),lowpass:122*Math.random()+5,gain:101}),w=j[0],k=j[1],M=(0,l.useState)(),D=M[0],S=M[1],O=(0,l.useState)([{},{}]),K=O[0],E=O[1],I=(0,l.useState)(),N=I[0],A=I[1],_=(0,l.useState)([]),P=_[0],C=_[1],q=(0,l.useState)(0),Z=q[0],z=q[1],T=(0,l.useState)(),R=T[0],L=T[1],H=isNaN(t)||isNaN(a)||a<1||a>24||t<1,B=[],V=2*a;if(!H)for(var F=0,G=(0,s.Z)(Array(V).keys());F<G.length;F++){var J=G[F];0===J?B.push(t):B.push(Math.pow(2,1/a)*B[J-1])}var U=function(e){var n=e.input,t=e.value;if(D){var r=v(v({},K[0]),{},(0,o.Z)({},D,n)),i=Object.keys(r).reduce((function(e,n){return v(v({},e),{},(0,o.Z)({},r[n],e[r[n]]?e[r[n]].concat([n]):[n]))}),{}),a=[r,i];E(a),S(void 0),localStorage.midiMap=JSON.stringify(a)}else{var s=K[1][n];if(s){var c=v({},w);s.forEach((function(e){return c[e]=t})),k(c)}}};(0,l.useEffect)((function(){if(e.current){console.log("setting message callback");var n=U;window.onDeviceInput=n,e.current.onDeviceInput=n}}),[D,w,K]),(0,l.useEffect)((function(){if(p||x(function(){var e=new d.S9(.8),n=new d.S9(.8),t=new d.E8({wet:.6,decay:30}),r=new d.D0({time:.1,feedback:.7,wet:.5}),i=new d.wn(2e3,"lowpass");return e.connect(t),t.connect(r),r.connect(i),i.connect(n),n.toDestination(),{synth:new d.tC({oscillator:{type:"sine"},modulationIndex:10,modulation:{type:"sawtooth"},modulationEnvelope:{attack:5,release:9},envelope:{attack:3,decay:3,sustain:.8,release:8,attackCurve:"sine"}}).connect(e),lowpass:i,delay:r,reverb:t,gain:n}}()),!e.current){var n=new b;n.start().then((function(){console.log("Started!")})).catch(console.error),e.current=n}if(localStorage.midiMap){var t=JSON.parse(localStorage.midiMap);E(t)}navigator&&navigator.keyboard&&navigator.keyboard.getLayoutMap().then((function(e){A(e)}))}),[]),(0,l.useEffect)((function(){var e=function(e){console.log(e.code);var n=g.indexOf(e.code);-1!==n&&n<B.length&&p.synth.triggerAttack(B[n])},n=function(e){return p.synth.triggerRelease()};return document.addEventListener("keydown",e),document.addEventListener("keyup",n),function(){document.removeEventListener("keydown",e),document.removeEventListener("keyup",n)}}),[B,p]),(0,l.useEffect)((function(){if(0!==Z){if(R&&(new Date).getTime()>=R)return console.log("autoend"),L(void 0),C([]),void z(0);X();var e=Math.floor(15*Math.random())+15;console.log("setupnext",e),setTimeout((function(){z(Z+1)}),1e3*e)}}),[Z]);var X=function(){P.length<2?Q():2===P.length?Math.random()>.5?Q():Y():P.length>2&&P.length<6&&Math.random()>.8?Q():Y()},Q=function(){var e;do{e=Math.floor(14*Math.random())}while(P.includes(e));var n=[].concat((0,s.Z)(P),[e]);console.log("adding",P,e,n),C(n)},Y=function(){var e=Math.floor(Math.random()*P.length),n=[].concat((0,s.Z)(P.slice(0,e)),(0,s.Z)(P.slice(e+1,P.length)));console.log("removing",P,"index",e,n),C(n)};return(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{class:"deeper",children:[(0,c.jsx)("h1",{children:(0,c.jsx)("a",{href:"index.html",title:"Get me out of here!",children:"Richard Hughes"})}),(0,c.jsx)("h2",{children:"Equal Divisons of the Octave Synth [beta]"})]}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:"Generate a microtonal synth by entering in the starting frequency and the amount of ocatve divisions."}),(0,c.jsx)("li",{children:"You can MIDI map your own deivce to the sliders and the map will be stored locally."}),(0,c.jsx)("li",{children:"The keys are assigned to your computer keyboard, from top left to bottom right."}),(0,c.jsx)("li",{children:"[A series of graphics will appear for you to musically interpret using the synth.]"})]}),(0,c.jsxs)("ul",{id:"acknowledge",children:["Thanks to ",(0,c.jsx)("a",{href:"https://rory.ie",target:"_blank",children:"Rory Hughes"})," for help with coding",(0,c.jsx)("br",{}),"&",(0,c.jsx)("br",{}),(0,c.jsx)("a",{href:"http://evangelineallize.com/",target:"_blank",children:"Evang\xe9line Durand-Alliz\xe9"})," & ",(0,c.jsx)("a",{href:"https://www.instagram.com/vivienjunebruschi/",target:"_blank",children:"Viven Bruschi"})," for the graphics"]}),(0,c.jsxs)(u.gq,{children:[(0,c.jsxs)("div",{children:[(0,c.jsxs)("form",{name:"edo-cal",children:[(0,c.jsxs)("span",{children:[(0,c.jsx)("i",{children:" f"}),(0,c.jsx)("sub",{children:"0"})," (Hz)"]}),(0,c.jsx)("input",{name:"f0",id:"f0",type:"text",placeholder:"e.g 110",size:"10",required:!0,onChange:function(e){return r(Number(e.target.value))}}),(0,c.jsx)("span",{children:"divisions"}),(0,c.jsx)("input",{name:"divisions",type:"text",placeholder:"max: 24",size:"10",required:!0,onChange:function(e){return h(Number(e.target.value))}}),H&&(0,c.jsx)("p",{id:"invalid",children:"enter a valid number in both boxes"})]}),(0,c.jsx)("br",{}),(0,c.jsxs)("div",{className:"field",children:[(0,c.jsx)("span",{children:"oscillator"}),(0,c.jsxs)("select",{id:"oscillator-type",onChange:function(e){return p.synth.oscillator.type=e.target.value},children:[(0,c.jsx)("option",{value:"sine",children:"sine"}),(0,c.jsx)("option",{value:"triangle",children:"triangle"}),(0,c.jsx)("option",{value:"sawtooth",children:"sawtooth"}),(0,c.jsx)("option",{value:"square",children:"square"})]})]}),(0,c.jsxs)("div",{className:"slidecontainer",children:[Object.keys(m).map((function(e){var n=m[e],t=n.label,r=n.mapping,i=n.round,a=n.device,s=n.assign,u=w[e],l=r(u);p&&s(p[a],l);var d=i?Math.round(l):l.toFixed(2);return(0,c.jsx)(y,{label:t,displayValue:d,input:u,setInput:function(n){k(v(v({},w),{},(0,o.Z)({},e,n)))},midiInput:D&&D===e?"set":K[0][e],changeParameter:function(){return S(e)}},e)})),(0,c.jsx)("br",{}),(0,c.jsx)("button",{onClick:function(){E([{},{}]),localStorage.removeItem("midiMap")},className:"clear",children:"clear midi map"})]})]}),(0,c.jsxs)(u.zh,{children:[(0,c.jsx)("button",{id:"begin",onClick:function(){R?(z(0),L(void 0),C([])):(L((new Date).getTime()+36e4),z(1))},children:R?"stop":"start"}),(0,c.jsx)(u.rF,{children:(0,s.Z)(Array(14).keys()).map((function(e){return(0,c.jsx)(u.a4,{visible:P.includes(e),src:"edographics/".concat(e,".png")},e)}))})]})]}),(0,c.jsx)("div",{id:"container",children:B.map((function(e,n){return(0,c.jsx)("div",{className:"note",onMouseDown:function(){return p.synth.triggerAttack(e)},onMouseUp:function(){return p.synth.triggerRelease()},onMouseLeave:function(){return p.synth.triggerRelease()},children:(0,c.jsx)("span",{children:N.get(g[n])})},e)}))}),(0,c.jsx)("footer",{children:"\xa9 Richard Hughes 2021"})]})};var b=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,i.Z)(this,e),this.onDeviceInput=n.onDeviceInput||console.log}return(0,a.Z)(e,[{key:"start",value:function(){var e=this;return new Promise((function(n,t){e._requestAccess().then((function(t){e.initalize(t),n()})).catch((function(){return t("Something went wrong.")}))}))}},{key:"initalize",value:function(e){var n,t=h(e.inputs.values());try{for(t.s();!(n=t.n()).done;){var r=n.value;this.initalizeDevice(r)}}catch(i){t.e(i)}finally{t.f()}}},{key:"initalizeDevice",value:function(e){e.onmidimessage=this.onMessage.bind(this)}},{key:"onMessage",value:function(e){var n=(0,r.Z)(e.data,3),t=(n[0],n[1]),i=n[2];this.onDeviceInput({input:t,value:i})}},{key:"_requestAccess",value:function(){return new Promise((function(e,n){navigator.requestMIDIAccess?navigator.requestMIDIAccess().then(e).catch(n):n()}))}}]),e}()},2222:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/edomidi",function(){return t(5458)}])}},function(e){e.O(0,[400,774,888,179],(function(){return n=2222,e(e.s=n);var n}));var n=e.O();_N_E=n}]);