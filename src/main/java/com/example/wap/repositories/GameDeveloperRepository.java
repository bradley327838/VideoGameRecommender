package com.example.wap.repositories;

import com.example.wap.models.GameDeveloper;
import org.springframework.data.repository.CrudRepository;

public interface GameDeveloperRepository
    extends CrudRepository<GameDeveloper, Integer> {

}