import React, { useState } from 'react';
import '../../styles/downerscreen.css';
import Comment from './comment';
import { commentService } from '../../services/api';
import { useEffect } from 'react';

const LowerScreen = (props) => {
  const { episodes = [], film, onSelectEpisode, selectedEpisode } = props;
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  
  const handleEpisodeClick = (episode) => {
    if (onSelectEpisode) {
      onSelectEpisode(episode);
    }
  };

  const handleAddComment = async(newComment) => {
    console.log(film)
    const commentData = await commentService.createComment(newComment);
    console.log("da tao comment thanh cong")
    const newComments = await commentService.findCommentsByMovie(film._id);
    console.log("new comments = ", newComments);
    setComments(newComments);
  };
  const fetchComments = async () => {
    const newComments = await commentService.findCommentsByMovie(film._id);
    console.log("new comments = ", newComments);
    setComments(newComments);
  }; 

  useEffect(() => {
   fetchComments()
}, [])
  return (
    <div className="lowerscreen-container">

      <div className="comment-toggle-section">
        <button
          className="toggle-comments-btn"
          onClick={() => setShowComments(!showComments)}
        >
          {showComments ? '▼ Ẩn bình luận' : '▶ Hiển thị bình luận'}
        </button>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="expandable-comments">
          <Comment comments={comments} onAddComment={handleAddComment} movieId={film._id}/>
          
        </div>
      )}

      <div className="episode-header">
        <h2 className="episode-title">Episodes</h2>
      </div>

      <div className="episodes-grid">
        {episodes.length > 0 ? (
          episodes.map((episode) => (
            <button
              key={episode._id}
              className={`episode-btn ${
                selectedEpisode?._id === episode._id ? 'active' : ''
              }`}
              onClick={() => handleEpisodeClick(episode)}
              title={episode.name}
            >
              {String(episode.episodeNumber).padStart(2, '0')}
            </button>
          ))
        ) : (
          <p>No episodes available</p>
        )}
      </div>
    </div>
  );
};

export default LowerScreen;