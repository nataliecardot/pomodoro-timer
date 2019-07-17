import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const BottomButtons = (props) => (
  <div className="bottom-btns">

    <div className={props.timerOn ? 'hidden' : null}>
      <FontAwesomeIcon
        role="button"
        onClick={props.startTimer}
        icon={faPlay}
        className="btn bottom-btn"
        size="2x"
      />
    </div>

    <div className={props.timerOn === false ? 'hidden' : null}>
      <FontAwesomeIcon
        role="button"
        onClick={props.pauseTimer}
        icon={faPause}
        className="btn bottom-btn"
        size="2x"
      />
    </div>

    <FontAwesomeIcon
      role="button"
      onClick={props.resetTimer}
      icon={faUndo}
      className="btn bottom-btn"
      size="2x"
    />

    <div className={props.volumeOn ? null : 'hidden'}>
      <FontAwesomeIcon
        role="button"
        onClick={props.toggleVolume}
        icon={faVolumeUp}
        className="btn bottom-btn"
        size="2x"
      />
    </div>

    <div className={props.volumeOn ? 'hidden' : null}>
      <FontAwesomeIcon
        role="button"
        onClick={props.toggleVolume}
        icon={faVolumeMute}
        className="btn bottom-btn"
        size="2x"
      />
    </div>

  </div>
);

export default BottomButtons;
