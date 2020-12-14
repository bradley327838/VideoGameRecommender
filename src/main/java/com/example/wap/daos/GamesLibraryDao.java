package com.example.wap.daos;

import com.example.wap.models.GamesLibrary;
import com.example.wap.repositories.GamesLibraryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GamesLibraryDao {
  @Autowired
  GamesLibraryRepository gameslibraryRepository;
  @GetMapping("/findAllGamesLibrarys")
  public Iterable<GamesLibrary> findAllGamesLibrarys() {
    return gameslibraryRepository.findAll();
  }
  @GetMapping("/findGamesLibraryById/{id}")
  public GamesLibrary findGamesLibraryById(
      @PathVariable("id") Integer id) {
    return gameslibraryRepository.findById(id).get();
  }
  @GetMapping("/deleteGamesLibrary/{id}")
  public void deleteGamesLibrary(
      @PathVariable("id") Integer id) {
    gameslibraryRepository.deleteById(id);
  }
  @GetMapping("/createGamesLibrary/{id}")
  public GamesLibrary createGamesLibrary(
      @PathVariable("id") Integer id) {
    GamesLibrary gameslibrary = new GamesLibrary(id);
    return gameslibraryRepository.save(gameslibrary);
  }
}