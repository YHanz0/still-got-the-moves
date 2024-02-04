import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import musicFile from './assets/music/sm3-drive-that-funky-soul.mp3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const root = ReactDOM.createRoot(document.getElementById('root'));

const audio = new Audio(musicFile);
audio.loop = true;
audio.muted = true; // Começa com áudio silenciado

const MuteUnmuteButton = () => {
  const [audioStarted, setAudioStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [buttonSize, setButtonSize] = useState('scale(1)');

  const handleButtonClick = () => {
    if (!audioStarted) {
      audio.muted = false;
      audio.play();
      setAudioStarted(true);
      setIsMuted(false);
    } else {
      if (audio.paused) {
        audio.play();
        setIsMuted(false);
      } else {
        audio.pause();
        setIsMuted(true);
      }
    }
  };

  useEffect(() => {
    const enableAudioOnInteraction = () => {
      handleButtonClick();
      document.removeEventListener('click', enableAudioOnInteraction);
    };

    document.addEventListener('click', enableAudioOnInteraction);

    return () => {
      document.removeEventListener('click', enableAudioOnInteraction);
    };
  }, [audioStarted]);

  return (
    <button
      onClick={handleButtonClick}
      style={{
        backgroundColor: '#b7344e',
        background: 'linear-gradient(to right, #7c5da1, #b7344e)',
        borderRadius: '10px',
        padding: '10px',
        border: 'none',
        cursor: 'pointer',
        transition: 'transform 0.3s ease-in-out',
        transform: buttonSize,
      }}
      onMouseOver={() => {
        setButtonSize('scale(1.1)');
      }}
      onMouseOut={() => {
        setButtonSize('scale(1)');
      }}
    >
      <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
    </button>
  );
};

// Render o botão mute/unmute
const muteButtonContainer = document.createElement('div');
muteButtonContainer.style.position = 'fixed';
muteButtonContainer.style.bottom = '10px';
muteButtonContainer.style.left = '10px';

document.body.appendChild(muteButtonContainer);

ReactDOM.render(<MuteUnmuteButton />, muteButtonContainer);

// Render o aplicativo principal
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();