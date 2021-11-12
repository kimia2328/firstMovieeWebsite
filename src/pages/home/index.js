import {useState, useEffect} from 'react';
import MovieList from '../../components/movieList';
import Header from '../../components/header';
import MobileHeader from '../../components/mobileHeader';
import Footer from '../../components/footer';
import {useAuthState} from '../../context'
import {API_URL} from "./const"
import Style from './style';

const Home=()=> {
    const userDetails = useAuthState();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      fetch(API_URL)
      .then((response => {
        return response.json();
      }))
      .then( data => {
        setMovies(data);
      })
      .catch(error => {
        console.log(error);
      })  
    },[])

    
    return(
        <Style>
          <div className="background">
            <div className="main">
              <Header />
              <MobileHeader/>
              <div className="movie-list">
                  <MovieList data={movies}/>
              </div>
            </div>
             <Footer/>
          </div>
        </Style>   
    )
}

export default Home;