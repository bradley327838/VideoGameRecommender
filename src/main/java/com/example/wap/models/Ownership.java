package com.example.wap.models;

import javax.persistence.*;

@Entity
@Table(name="ownership")
public class Ownership {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer ownershipid;
  private Integer gameslibraryid;
  private Integer videogameid;
  private String lastplayed;
  private double playtime;

  public Integer getVideogameid() {
    return videogameid;
  }

  public double getPlaytime() {
    return playtime;
  }

  public Integer getGameslibraryid() {
    return gameslibraryid;
  }

  public Integer getOwnershipid() {
    return ownershipid;
  }

  public String getLastplayed() {
    return lastplayed;
  }

  public void setVideogameid(Integer videogameid) {
    this.videogameid = videogameid;
  }

  public void setGameslibraryid(Integer gameslibraryid) {
    this.gameslibraryid = gameslibraryid;
  }

  public void setLastplayed(String lastplayed) {
    this.lastplayed = lastplayed;
  }

  public void setOwnershipid(Integer ownershipid) {
    this.ownershipid = ownershipid;
  }

  public void setPlaytime(double playtime) {
    this.playtime = playtime;
  }
}
