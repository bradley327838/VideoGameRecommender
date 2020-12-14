package com.example.wap.models;

import javax.persistence.*;

@Entity
@Table(name="gameslibrary")
public class GamesLibrary {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer userid;

  public GamesLibrary(Integer id) {
    this.userid = id;
  }

  public GamesLibrary() {

  }

  public Integer getUserid() {
    return userid;
  }

  public void setUserid(Integer userid) {
    this.userid = userid;
  }
}