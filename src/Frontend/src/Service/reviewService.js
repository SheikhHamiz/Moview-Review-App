import axios from "axios";
const url = "http://localhost:8080/movie/review";

class ReviewService {
    getAllReview(movieId) {
        return axios.get(url + '/allReviews/'+ movieId);
    }
    createReview(review) {
        return axios.post(url,review);
    }
    updateReview(id,review) {
        return axios.put(url + '/' + id,review);
    }
    deleteReview(id) {
        return axios.delete(url + "/" + id);
    }
    getReviewById(id) {
        return axios.get(url + "/" + id);
    }
}
export default new ReviewService();