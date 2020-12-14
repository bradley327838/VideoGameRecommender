package com.example.wap.daos;

import com.example.wap.models.GameDeveloper;
import com.example.wap.repositories.GameDeveloperRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GameDeveloperDao {
  @Autowired
  GameDeveloperRepository gameDeveloperRepository;
  @GetMapping("/findAllGameDevelopers")
  public Iterable<GameDeveloper> findAllGameDevelopers() {
    return gameDeveloperRepository.findAll();
  }
  @GetMapping("/findGameDeveloperById/{id}")
  public GameDeveloper findGameDeveloperById(
      @PathVariable("id") Integer id) {
    return gameDeveloperRepository.findById(id).get();
  }
  @GetMapping("/findGameDeveloperName/{id}")
  public String findGameDeveloperName(
      @PathVariable("id") Integer id) {
    return gameDeveloperRepository.findById(id).get().getName();
  }
  @GetMapping("/deleteGameDeveloper/{id}")
  public void deleteGameDeveloper(
      @PathVariable("id") Integer id) {
    gameDeveloperRepository.deleteById(id);
  }
  @GetMapping("/createGameDeveloper")
  public GameDeveloper createGameDeveloper() {
    GameDeveloper gameDeveloper = new GameDeveloper();
    gameDeveloper.setName("New GameDeveloper");
    return gameDeveloperRepository.save(gameDeveloper);
  }
  @GetMapping("/renameGameDeveloper/{id}/{newTitle}")
  public GameDeveloper renameGameDeveloper(
      @PathVariable("id") Integer id,
      @PathVariable("newTitle") String newTitle) {
    GameDeveloper gameDeveloper = gameDeveloperRepository.findById(id).get();
    gameDeveloper.setName(newTitle);
    return gameDeveloperRepository.save(gameDeveloper);
  }
}
