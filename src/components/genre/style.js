import { useEffect, useState } from "react";
import { getRequest } from "../../api";
import { Link } from "react-router-dom";

const Genre = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getRequest(
      "https://murmuring-tundra-31743.herokuapp.com/movies/3/genre/movie/list?api_key=1e32e196d77987f5d442a50704d6481e"
    ).then((response) => {
      setCategory(response.data.genres);
    });
  }, []);
  const renderFarm = () => {
    return category.map((item) => {
      const { id, name } = item;
      return (
        <div key={id} className="col-6 col-md-3 col-sm-4 text-center">
          <div className="categoriesBackground m-1 py-3">
            <Link to={`/categories/${name}/${id}`} className="text-light ">
              <p>{name}</p>
            </Link>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <h2 className="my-5 text-primary text-center ">Movies Category</h2>
      <div className="d-flex flex-wrap fs-lg align-items-center">
        {renderFarm()}
      </div>
    </div>
  );
};

export default Genre;