package com.example.wap.daos;

import com.example.wap.models.Review;
import com.example.wap.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReviewDao {
  @Autowired
  ReviewRepository reviewRepository;
  @GetMapping("/findAllReviews")
  public Iterable<Review> findAllReviews() {
    return reviewRepository.findAll();
  }
  @GetMapping("/findReviewById/{id}")
  public Review findReviewById(
      @PathVariable("id") Integer id) {
    return reviewRepository.findById(id).get();
  }
  @GetMapping("/deleteReview/{id}")
  public void deleteReview(
      @PathVariable("id") Integer id) {
    reviewRepository.deleteById(id);
  }
  @GetMapping("/createReview")
  public Review createReview() {
    Review review = new Review();
    review.setReviewdescription("New Review");
    return reviewRepository.save(review);
  }
  @GetMapping("/renameReview/{id}/{newTitle}")
  public Review renameReview(
      @PathVariable("id") Integer id,
      @PathVariable("newTitle") String newTitle) {
    Review review = reviewRepository.findById(id).get();
    review.setReviewdescription(newTitle);
    return reviewRepository.save(review);
  }
  @GetMapping("/setReview/{id}/{newTitle}/{rating}")
  public Review setReview(
      @PathVariable("id") Integer id,
      @PathVariable("newTitle") String newTitle,
      @PathVariable("rating") Integer rating) {
    Review review = reviewRepository.findById(id).get();
    review.setReviewdescription(newTitle);
    review.setRating(rating);
    return reviewRepository.save(review);
  }

  @GetMapping("/createReviewWithIDS/{userID}/{gameID}/{descr}/{rat}")
  public Review createReviewWithIDS(
      @PathVariable("userID") Integer userID,
      @PathVariable("gameID") Integer gameID,
      @PathVariable("descr") String descr,
      @PathVariable("rat") Integer rat) {
    Review review = new Review();
    review.setUserid(userID);
    review.setVideogameid(gameID);
    review.setReviewdescription(descr);
    review.setRating(rat);
    return reviewRepository.save(review);
  }
}
