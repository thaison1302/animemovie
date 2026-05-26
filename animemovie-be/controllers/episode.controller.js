import { Episode as EpisodeModel } from '../models/episode.model.js'
const EpisodeController = {
  findOne: async (req, res) => {
    const{id} = req.params;
    const episode = await EpisodeModel.findById(id);
    res.json({episode});
   },
   findByMovie: async (req, res) =>{
    const{movieId} = req.params;
    const episodes = await EpisodeModel.find({movieId});
    res.json({episodes})
   }
};

export { EpisodeController };