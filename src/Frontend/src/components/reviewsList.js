import { useEffect, useState } from "react";
import { Link,useNavigate,useParams } from "react-router-dom";
import ReviewService from "../Service/reviewService";
import Service from "../api";

const ReviewList = () => {
    const { movieId } = useParams();
    const [reviewList, setReviewList] = useState([]);
    const [name,setName] = useState("");
    const [review,setReview] = useState("");
    const [movieName,setMovieName] = useState("");
    const [err,setErr] = useState("");
    const navigate = useNavigate();

    ( () => {
        Service.getMovieName(movieId).then(res => {
            setMovieName(res.data.original_title);
        });
    })();

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleReview = (e) => {
        setReview(e.target.value)
    }

    const handleSubmit = () => {
        if(name ==="" || review ==="") {
            setErr("please enter credentials");
            setTimeout(() => {
                setErr("");
            }, 2000);
            return;
        }
        const userReview = {
            "name": name,
            "review":review,
            "movieId": parseInt(movieId)
        };
        ReviewService.createReview(userReview);
        setName("");
        setReview("");
    }

    const handleDelete = (e) => {
        ReviewService.deleteReview(e.target.value);
    }

    useEffect(() => {
        ReviewService.getAllReview(movieId).then(res => {
            setReviewList(res.data);
        });
    },[handleSubmit,handleDelete]);

    return (
        <>
            <header className='header'>
                <h3>Movies</h3> 
                <Link to={'/'} className="nav-tag">Home</Link>
            </header>
            <section>
                <p className="text-center review-descp">Reviews of {movieName}</p>
            </section>
            <section className="review-section">
                {
                    <div className="form">
                        <div className="err">{err}</div>
                        <h3>New review</h3>
                        <label htmlFor="user-name">User</label>
                        <input id="user-name" type="text" onChange={handleName} value={name} required/>
                        <label htmlFor="review">Review</label>
                        <textarea id="review" onChange={handleReview} value={review} required/>
                        <button onClick={handleSubmit}>submit</button>
                    </div>
                }
                {reviewList.map(item => {
                    return (
                        <div className="review-container">
                            <h3 className="review-heading"><b>User: </b> {item.name}</h3>
                            <p><b>Review: </b>{item.review}</p>
                            <div className="btn-container">
                                <button className="btn update" onClick={() => navigate(`/update-review/${item.id}`)}>Update review</button>
                                <button className="btn delete" value={item.id} onClick={handleDelete}>Delete review</button>
                            </div>
                        </div>
                    );
                })}
            </section>
        </>
    );
}
export default ReviewList;
