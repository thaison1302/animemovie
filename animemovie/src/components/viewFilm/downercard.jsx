import '../../styles/downercard.css';

export const DownerCard = ({ 
  description, 
  rating = 5, 
  year = 2024, 
  views = 0,
  duration = "Full",
  quality = "HD",
  genres = [],
  country = "Japan"
}) => {
  return (
    <div className="downer-card">
      <div className="description-section">
        <p className="description-text">{description}</p>
      </div>
      
      <div className="rating-section">
        <div className="rating-stars">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`star ${i < Math.floor(rating) ? 'filled' : ''}`}>
              ★
            </span>
          ))}
        </div>
        <span className="rating-percentage">59%</span>
        <span className="rating-text">(From 59/10 to 40 members)</span>
      </div>

      <div className="meta-info">
        <div className="meta-item">
          <span className="meta-label">📺 Newest:</span>
          <span className="meta-value">{duration}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">📅 Year:</span>
          <span className="meta-value">{year}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">👁️ Views:</span>
          <span className="meta-value">{views.toLocaleString()}</span>
        </div>
      </div>

      <div className="quality-section">
        <div className="quality-badge quality-hd">{quality}</div>
      </div>

      <div className="genres-section">
        <span className="genres-label">Genres:</span>
        <div className="genres-list">
          {genres.map((genre, index) => (
            <span key={index} className="genre-tag">{genre}</span>
          ))}
        </div>
      </div>

      <div className="country-section">
        <span className="country-label">Country:</span>
        <span className="country-value">{country}</span>
      </div>
    </div>
  );
};
export default DownerCard;