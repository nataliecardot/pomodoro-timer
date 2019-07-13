import React, { Component } from 'react';
import Timer from './Timer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      sessionDuration: 1500,
      breakDuration: 300,
      countingDown: false,

    };
  }

  // Using property initializer syntax to avoid need to bind, since arrow functions don't create their own this context and use value of enclosing context instead. transform-class-properties Babel plugin necessary to use this syntax (included in Create React App). Refer to https://itnext.io/property-initializers-what-why-and-how-to-use-it-5615210474a3 for more details

  // DURATION CHANGES

  decreaseBreakDuration = () => {

  }

  increaseBreakDuration = () => {

  }

  decreaseSessionDuration = () => {

  }

  increaseSessionDuration = () => {

  }

  // PLAY, PAUSE, RESTART BUTTONS

  handlePlayBtnClick = () => {

  }

  handlePauseBtnClick = () => {

  }

  handleRestartBtnClick = () => {

  }


  render() {
    return (
      <Timer
        sessionDuration={this.state.sessionDuration}
        breakDuration={this.state.breakDuration}
        countingDown={this.state.countingDown}

        decreaseBreakDuration={this.decreaseBreakDuration}
        increaseBreakDuration={this.increaseBreakDuration}
        decreaseSessionDuration={this.decreaseSessionDuration}
        increaseSessionDuration={this.increaseSessionDuration}

        handlePlayBtnClick={this.handlePlayBtnClick}
        handlePauseBtnClick={this.handlePauseBtnClick}
        handleRestartBtnClick={this.handleRestartBtnClick}
      />
    );
  };
}

export default App;
