(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(24)},18:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),s=a.n(r),o=(a(18),a(8)),c=a(9),m=a(11),u=a(10),l=a(12),b=a(3),d=a(2),D=function(e){return i.a.createElement("div",{className:"timer"},i.a.createElement("div",{className:"duration-controls"},i.a.createElement("div",{className:"duration-control-group-with-label"},i.a.createElement("p",{className:"duration-label"},"Break"),i.a.createElement("div",{className:"duration-control-group-without-label"},i.a.createElement(b.a,{icon:d.b,onClick:e.increaseBreakDuration,className:"btn duration-change-btn",size:"3x"}),i.a.createElement("p",{className:"duration"},e.breakDuration/60),i.a.createElement(b.a,{icon:d.a,onClick:e.decreaseBreakDuration,className:"btn duration-change-btn",size:"3x"}))),i.a.createElement("span",{className:"between-duration-controls"}),i.a.createElement("div",{className:"duration-control-group-with-label"},i.a.createElement("p",{className:"duration-label"},"Session"),i.a.createElement("div",{className:"duration-control-group-without-label"},i.a.createElement(b.a,{icon:d.b,onClick:e.increaseSessionDuration,className:"btn duration-change-btn",size:"3x"}),i.a.createElement("p",{className:"duration"},e.sessionDuration/60),i.a.createElement(b.a,{icon:d.a,onClick:e.decreaseSessionDuration,className:"btn duration-change-btn",size:"3x"})))),i.a.createElement("p",{className:"time-remaining"},e.timeRemaining),i.a.createElement("div",{className:"bottom-btns"},i.a.createElement("div",{className:e.timerOn?"hidden":""},i.a.createElement(b.a,{role:"button",onClick:e.startTimer,icon:d.d,className:"btn bottom-btn",size:"3x"})),i.a.createElement("div",{className:!1===e.timerOn?"hidden":""},i.a.createElement(b.a,{role:"button",onClick:e.pauseTimer,icon:d.c,className:"btn bottom-btn",size:"3x"})),i.a.createElement(b.a,{role:"button",onClick:e.resetTimer,icon:d.e,className:"btn bottom-btn",size:"3x"})))},k=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(u.a)(t).call(this))).decreaseBreakDuration=function(){60!==e.state.breakDuration&&e.setState({breakDuration:e.state.breakDuration-60})},e.increaseBreakDuration=function(){e.setState({breakDuration:e.state.breakDuration+60})},e.decreaseSessionDuration=function(){300!==e.state.sessionDuration&&e.setState({sessionDuration:e.state.sessionDuration-60,timeRemaining:e.state.timeRemaining-60})},e.increaseSessionDuration=function(){e.setState({sessionDuration:e.state.sessionDuration+60,timeRemaining:e.state.timeRemaining+60})},e.startTimer=function(){e.setState({timerOn:!0}),e.time=setInterval(function(){return e.setState({timeRemaining:e.state.timeRemaining-1})},1e3)},e.pauseTimer=function(){clearInterval(e.time),e.setState({timerOn:!1})},e.resetTimer=function(){clearInterval(e.time),e.setState({timerOn:!1,timeRemaining:e.state.sessionDuration})},e.state={sessionDuration:1500,breakDuration:300,timeRemaining:1500,timerOn:!1},e}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(D,{breakDuration:this.state.breakDuration,sessionDuration:this.state.sessionDuration,decreaseBreakDuration:this.decreaseBreakDuration,increaseBreakDuration:this.increaseBreakDuration,decreaseSessionDuration:this.decreaseSessionDuration,increaseSessionDuration:this.increaseSessionDuration,timeRemaining:this.state.timeRemaining,timerOn:this.state.timerOn,startTimer:this.startTimer,pauseTimer:this.pauseTimer,resetTimer:this.resetTimer})}}]),t}(n.Component);s.a.render(i.a.createElement(k,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.e8605165.chunk.js.map