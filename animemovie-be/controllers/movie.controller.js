import { Movie as MovieModel } from '../models/movie.model.js'
const MovieController = {
  findOne: async(req, res) =>{
    const{id} = req.params;
    const movie = await MovieModel.findById(id);
    res.json({movie});
  },
  find: async (req, res) => {
    try {
      const { search = "", page = 1, pageSize = 7 } = req.query;
      const pageNumber = Number(page) > 0 ? Number(page) : 1;
      const limit = Number(pageSize) > 0 ? Number(pageSize) : 7;

      const filter = {};
      if (search && typeof search === "string" && search.trim().length > 0) {
        const regex = new RegExp(search.trim(), "i");
        filter.$or = [{ name: regex }, { description: regex }];
      }

      const totalCount = await MovieModel.countDocuments(filter);
      const movies = await MovieModel.find(filter)
        .skip((pageNumber - 1) * limit)
        .limit(limit)
        .sort({ createdAt: -1 });

      return res.status(200).json({
        success: true,
        page: pageNumber,
        pageSize: limit,
        totalCount,
        totalPages: Math.ceil(totalCount / limit),
        movies,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Lỗi khi tìm kiếm phim",
        error: error.message,
      });
    }
  },
};

export { MovieController };