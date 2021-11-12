import {useState, useEffect, Fragment} from 'react';
import {useParams, Link} from 'react-router-dom';
import get from 'lodash/get';
import {imageServerUrl} from '../../constants';
import Header from '../../components/header';
import MobileHeader from '../../components/mobileHeader';
import Footer from '../../components/footer';
import Style from './style.js';

const TopRated = (props) => {
    const {id} = useParams();
    const [movies, setMovies] = useState([]);
   
    useEffect(() => {
      document.title = "moviee";
      fetch('https://murmuring-tundra-31743.herokuapp.com/movies/3/movie/top_rated?api_key=4ba2c80bd43f2892ecb3349fa445015f')
      .then((response => {
        return response.json();
      }))
      .then( data => {
        setMovies(data);
      })
      .catch(error => {
        console.log(error);
      })  
    },[]);

    function MovieList(props) {
        const {data = [], id, vote_average} = props;
        const renderFarm = () => {
            const result = get(data, "results", []);
            const temp = result.sort(vote_average);
            return temp.map(function(item){
              const {original_title, poster_path, original_name, id, vote_average} = item;
              const imageUrl = `${imageServerUrl}${poster_path}`;
              return(  
                <li key={id}>
                  <Link to={`/movie-profile/${id}`}>
                  <img className="poster" src={imageUrl} alt={original_title || original_name}/>
                    <div className="imdb-hover">
                      <img src="/assets/images/imdb.png" alt="imdb"/>
                      <p>{`${vote_average}`}</p>
                    </div>
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

   
    
    return(
        <Style>
          <div className="main">
            <Header />
            <MobileHeader/>
            <div className="movie-list">
                <MovieList data={movies}/>
            </div>
            <Footer/>
          </div>  
        </Style>
    );
}

export default TopRated;


