import { Genre as GenreModel } from '../models/genre.model.js'

const GenreController = {
  find: async (req, res) => {
    try {
      const genres = await GenreModel.find();
      res.status(200).json({
        success: true,
        data: genres,
        message: 'Lấy danh sách genre thành công'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Lỗi khi lấy danh sách genre',
        error: error.message
      });
    }
  },
  
  findOne: async (req, res) => {
    try {
      const { id } = req.params;
      const genre = await GenreModel.findById(id);
      if (!genre) {
        return res.status(404).json({
          success: false,
          message: 'Genre không tồn tại'
        });
      }
      res.status(200).json({
        success: true,
        data: genre
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Lỗi khi lấy genre',
        error: error.message
      });
    }
  }
};

export { GenreController };