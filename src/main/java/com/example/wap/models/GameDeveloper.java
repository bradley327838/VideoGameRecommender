package com.example.wap.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="gamedeveloper")
public class GameDeveloper {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer gamedeveloperid;
  private String name;

  public void setName(String name) {
    this.name = name;
  }

  public void setGamedeveloperid(Integer gamedeveloperid) {
    this.gamedeveloperid = gamedeveloperid;
  }

  public String getName() {
    return name;
  }

  public Integer getGamedeveloperid() {
    return gamedeveloperid;
  }
}
