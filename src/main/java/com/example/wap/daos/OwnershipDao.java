package com.example.wap.daos;

import com.example.wap.models.Ownership;
import com.example.wap.repositories.OwnershipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OwnershipDao {
  @Autowired
  OwnershipRepository ownershipRepository;
  @GetMapping("/findAllOwnerships")
  public Iterable<Ownership> findAllOwnerships() {
    return ownershipRepository.findAll();
  }
  @GetMapping("/findOwnershipById/{id}")
  public Ownership findOwnershipById(
      @PathVariable("id") Integer id) {
    return ownershipRepository.findById(id).get();
  }
  @GetMapping("/deleteOwnership/{id}")
  public void deleteOwnership(
      @PathVariable("id") Integer id) {
    ownershipRepository.deleteById(id);
  }
  @GetMapping("/createOwnership/{gameslibraryid}/{videogameid}")
  public Ownership createOwnership(
      @PathVariable("gameslibraryid") Integer gameslibraryid,
      @PathVariable("videogameid") Integer videogameid
  ) {
    Ownership ownership = new Ownership();
    ownership.setGameslibraryid(gameslibraryid);
    ownership.setVideogameid(videogameid);
    ownership.setLastplayed(java.time.LocalDate.now().toString());
    return ownershipRepository.save(ownership);
  }
  @GetMapping("/playOneHour/{id}")
  public Ownership playOneHour(
      @PathVariable("id") Integer id
  ) {
    Ownership o = ownershipRepository.findById(id).get();
    o.setLastplayed(java.time.LocalDate.now().toString());
    o.setPlaytime(o.getPlaytime() + 1);
    return ownershipRepository.save(o);
  }
}