import logo from './logo.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {ReactDefault} from './ReactDefault';
import {FiSearch} from'react-icons/fi';
import './App.css';
import MovieCard from './components/MovieCard';
import SideBar from './components/SideBar';
// 7f73513d = api key

const MOV_API = 'http://www.omdbapi.com?apikey=7f73513d';

// const movie1 = {
//   "Title": "The Amazing Spiderman 2 Webb Cut",
//   "Year": "2021",
//   "imdbID": "tt18351128",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
// }

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    try{
    const response = await fetch(`${MOV_API}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    } catch (error) {
      console.log("This is an error" + error);
    }
  };
  // const getMovies = async (title) => {
  //   try {
  //     const data = await axios.get(`${MOV_API}&s=${title}`);
  //     console.log(data);
  //   } catch (error) {
  //     console.log("This is an error" + error);
  //   }
  // };
  useEffect(() => {
      searchMovies('Spiderman');
    }, []);

  return (
    
  <div className="App">
    <SideBar/>
    <div className="navbar-container">
    
      <h1 className='websiteTitle'>StreamiX</h1>
      <div className="search">
        <input 
          placeholder="Search Title"
          value={searchTerm}
          onChange={(event)=>setSearchTerm(event.target.value)}
        />
        <div className='searchIcon'>
        <FiSearch onClick={()=>searchMovies(searchTerm)} />
        </div>
      </div>
      </div>

      {movies?.length > 0 ?
        (
          <div className="container">
          {movies.map((movie) => (
            <MovieCard movie = {movie} />
          ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Results</h2>
          </div>  
        )}

      {/* <ReactDefault /> */}
    </div>
  );
}

export default App;
