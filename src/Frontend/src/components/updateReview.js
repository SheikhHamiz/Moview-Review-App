import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReviewService from "../Service/reviewService";

const UpdateReview = () => {
    const [name,setName] = useState("");
    const [review,setReview] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();
    const [currentReview, setCurrentReview] = useState({});
    const [err,setErr] = useState("");

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
            "review":review
        };
        ReviewService.updateReview(id,userReview);
        navigate(`/movie-review/${currentReview.movieId}`);
    }

    useEffect(() => {
        ReviewService.getReviewById(id).then(res => {
            setCurrentReview(res.data);
        })
    },[])

    return(
        <div className="update-form">
            <div className="err">{err}</div>
            <h3 className="text-center">Update review</h3>
            <label htmlFor="user-name">User</label>
            <input id="user-name" type="text" onChange={handleName} value={name} placeholder={currentReview.name} required/>
            <label htmlFor="review">Review</label>
            <textarea id="review" onChange={handleReview} value={review} placeholder={currentReview.review} required/>
            <br/>
            <button  className="btn update" onClick={handleSubmit}>submit</button>
        </div>
    );
}
export default UpdateReview;
