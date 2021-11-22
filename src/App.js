import React,{useState,useEffect} from 'react';
import './Movie';
import './App.css';
import Movie from './Movie';


const Main_Api = `https://api.themoviedb.org/3/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc/76341&api_key=0d1e88dbed6a00a4230101b183884ab0`
const API_KEY = 'api_key=1cf50e6248dc270629e802686245c2c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const SearchUrl = BASE_URL + '/Search/movie&'+API_KEY;
function App() {
  const [movies,setMovies] = useState([]);
  const [searchWord,setSearchWord] = useState('');

  const getTheApi=(api)=>{
    fetch(api).then(response=> response.json())
    .then((actualData)=>{
     setMovies(actualData.results);
    })
  }

  const recordWord =(e)=>{
    setSearchWord(e.target.value)
    console.log(searchWord);
  }

  useEffect(()=>getTheApi(API_URL),[]);

  const handleOnSubmit=(event)=>{
    event.preventDefault();
    if(searchWord){
    getTheApi(SearchUrl+`&query=`+searchWord)
    }
  }

  return (
    <>
     <header>
       <img className="logo" 
       src="http://www.newdesignfile.com/postpic/2014/03/movie-folder-icons_290375.png" 
       alt="app-logo"
       value={searchWord}
       />
       <form onSubmit={handleOnSubmit}>
         <input type="search" className="search" placeholder="search" onChange={recordWord}/>
      </form>
     </header>
     <div className="movie-container">
      
      {movies.length>0 ? movies.map((movie)=>(
        <Movie key={movie.id} data={movie}/>
      )) : <div>Loading Data...Please Wait</div>}
     </div>
    </>
  );
}

export default App;
