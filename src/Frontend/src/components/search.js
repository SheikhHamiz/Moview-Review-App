import {useState} from 'react';
import Service from '../api';
import ListOfMovies from './listOfMovies';
import { useNavigate } from 'react-router-dom';
const Search = () => {
    const [movieList,setMovieList] = useState([]);
    const [movieName,setMovieName] = useState('');
    const navigate = useNavigate();
    const handleChange = (e)=> {
        setMovieName(e.target.value)
        Service.searchMovies(movieName).then(res => {
            setMovieList(res.data.results);
        });
    }
    return (
        <>
            <header className='header'>
                <h3>Movies</h3>
                <input id='search' placeholder='search' onChange={handleChange} value={movieName}/>   
            </header>
            <section className='movie-container'>
            { movieName!=='' && movieList.map(item => {
                    return(
                    <div className='movie-card' onClick={()=>navigate(`movie-review/${item.id}`)}>
                        <img className='img' src={Service.imagePath(item.poster_path)} alt='movie-label'/>
                        <h3 className='text-center'>{item.title}</h3>
                    </div>);
                })
            }
            </section>
            {movieName === '' && <ListOfMovies/>}
        </>
    );
}
export default Search;