package com.example.wap.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="videogame")
public class VideoGame {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer videogameid;
  private Integer gamedeveloperid;
  private String Name;
  private String releasedate;
  private double Price;
  private String Description;

  public void setDescription(String description) {
    this.Description = description;
  }

  public void setGameDeveloperID(Integer gameDeveloperID) {
    this.gamedeveloperid = gameDeveloperID;
  }

  public void setName(String name) {
    this.Name = name;
  }

  public void setPrice(double price) {
    this.Price = price;
  }

  public void setReleaseDate(String releaseDate) {
    this.releasedate = releaseDate;
  }

  public void setVideoGameID(Integer videoGameID) {
    this.videogameid = videoGameID;
  }

  public double getPrice() {
    return Price;
  }

  public Integer getGameDeveloperID() {
    return gamedeveloperid;
  }

  public Integer getVideoGameID() {
    return videogameid;
  }

  public String getDescription() {
    return Description;
  }

  public String getName() {
    return Name;
  }

  public String getReleaseDate() {
    return releasedate;
  }
}
