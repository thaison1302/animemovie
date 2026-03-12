import UpperScreen from '../components/inMovie/upperscreen';
import LowerScreen from '../components/inMovie/downerscreen';
import Infomation from "../components/info.jsx"
import { useLocation } from 'react-router';
import { data } from '../data/data.js';

function InMovie() {
  const location = useLocation();
  const idF = location.pathname.split('/')[2];

  const film = data.find(item => item.id === parseInt(idF));
  console.log('film', film);
  return (
    <div>
      <UpperScreen />
      <LowerScreen episodes={film?.episodes} film={film} />
      <Infomation/>
    </div>
  );
}

export default InMovie;