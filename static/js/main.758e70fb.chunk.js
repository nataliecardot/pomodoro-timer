(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,n){e.exports=n.p+"static/media/chime.a5ef0ade.mp3"},15:function(e,a,n){e.exports=n(28)},20:function(e,a,n){},28:function(e,a,n){"use strict";n.r(a);var s=n(0),t=n.n(s),i=n(10),o=n.n(i),r=(n(20),n(13)),c=n(11),m=n(14),l=n(6),u=n(7),b=n(2),d=n(3),k=n(4),D=function(e){return t.a.createElement("div",null,0===e.sessionNumber?t.a.createElement(b.a,{icon:k.b,size:"2x",className:"session-checkbox"}):t.a.createElement(b.a,{icon:k.a,size:"2x",className:"session-checkbox"}),e.sessionNumber<2?t.a.createElement(b.a,{icon:k.b,size:"2x",className:"session-checkbox"}):t.a.createElement(b.a,{icon:k.a,size:"2x",className:"session-checkbox"}),e.sessionNumber<3?t.a.createElement(b.a,{icon:k.b,size:"2x",className:"session-checkbox"}):t.a.createElement(b.a,{icon:k.a,size:"2x",className:"session-checkbox"}),e.sessionNumber<4?t.a.createElement(b.a,{icon:k.b,size:"2x",className:"session-checkbox"}):t.a.createElement(b.a,{icon:k.a,size:"2x",className:"session-checkbox"}))},h=function(e){return t.a.createElement("div",{className:"duration-controls"},t.a.createElement("div",{className:"duration-control-group-with-label"},t.a.createElement("p",{className:"duration-label"},"Break",t.a.createElement("br",null),"Length"),t.a.createElement("div",{className:"duration-control-group-without-label"},t.a.createElement(b.a,{icon:d.b,onClick:e.increaseBreakDuration,className:"duration-change-btn",size:"2x"}),t.a.createElement("p",{className:"duration"},e.breakDuration),t.a.createElement(b.a,{icon:d.a,onClick:e.decreaseBreakDuration,className:"duration-change-btn",size:"2x"}))," ")," ",t.a.createElement("span",{className:"between-duration-controls"}),t.a.createElement("div",{className:"duration-control-group-with-label"},t.a.createElement("p",{className:"duration-label"},"Session",t.a.createElement("br",null),"Length"),t.a.createElement("div",{className:"duration-control-group-without-label"},t.a.createElement(b.a,{icon:d.b,onClick:e.increaseSessionDuration,className:"duration-change-btn",size:"2x"}),t.a.createElement("p",{className:"duration"},e.sessionDuration),t.a.createElement(b.a,{icon:d.a,onClick:e.decreaseSessionDuration,className:"duration-change-btn",size:"2x"}))," ")," ")},g=n(26),S=function(e){return t.a.createElement("div",{className:"timer"},t.a.createElement(h,{breakDuration:e.breakDuration,sessionDuration:e.sessionDuration,increaseBreakDuration:e.increaseBreakDuration,decreaseBreakDuration:e.decreaseBreakDuration,increaseSessionDuration:e.increaseSessionDuration,decreaseSessionDuration:e.decreaseSessionDuration}),t.a.createElement("p",{className:"time-remaining"},e.isSession?g.fromS(e.sessionTimeRemaining):g.fromS(e.breakTimeRemaining)),t.a.createElement("div",{className:"bottom-btns"},t.a.createElement("div",{className:e.timerOn?"hidden":""},t.a.createElement(b.a,{role:"button",onClick:e.startTimer,icon:d.d,className:"btn bottom-btn",size:"4x"})),t.a.createElement("div",{className:!1===e.timerOn?"hidden":""},t.a.createElement(b.a,{role:"button",onClick:e.pauseTimer,icon:d.c,className:"btn bottom-btn",size:"4x"})),t.a.createElement(b.a,{role:"button",onClick:e.resetTimer,icon:d.e,className:"btn bottom-btn",size:"4x"}))," ",t.a.createElement(D,{sessionNumber:e.sessionNumber}))},N=n(12),E=n.n(N),T=new(function(){function e(a){Object(l.a)(this,e),this.sound=new Audio(a)}return Object(u.a)(e,[{key:"playSound",value:function(){return this.sound.play()}}]),e}())(E.a),p=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(r.a)(this,Object(c.a)(a).call(this))).decreaseBreakDuration=function(){60!==e.state.breakDuration&&e.setState({breakDuration:e.state.breakDuration-60})},e.increaseBreakDuration=function(){e.setState({breakDuration:e.state.breakDuration+60})},e.decreaseSessionDuration=function(){300!==e.state.sessionDuration&&e.setState({sessionDuration:e.state.sessionDuration-60,sessionTimeRemaining:e.state.sessionTimeRemaining-60})},e.increaseSessionDuration=function(){e.setState({sessionDuration:e.state.sessionDuration+60,sessionTimeRemaining:e.state.sessionTimeRemaining+60})},e.manageBreak=function(){e.time=setInterval(function(){e.setState({breakTimeRemaining:e.state.breakTimeRemaining-1}),0===e.state.breakTimeRemaining&&e.handleBreakComplete()},1e3)},e.manageSession=function(){e.time=setInterval(function(){e.setState({sessionTimeRemaining:e.state.sessionTimeRemaining-1}),0===e.state.sessionTimeRemaining&&e.handleSessionComplete()},1e3)},e.handleSessionComplete=function(){clearInterval(e.time),e.playAlarm(),e.setState({sessionNumber:e.state.sessionNumber+1}),4===e.state.sessionNumber?e.handlePomodoroCycleDone():e.setState({timerOn:!1,sessionTimeRemaining:e.state.sessionDuration,breakTimeRemaining:e.state.breakDuration,isSession:!e.state.isSession})},e.handlePomodoroCycleDone=function(){console.log("Great work! You finished a pomodoro cycle (four sessions). Time to relax."),e.setState({isSession:!0,timerOn:!1,sessionDuration:5,breakDuration:3,sessionTimeRemaining:5})},e.handleBreakComplete=function(){clearInterval(e.time),e.playAlarm(),e.setState({timerOn:!1,sessionTimeRemaining:e.state.sessionDuration,breakTimeRemaining:e.state.breakDuration,isSession:!e.state.isSession})},e.startTimer=function(){e.setState({timerOn:!0}),e.state.isSession?e.manageSession():e.manageBreak()},e.pauseTimer=function(){clearInterval(e.time),e.setState({timerOn:!1})},e.resetTimer=function(){clearInterval(e.time),e.setState({timerOn:!1,sessionDuration:5,breakDuration:3,sessionTimeRemaining:5,breakTimeRemaining:3,sessionNumber:0})},e.state={sessionDuration:5,breakDuration:3,sessionTimeRemaining:5,breakTimeRemaining:3,isSession:!0,timerOn:!1,sessionNumber:0},e.alarm=T,e}return Object(m.a)(a,e),Object(u.a)(a,[{key:"playAlarm",value:function(){var e=this.alarm.playSound();void 0!==e&&e.then(function(){console.log("Alarm audio playback started.")}).catch(function(e){console.log("Alarm audio playback error: ".concat(e.message))})}},{key:"render",value:function(){return t.a.createElement(S,{breakDuration:this.state.breakDuration,sessionDuration:this.state.sessionDuration,decreaseBreakDuration:this.decreaseBreakDuration,increaseBreakDuration:this.increaseBreakDuration,decreaseSessionDuration:this.decreaseSessionDuration,increaseSessionDuration:this.increaseSessionDuration,sessionTimeRemaining:this.state.sessionTimeRemaining,breakTimeRemaining:this.state.breakTimeRemaining,timerOn:this.state.timerOn,sessionNumber:this.state.sessionNumber,isSession:this.state.isSession,startTimer:this.startTimer,pauseTimer:this.pauseTimer,resetTimer:this.resetTimer})}}]),a}(s.Component);o.a.render(t.a.createElement(p,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.758e70fb.chunk.js.map