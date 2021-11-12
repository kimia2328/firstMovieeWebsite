import {useEffect, useState} from 'react';
import SearchList from '../../components/searchList';
import Style from './style';

function Search(props) {
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setLoading(true)
        fetch(`https://murmuring-tundra-31743.herokuapp.com/movies/3/search/multi?api_key=4ba2c80bd43f2892ecb3349fa445015f&language=en-US&page=1&include_adult=false&query=${search}`)
        .then((response => {
          return response.json();
        }))
        .then( data => {
          setLoading(false);
          setMovies(data);
        })
        .catch(error => {
          setLoading(false);
          console.log(error);
        })  
      },[search])
      const changeEvent=(e)=>{
        setSearch(e.target.value);
        console.log(e.target.value);
      }
    return(
        <Style>
            <form>
                <img className="search-icon" src="/assets/images/search-icon.png" alt="search-icon"/>
                <input placeholder="Search Movie" className="search" type="text" onChange={changeEvent}></input>
                <div className="search-scroll">
                  <SearchList data={movies}/>
                </div>
            </form>
        </Style>
    );
}

export default Search;



