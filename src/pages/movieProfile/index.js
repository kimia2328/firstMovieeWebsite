import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { backdropServerUrl, imageServerUrl } from "../../constants";
import { getRequest } from "../../api";
import Style from "./style";

function MovieProfile() {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState();
  const [movieError, setMovieError] = useState(false);
  
  useEffect(() => {
    document.title = "moviee";
    setMovieError(false);
    setMovieInfo(null);
    getMovieInfo();
  }, [id]);

  function getMovieInfo() {
    getRequest(`/movie/${id}`).then((response) => {
      console.log(response);
      if (response.ok) {
        setMovieInfo(response.data);
      } else {
        setMovieError(true);
      }
    });
  }

  if (!movieInfo && !movieError) {
    return (
      <div>
        <p><img src="assets/images/Spinner-1s-200px.gif"/></p>
      </div>
    );
  }
  if (movieError) {
    return (
      <div>
        <p>Error...</p>
      </div>
    );
  }
  function renderFarm() {
    return (
      <Style>
        <div className="main">
          <div className="background" style={{backgroundImage: movieInfo.backdrop_path ? `url(${backdropServerUrl}${movieInfo.backdrop_path})` : "linear-gradient(to top , black, #085696)"}}>
            <div className="content">
                  <div className="poster">
                    <img src={`${imageServerUrl}${movieInfo.poster_path}`} alt="poster"/>
                  </div>
                  <div className="information">
                    <p><span className="title">Title</span>{movieInfo.original_title || movieInfo.original_name}</p>
                    <p className="imdb"><img src="/assets/images/imdb.png" alt="imdb"/><span>{movieInfo.vote_average}</span></p>
                    <p><span className="release-date">Release</span>
                      {movieInfo.release_date && (
                          <span>
                            {movieInfo.release_date.slice(0, 4)}
                          </span>
                        )}
                    </p>
                    <p><span className="genres">Genres</span>
                      {movieInfo.genres.map((item) => {
                          return (
                            <span className="genres-item">
                              {item.name}
                            </span>
                          );
                        })}
                    </p>
                    <p><span className="language">Language</span> {`${movieInfo.original_language}`}</p>  
                    <p><span className="overview">Overview</span> {`${movieInfo.overview}`}</p>
                  </div>
            </div>
          </div>
        </div>
      </Style>
    );
  }
  return <div>{renderFarm()}</div>;
}

export default MovieProfile;
