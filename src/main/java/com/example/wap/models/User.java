package com.example.wap.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer userid;
  private String username;
  private String password;
  private String phonenumber;
  private String emailaddress;
  private double accountbalance;

  public void setUserid(Integer id) {
    this.userid = id;
  }

  public void setAccountbalance(double accountbalance) {
    this.accountbalance = accountbalance;
  }

  public void setEmailaddress(String emailaddress) {
    this.emailaddress = emailaddress;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public void setPhonenumber(String phonenumber) {
    this.phonenumber = phonenumber;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public double getAccountbalance() {
    return accountbalance;
  }

  public Integer getUserid() {
    return userid;
  }

  public String getEmailaddress() {
    return emailaddress;
  }

  public String getPassword() {
    return password;
  }

  public String getPhonenumber() {
    return phonenumber;
  }

  public String getUsername() {
    return username;
  }
}
