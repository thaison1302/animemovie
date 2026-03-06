import { DownerCard } from '../components/viewFilm/downercard';
import { UpperCard } from '../components/viewFilm/uppercard';
import Infomation from "../components/info.jsx"
import { data } from '../data/data';

export const ViewFilm = () => {
  const id = window.location.pathname.split('/').pop();
  const movie = data.find(item => item.id === parseInt(id)) || data[0];
  return (
    <div>
      <UpperCard movieName={movie.movieName} image={movie.image} episode={movie.episode} />
      <DownerCard 
        description={movie.description}
        rating={movie.rating}
        year={movie.year}
        views={movie.views}
        duration={movie.duration}
        quality={movie.quality}
        genres={movie.genres}
        country={movie.country}
      />
      <Infomation/>
    </div>
    
  );
};
export default ViewFilm;