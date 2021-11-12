import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRequest } from "../../api";
import { imageServerUrl } from "../../constants";
import Header from '../../components/header';
import MobileHeader from '../../components/mobileHeader';
import Footer from '../../components/footer';
import Style from "./style";


function MovieGenre() {
  const [movie, setMovie] = useState([]);
  const { id, name } = useParams();
  useEffect(() => {
    document.title = "moviee";
},[]);
  useEffect(() => {
    getRequest(
      "https://murmuring-tundra-31743.herokuapp.com/movies/3/discover/movie?api_key=1e32e196d77987f5d442a50704d6481e",
      { with_genres: id }
    ).then((response) => {
      setMovie(response.data.results);
    });
  }, [id]);
  const renderFarm = () => {
    return movie.map((item) => {
      const {title, poster_path, vote_average } = item;
      const imageurl = `${imageServerUrl}${poster_path}`;
      return (
        <li>
          <Link to={`/movie-profile/${item.id}`} key={item.id}>
            <img src={imageurl} alt={title} className="poster"/>
            <div className="imdb-hover">
              <img src="/assets/images/imdb.png" alt="imdb"/>
              <p>{`${vote_average}`}</p>
            </div>
          </Link>
        </li>   
      );
    });
  };

  return (
    <Style>
      <div className="main">
        <Header />
        <MobileHeader/>
        <h1>{name}</h1>
        <div className="movie-list">
          <ul>
            {renderFarm()}
          </ul>
        </div>
        <Footer/>
      </div>
    </Style>
  );
}

export default MovieGenre;