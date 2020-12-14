package com.example.wap.daos;

import com.example.wap.models.VideoGame;
import com.example.wap.repositories.VideoGameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VideoGameDao {
  @Autowired
  VideoGameRepository videoGameRepository;
  @GetMapping("/findAllVideoGames")
  public Iterable<VideoGame> findAllVideoGames() {
    return videoGameRepository.findAll();
  }
  @GetMapping("/findVideoGameById/{id}")
  public VideoGame findVideoGameById(
      @PathVariable("id") Integer id) {
    return videoGameRepository.findById(id).get();
  }

  @GetMapping("/deleteVideoGame/{id}")
  public void deleteVideoGame(
      @PathVariable("id") Integer id) {
    videoGameRepository.deleteById(id);
  }
  @GetMapping("/createVideoGame")
  public VideoGame createVideoGame() {
    VideoGame videoGame = new VideoGame();
    videoGame.setName("New VideoGame");
    return videoGameRepository.save(videoGame);
  }
  @GetMapping("/createVideoGameWithID/{id}")
  public VideoGame createVideoGameWithID(@PathVariable("id") Integer id) {
    VideoGame videoGame = new VideoGame();
    videoGame.setName("New VideoGame");
    videoGame.setGameDeveloperID(id);
    return videoGameRepository.save(videoGame);
  }
  @GetMapping("/renameVideoGame/{id}/{newTitle}")
  public VideoGame renameVideoGame(
      @PathVariable("id") Integer id,
      @PathVariable("newTitle") String newTitle) {
    VideoGame videoGame = videoGameRepository.findById(id).get();
    videoGame.setName(newTitle);
    return videoGameRepository.save(videoGame);
  }
  @GetMapping("/newDateVideoGame/{id}/{newTitle}")
  public VideoGame newDateVideoGame(
      @PathVariable("id") Integer id,
      @PathVariable("newTitle") String newTitle) {
    VideoGame videoGame = videoGameRepository.findById(id).get();
    videoGame.setReleaseDate(newTitle);
    return videoGameRepository.save(videoGame);
  }
  @GetMapping("/newPriceVideoGame/{id}/{newTitle}")
  public VideoGame newPriceVideoGame(
      @PathVariable("id") Integer id,
      @PathVariable("newTitle") double newTitle) {
    VideoGame videoGame = videoGameRepository.findById(id).get();
    videoGame.setPrice(newTitle);
    return videoGameRepository.save(videoGame);
  }
  @GetMapping("/newDescriptionVideoGame/{id}/{newTitle}")
  public VideoGame newDescriptionVideoGame(
      @PathVariable("id") Integer id,
      @PathVariable("newTitle") String newTitle) {
    VideoGame videoGame = videoGameRepository.findById(id).get();
    videoGame.setDescription(newTitle);
    return videoGameRepository.save(videoGame);
  }
  @GetMapping("/newGameDeveloperIDVideoGame/{id}/{newTitle}")
  public VideoGame newDescriptionVideoGame(
      @PathVariable("id") Integer id,
      @PathVariable("newTitle") Integer newTitle) {
    VideoGame videoGame = videoGameRepository.findById(id).get();
    videoGame.setGameDeveloperID(newTitle);
    return videoGameRepository.save(videoGame);
  }

  
}