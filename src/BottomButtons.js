import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const BottomButtons = ({
  timerOn,
  startTimer,
  pauseTimer,
  resetTimer,
  toggleVolume,
  volumeOn,
}) => (
  <div className="bottom-btns">
    <div className={timerOn ? 'hidden' : null}>
      <FontAwesomeIcon
        role="button"
        onClick={startTimer}
        icon={faPlay}
        className="btn bottom-btn"
        size="2x"
      />
    </div>

    <div className={timerOn === false ? 'hidden' : null}>
      <FontAwesomeIcon
        role="button"
        onClick={pauseTimer}
        icon={faPause}
        className="btn bottom-btn"
        size="2x"
      />
    </div>

    <FontAwesomeIcon
      role="button"
      onClick={resetTimer}
      icon={faUndo}
      className="btn bottom-btn"
      size="2x"
    />

    <div className={volumeOn ? null : 'hidden'}>
      <FontAwesomeIcon
        role="button"
        onClick={toggleVolume}
        icon={faVolumeUp}
        className="btn bottom-btn"
        size="2x"
      />
    </div>

    <div className={volumeOn ? 'hidden' : null}>
      <FontAwesomeIcon
        role="button"
        onClick={toggleVolume}
        icon={faVolumeMute}
        className="btn bottom-btn"
        size="2x"
      />
    </div>
  </div>
);

export default BottomButtons;
