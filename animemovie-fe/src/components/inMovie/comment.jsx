import React, { useState } from 'react';
import '../../styles/comment.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import moment from 'moment';

const Comment = ({ comments = [], onAddComment, movieId }) => {
  const [newComment, setNewComment] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [likedComments, setLikedComments] = useState(new Set());
  const [dislikedComments, setDislikedComments] = useState(new Set());

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = { accountId: "6a088d2f796620b3d87fe0a5", movieId: movieId, value: newComment };
      onAddComment(comment);
      setNewComment('');
    }
  };

  const handleLike = (commentId) => {
    if (likedComments.has(commentId)) {
      likedComments.delete(commentId);
    } else {
      likedComments.add(commentId);
      dislikedComments.delete(commentId);
    }
    setLikedComments(new Set(likedComments));
    setDislikedComments(new Set(dislikedComments));
  };

  const handleDislike = (commentId) => {
    if (dislikedComments.has(commentId)) {
      dislikedComments.delete(commentId);
    } else {
      dislikedComments.add(commentId);
      likedComments.delete(commentId);
    }
    setDislikedComments(new Set(dislikedComments));
    setLikedComments(new Set(likedComments));
  };

  const sortedComments = [...comments].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.timestamp) - new Date(a.timestamp);
    } else if (sortBy === 'oldest') {
      return new Date(a.timestamp) - new Date(b.timestamp);
    } else if (sortBy === 'popular') {
      return b.likes - a.likes;
    }
    return 0;
  });

  return (
    <div className="comment-section">
      {/* Comment Input */}
      <div className="comment-input-container">
        <img
          src="https://i.pravatar.cc/40?img=1"
          alt="avatar"
          className="comment-avatar"
        />
        <div className="comment-input-wrapper">
          <input
            type="text"
            placeholder="Thêm bình luận..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
            className="comment-input"
          />
          <div className="comment-input-actions">
            <button
              onClick={handleAddComment}
              disabled={!newComment.trim()}
              className="comment-submit-btn"
            >
              Comment
            </button>
            <button
              onClick={() => setNewComment('')}
              className="comment-cancel-btn"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Sort Options */}
      <div className="comment-sort">
        <span className="comment-count">{comments.length} comment</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="comment-sort-select"
        >
          <option value="newest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="popular">Most favorites</option>
        </select>
      </div>

      {/* Comments List */}
      <div className="comments-list">
        {sortedComments.length > 0 ? (
          sortedComments.map((comment) => (
            <div key={comment.id} className="comment-item">
              <img
                src={comment.avatar ||"https://i.pravatar.cc/40?img=1"}
                alt={comment.author}
                className="comment-avatar-small"
              />
              <div className="comment-content">
                <div className="comment-header">
                  <span className="comment-author">{comment.author}</span>
                  <span className="comment-time">{moment(comment.createdAt).format("HH:mm DD-MM-YYYY")}</span>
                </div>
                <p className="comment-text">{comment.value}</p>
                <div className="comment-actions">
                  <button
                    className={`comment-action-btn ${
                      likedComments.has(comment.id) ? 'active' : ''
                    }`}
                    onClick={() => handleLike(comment.id)}
                  >
                    <ThumbUpIcon />
                    <span>{comment.likes}</span>
                  </button>
                  <button
                    className={`comment-action-btn ${
                      dislikedComments.has(comment.id) ? 'active' : ''
                    }`}
                    onClick={() => handleDislike(comment.id)}
                  >
                    <ThumbDownIcon />
                  </button>
                  <button className="comment-action-btn reply-btn">
                    Respond
                  </button>
                  <button className="comment-menu-btn">
                    <MoreVertIcon />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-comments">There is no comment. let's the first comment!</p>
        )}
      </div>
    </div>
  );
};

export default Comment;
