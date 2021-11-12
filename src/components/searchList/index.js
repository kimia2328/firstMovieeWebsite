import {Link} from 'react-router-dom';
import {Fragment, useEffect} from 'react';
import {imageServerUrl} from '../../constants';
import get from 'lodash/get';
import {textDots} from '../../helpers';

function SearchList(props) {
    const {data = [], limitation = 100, id} = props;
    useEffect(() => {
        document.title = "kimia";
    },[]);
    const renderFarm = () => {
        const result = get(data, "results", []);
        const temp = result.slice(0, limitation);
        return temp.map(function(item){
          const {original_title, poster_path, original_name, id} = item;
          const imageUrl = `${imageServerUrl}${poster_path}`;
          return(  
            <li key={id}>
              <Link to={`/movie-profile/${id}`}>
                <img src={imageUrl} alt={original_title}/>
                <span>{textDots(original_title || original_name, 16)}</span>
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

export default SearchList;