import BottomButtons from './BottomButtons';
import Modal from 'react-responsive-modal';
import React from 'react';
import PomodoroIcons from './PomodoroIcons';
import DurationControls from './DurationControls';
const TimeFormat = require('hh-mm-ss');

const Timer = ({
  breakDuration,
  sessionDuration,
  increaseBreak,
  decreaseBreak,
  increaseSession,
  decreaseSession,
  isSession,
  sessionTimeLeft,
  breakTimeLeft,
  timerOn,
  startTimer,
  pauseTimer,
  resetTimer,
  volumeOn,
  toggleVolume,
  sessionNumber,
  onCloseModal,
  open,
}) => (
  <div className="timer">
    <DurationControls
      breakDuration={breakDuration}
      sessionDuration={sessionDuration}
      increaseBreak={increaseBreak}
      decreaseBreak={decreaseBreak}
      increaseSession={increaseSession}
      decreaseSession={decreaseSession}
    />

    {/* TIME REMAINING */}
    <p className="time-remaining">
      {isSession
        ? TimeFormat.fromS(sessionTimeLeft)
        : TimeFormat.fromS(breakTimeLeft)}
    </p>

    <BottomButtons
      timerOn={timerOn}
      startTimer={startTimer}
      pauseTimer={pauseTimer}
      resetTimer={resetTimer}
      volumeOn={volumeOn}
      toggleVolume={toggleVolume}
    />

    <PomodoroIcons sessionNumber={sessionNumber} />

    <Modal
      modalId="modal"
      open={open}
      onClose={onCloseModal}
      center
      className="modal"
    >
      <div className="modal-text">
        <p>You finished a pomodoro cycle—great work!</p>
        <p>
          Time to take a long break (15–30 minutes). When you're ready to begin
          another cycle, just click restart. (Or come back another day.)
        </p>
      </div>
    </Modal>
  </div>
);

export default Timer;
