package com.hamiz.moviereviews.service;

import com.hamiz.moviereviews.model.Review;
import com.hamiz.moviereviews.repository.ReviewRepository;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ReviewService {
    private ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public List<Review> getReviewList(long movieId) {
        return this.reviewRepository.findByMovieId(movieId);
    }

    public Review saveReview(Review review) {
        return this.reviewRepository.save(review);
    }

    public Review updateReview(long id,Review review) {
        Review existingReview = this.reviewRepository.findById(id).orElseThrow(() -> new RuntimeException("no such review"));
        existingReview.setName(review.getName());
        existingReview.setReview(review.getReview());
        this.reviewRepository.save(existingReview);
        return existingReview;
    }

    public Review deleteReview(long id) {
       Review review = this.reviewRepository.findById(id).orElseThrow(() -> new RuntimeException("no such review"));
       this.reviewRepository.deleteById(id);
       return review;
    }

    public Review getReviewById(long id) {
        return  this.reviewRepository.findById(id).orElseThrow(() -> new RuntimeException("no such review"));
    }

}
