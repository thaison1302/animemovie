import React from 'react';
import '../../styles/upperscreen.css';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import CommentIcon from '@mui/icons-material/Comment';
import FlashlightOffIcon from '@mui/icons-material/FlashlightOff';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import BugReportIcon from '@mui/icons-material/BugReport';
import CameraIcon from '@mui/icons-material/Camera';
import { useLocation } from 'react-router';
const UpperScreen = ({
  title = "WEBSITE NÀY CÓ QUẢNG CÁO!",
  description = "KHÔNG CÓ QUẢNG CÁO THÌ DUY TRỈ WEBSITE MÃI SAO?!",
  subText = "NẾU BẠN DÙNG CHẶN QUẢNG CÁO VUI LÒNG TẮT ĐỂ ỨNG HỘ ANIMEVIETSUBB",
  hasPlayButton = true,
  // onPlayClick = () => {},
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

  const paramsSearch = useLocation()
  console.log(paramsSearch)

  const videoId = paramsSearch.pathname.split('/')[2]
  const linkF = paramsSearch.pathname.split('/')[3]
  

  const [openFilm, setOpenFilm] = React.useState(false)
  const onPlayClick = () => {
    setOpenFilm(true)
  }
  return (
    <div className="upperscreen-container">
      {/* Video Player Area */}

      <div className="video-player-area">
        {openFilm && <iframe width={'100%'} height={'100%'} src={`https://www.youtube.com/embed/${linkF}`} security='false' frameborder="0" allowfullscreen ></iframe>}

        {/* Trang trí góc */}
        <div className="corner-decoration"></div>

        {/* Nội dung chính */}

        <div className="content-section">
          {/* <h1 className="main-title">{title}</h1> */}
          {/* <p className="description">{description}</p> */}
          {/* Play Button */}
          {hasPlayButton && !openFilm && (
            <button className="play-button" onClick={onPlayClick}>
              <div className="play-icon">▶</div>
            </button>
          )}

          {/* <p className="sub-text">{subText}</p> */}
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
        <p className="server-label">download</p>
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

      {/* Chọn Server */}
      <div className="choose-server">
        <p>Choose Server:</p>
      </div>
    </div>
  );
};

export default UpperScreen;