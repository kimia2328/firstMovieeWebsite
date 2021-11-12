import {Link} from 'react-router-dom';
import {Fragment, useEffect} from 'react';
import {imageServerUrl} from '../../constants';
import get from 'lodash/get';

function MovieList(props) {
    const {data = [], limitation =8} = props;
    useEffect(() => {
        document.title = "moviee";
    },[]);
    const renderFarm = () => {
        const result = get(data, "results", []);
        const temp = result.slice(0, limitation);
        return temp.map(function(item){
          const {original_title, poster_path, original_name, id} = item;
          const imageUrl = `${imageServerUrl}${poster_path}`;
          const posterSample = "/assets/images/poster-sample.png";
          return(  
            <li key={id}>
              <Link to={`/movie-profile/${id}`}>
                <img src={imageUrl || posterSample} alt={original_title || original_name}/>
              </Link>
            </li>
        );
        },[]);
    }

    return(
        <Fragment>
            <ul>
                {renderFarm()}
            </ul>
        </Fragment>         
    );
}

export default MovieList;