package com.hamiz.moviereviews.controller;

import com.hamiz.moviereviews.model.Review;
import com.hamiz.moviereviews.service.ReviewService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = {"http://localhost:3000/"})
@RestController
@RequestMapping("/movie/review")
public class ReviewController {
    private ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }
    @PostMapping
    public ResponseEntity<Review> saveReview(@RequestBody Review review) {
        return new ResponseEntity<Review>(this.reviewService.saveReview(review), HttpStatus.CREATED);
    }
    @GetMapping("allReviews/{movieId}")
    public ResponseEntity<List<Review>> getAllReviews(@PathVariable("movieId") long movieId) {
        return new ResponseEntity<List<Review>>(this.reviewService.getReviewList(movieId),HttpStatus.OK);
    }
    @GetMapping("{id}")
    public ResponseEntity<Review> getReviewById(@PathVariable("id") long id) {
        return new ResponseEntity<Review>(this.reviewService.getReviewById(id),HttpStatus.OK);
    }
    @PutMapping("{id}")
    public ResponseEntity<Review> updateReview(@PathVariable("id") long id,@RequestBody Review review) {
        return new ResponseEntity<Review>(this.reviewService.updateReview(id,review),HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Review> deleteReview(@PathVariable("id") long id) {
        return new ResponseEntity<Review>(this.reviewService.deleteReview(id),HttpStatus.OK);
    }
}
