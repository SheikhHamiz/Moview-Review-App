import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import Service from '../api';
const ListOfMovies = () => {
    const [movieList,setMovieList] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        Service.getMovies().then(res => setMovieList(res.data.results));
    },[])
    return (
        <>
            <section className='movie-container'>
            { movieList.length > 0 && movieList.map(item => {
                    return(
                    <div className='movie-card' onClick={()=>navigate(`movie-review/${item.id}`)}>
                        <img className='img' src={Service.imagePath(item.poster_path)} alt='movie-label'/>
                        <h3 className='text-center'>{item.title}</h3>
                    </div>);
                })
            }
            </section>
        </>
    );
}
export default ListOfMovies;