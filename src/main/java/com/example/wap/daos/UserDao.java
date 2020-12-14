package com.example.wap.daos;

import com.example.wap.models.User;
import com.example.wap.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserDao {
  @Autowired
  UserRepository userRepository;
  @GetMapping("/findAllUsers")
  public Iterable<User> findAllUsers() {
    return userRepository.findAll();
  }
  @GetMapping("/findUserById/{id}")
  public User findUserById(
      @PathVariable("id") Integer id) {
    return userRepository.findById(id).get();
  }
  @GetMapping("/deleteUser/{id}")
  public void deleteUser(
      @PathVariable("id") Integer id) {
    userRepository.deleteById(id);
  }
  @GetMapping("/createUser")
  public User createUser() {
    User user = new User();
    user.setUsername("New User");
    return userRepository.save(user);
  }
  @GetMapping("/renameUser/{id}/{newTitle}")
  public User renameUser(
      @PathVariable("id") Integer id,
      @PathVariable("newTitle") String newTitle) {
    User user = userRepository.findById(id).get();
    user.setUsername(newTitle);
    return userRepository.save(user);
  }
  @GetMapping("/renameUserPassword/{id}/{newTitle}")
  public User renameUserPassword(
      @PathVariable("id") Integer id,
      @PathVariable("newTitle") String newTitle) {
    User user = userRepository.findById(id).get();
    user.setPassword(newTitle);
    return userRepository.save(user);
  }
  @GetMapping("/renameUserPhone/{id}/{newTitle}")
  public User renameUserPhone(
      @PathVariable("id") Integer id,
      @PathVariable("newTitle") String newTitle) {
    User user = userRepository.findById(id).get();
    user.setPhonenumber(newTitle);
    return userRepository.save(user);
  }
  @GetMapping("/renameUserEmail/{id}/{newTitle}")
  public User renameUserEmail(
      @PathVariable("id") Integer id,
      @PathVariable("newTitle") String newTitle) {
    User user = userRepository.findById(id).get();
    user.setEmailaddress(newTitle);
    return userRepository.save(user);
  }
  @GetMapping("/renameUserBalance/{id}/{newTitle}")
  public User renameUserBalance(
      @PathVariable("id") Integer id,
      @PathVariable("newTitle") double newTitle) {
    User user = userRepository.findById(id).get();
    user.setAccountbalance(newTitle);
    return userRepository.save(user);
  }
}
