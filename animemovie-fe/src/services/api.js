import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Movie APIs
export const movieService = {
  // Get list of movies with pagination and search
  getMovies: async (search = '', page = 1, pageSize = 7) => {
    try {
      const response = await api.get('/movies', {
        params: { search, page, pageSize },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  },
  
  // Get movie details by ID
  getMovieById: async (id) => {
    try {
      const response = await api.get(`/movies/${id}`);
      return response.data.movie;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      throw error;
    }
  },
};

// Episode APIs
export const episodeService = {
  // Get all episodes for a movie
  getEpisodesByMovie: async (movieId) => {
    try {
      const response = await api.get(`/episodes/movie/${movieId}`);
      return response.data.episodes;
    } catch (error) {
      console.error('Error fetching episodes:', error);
      throw error;
    }
  },

  // Get episode details by ID
  getEpisodeById: async (id) => {
    try {
      const response = await api.get(`/episodes/${id}`);
      return response.data.episode;
    } catch (error) {
      console.error('Error fetching episode details:', error);
      throw error;
    }
  },
};

export const commentService = {
  createComment: async (comment) => {
  try {
     const response = await api.post("/comments", { accountId: comment.accountId, movieId: comment.movieId, value: comment.value } );
      return response.data.comment;
   }  catch (error) {
     console.error("Error creating comments", error);
} },
  findCommentsByMovie: async (movieId) => {
    try {
     const response = await api.get(`/comments/movie/${movieId}` );
      return response.data.data;
   }  catch (error) {
     console.error("Error creating comments", error);
} 
  }
}
export default api;
