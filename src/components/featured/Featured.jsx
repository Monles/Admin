import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import './featured.scss';
import hp from '../images/harry.png';

export default function Featured({type}) {
  return (
    <div className="featured">
      {type && (
        <div className='category'>
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Adventure</option>
            <option>Horro</option>
            <option>Fantasy</option>
            <option>Crime</option>
            <option>Documentary</option>
            <option>Historical</option>
            <option>Romance</option>
            <option>Sci-fi</option>
            <option>Thriller</option>
            <option>Western</option>
            <option>Animation</option>
            <option>Comedy</option>
            <option>Drama</option>
          </select>
        </div>
      )};
     <img
          src="https://images.unsplash.com/photo-1646940762800-04537e923cdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          width="100%"
          alt="" 
        />
      <div className='info'>
        
         <img src={hp} alt="" 
         />
        <span className='desc'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales sodales facilisis. Suspendisse at ornare purus. 
        </span>
        <div  className='buttons'>
          <button className='play'>
            <PlayArrow/>
            <span>Play</span>
          </button>
          <button className='more'>
            <InfoOutlined/>
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};
