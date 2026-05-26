import { Comment as CommentModel } from '../models/comment.model.js'

const CommentController = {
  createComment: async (req, res) => {
    try {
      const { accountId, movieId, value } = req.body;
      console.log(req.body);
      if (!accountId || !movieId || !value) {
        return res.status(400).json({ success: false, message: 'Thiếu thông tin bắt buộc' });
      }

      const comment = await CommentModel.create({ accountId, movieId, value });
      res.status(201).json({ success: true, data: comment, message: 'Tạo comment thành công' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Lỗi khi tạo comment', error: error.message });
    }
  },

  findByMovie: async (req, res) => {
    try {
      const { movieId } = req.params;
      const comments = await CommentModel.find({ movieId }).sort({ createdAt: -1 });
      res.status(200).json({ success: true, data: comments });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Lỗi khi lấy danh sách comment', error: error.message });
    }
  },

  findOne: async (req, res) => {
    try {
      const { id } = req.params;
      const comment = await CommentModel.findById(id);
      if (!comment) return res.status(404).json({ success: false, message: 'Comment không tồn tại' });
      res.status(200).json({ success: true, data: comment });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Lỗi khi lấy comment', error: error.message });
    }
  }
};

export { CommentController };