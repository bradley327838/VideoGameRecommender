package com.example.wap.models;

import javax.persistence.*;

@Entity
@Table(name="review")
public class Review {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer reviewid;
  private Integer userid;
  private Integer videogameid;
  private Integer rating;
  private String reviewdescription;
  private boolean recommended;

  public Integer getUserid() {
    return userid;
  }

  public Integer getRating() {
    return rating;
  }

  public Integer getReviewid() {
    return reviewid;
  }

  public Integer getVideogameid() {
    return videogameid;
  }

  public String getReviewdescription() {
    return reviewdescription;
  }
  public boolean getRecommended() {
    return recommended;
  }

  public void setRating(Integer rating) {
    this.rating = rating;
  }

  public void setRecommended(boolean recommended) {
    this.recommended = recommended;
  }

  public void setReviewdescription(String reviewdescription) {
    this.reviewdescription = reviewdescription;
  }

  public void setReviewid(Integer reviewid) {
    this.reviewid = reviewid;
  }

  public void setUserid(Integer userid) {
    this.userid = userid;
  }

  public void setVideogameid(Integer videogameid) {
    this.videogameid = videogameid;
  }
}
