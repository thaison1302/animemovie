import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft, faHeart } from "@fortawesome/free-solid-svg-icons";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const Infomation = ({
  logoSrc = 'https://via.placeholder.com/150x50?text=AIHub',
  menuItems = [
    { label: 'WATCH', href: '#watch' },
    { label: 'DONATE ', href: '#donate' },
    { label: 'CHAT ANIME/DISCORD', href: '#chat' },
    { label: 'GLOSSARY', href: '#glossary' },
    { label: 'GROUP DISCUSSION', href: '#group' }
  ],
  socialLinks = [
    { id:1, icon: 'fab fa-facebook-f', href: 'https://facebook.com', label: 'Facebook' },
    { id:2, icon: 'fab fa-instagram', href: 'https://instagram.com', label: 'Instagram' },
    { id:3, icon: 'fab fa-twitter', href: 'https://twitter.com', label: 'Twitter' },
    { id:4, icon: 'fab fa-youtube', href: 'https://youtube.com', label: 'YouTube' }
  ],
  onLogoClick = () => window.scrollTo({ top: 0, behavior: 'smooth' }),
  onScrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
}) => {
  return (
    <nav className="navbar">

      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" onClick={onLogoClick}>
          
        </div>

        {/* Menu Items */}
        <ul className="navbar-menu">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
              <a href={item.href} className="menu-link">
                {item.label}
                {item.label === 'DONATE ' && <FontAwesomeIcon icon={faHeart} className="donate-icon" />}
              </a>


            </li>
          ))}
        </ul>

        {/* Social Links */}
        <div className="navbar-social">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title={social.label}
            >
              {social.id === 1 && <FacebookIcon />}
              {social.id === 2 && <InstagramIcon />}
              {social.id === 3 && <TwitterIcon />}
              {social.id === 4 && <YouTubeIcon />}
              {/* <i className={social.icon}>
                {social.label === 'DONATE ' && <FontAwesomeIcon icon={faHeart} className="donate-icon" />}
              </i> */}
            </a>
          ))}
        </div>

        {/* Scroll to Top Button */}
        <button className="scroll-top-btn" onClick={onScrollTop} title="Lên đầu trang">
          <ArrowUpwardIcon />
        </button>
      </div>
    </nav>
  );
};

export default Infomation;