import React from 'react';
import '../../styles/upperscreen.css';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import CommentIcon from '@mui/icons-material/Comment';
import FlashlightOffIcon from '@mui/icons-material/FlashlightOff';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import BugReportIcon from '@mui/icons-material/BugReport';
import CameraIcon from '@mui/icons-material/Camera';

const UpperScreen = ({
  film = {},
  selectedEpisode = null,
  title = "WEBSITE NÀY CÓ QUẢNG CÁO!",
  description = "KHÔNG CÓ QUẢNG CÁO THÌ DUY TRỈ WEBSITE MÃI SAO?!",
  subText = "NẾU BẠN DÙNG CHẶN QUẢNG CÁO VUI LÒNG TẮT ĐỂ ỨNG HỘ ANIMEVIETSUBB",
  hasPlayButton = true,
  controls = [
    { id: 1, icon: '>', label: 'next' },
    { id: 2, icon: 'Q', label: 'comment' },
    { id: 3, icon: 'o', label: 'lights off' },
    { id: 4, icon: 'v', label: 'follow' },
    { id: 5, icon: '@', label: 'zoom' },
    { id: 6, icon: '!', label: 'bug report' },
    { id: 7, icon: '()', label: 'picture' }
  ],
  servers = [
    { name: 'DU', color: '#FF4444' },
    { name: 'FB', color: '#66CC33' },
    { name: 'HDX(ADS)', color: '#99FF33' }
  ]
}) => {
  const [openFilm, setOpenFilm] = React.useState(false);

  const onPlayClick = () => {
    setOpenFilm(true);
  };

  const videoLink = selectedEpisode?.link || '';

  return (
    <div className="upperscreen-container">
      {/* Video Player Area */}
      <div className="video-player-area">
        {openFilm && videoLink ? (
          <iframe 
            width={'100%'} 
            height={'100%'} 
            src={`https://www.youtube.com/embed/${videoLink}`}
            security='false' 
            frameBorder="0" 
            allowFullScreen 
          ></iframe>
        ) : null}

        {/* Trang trí góc */}
        <div className="corner-decoration"></div>

        {/* Nội dung chính */}
        <div className="content-section">
          {/* Play Button */}
          {hasPlayButton && !openFilm && videoLink && (
            <button className="play-button" onClick={onPlayClick}>
              <div className="play-icon">▶</div>
            </button>
          )}
          {!videoLink && (
            <p style={{ color: 'white', textAlign: 'center' }}>
              Please select an episode
            </p>
          )}
        </div>
      </div>

      {/* Control Buttons */}
      <div className="controls-bar">
        {controls.map((control, index) => (
          <button key={index} className="control-btn" title={control.label}>
            {control.id === 1 && <SkipNextIcon />}
            {control.id === 2 && <CommentIcon />}
            {control.id === 3 && <FlashlightOffIcon />}     
            {control.id === 4 && <FollowTheSignsIcon />}
            {control.id === 5 && <ZoomInIcon />}
            {control.id === 6 && <BugReportIcon />}
            {control.id === 7 && <CameraIcon />}
            <span className="control-label">{control.label}</span>
          </button>
        ))}
      </div>

      {/* Server Selection */}
      <div className="server-section">
        <p className="server-label">servers</p>
        <div className="servers-container">
          {servers.map((server, index) => (
            <button
              key={index}
              className="server-btn"
              style={{ backgroundColor: server.color }}
            >
              {server.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpperScreen;
