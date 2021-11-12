import { useEffect, useState, Fragment } from "react";
import { getRequest } from "../../api";
import { Link } from "react-router-dom";
import Style from "./style";

const Genre = () => {
  const [genre, setGenre] = useState([]);
  useEffect(() => {
    getRequest(
      "https://murmuring-tundra-31743.herokuapp.com/movies/3/genre/movie/list?api_key=1e32e196d77987f5d442a50704d6481e"
    ).then((response) => {
      setGenre(response.data.genres);
    });
  }, []);
  
  const renderFarm = () => {
    return genre.map((item) => {
      const { id, name } = item;
      return (
        <li className="genre-item">
           <Link to={`/genre/${name}/${id}`}>
            {name}
           </Link>
        </li>  
      );
    });
  };

  return (
    <Fragment>
        <ul className="genre-list">
         {renderFarm()}
        </ul>
    </Fragment>  
  );
};

export default Genre;