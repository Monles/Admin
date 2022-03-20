import { ArrowBackIosOutlined } from '@material-ui/icons';
import './watch.scss';

export default function Watch() {
  return (
    <div className='watch'>
      <div className='back'>
        <ArrowBackIosOutlined/>
        Home
      </div>
      <div className='video-container'>
        <iframe width="1280" height="630" src="https://www.youtube.com/embed/8g18jFHCLXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  );
};