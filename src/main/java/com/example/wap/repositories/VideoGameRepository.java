package com.example.wap.repositories;

import com.example.wap.models.VideoGame;
import org.springframework.data.repository.CrudRepository;

public interface VideoGameRepository
    extends CrudRepository<VideoGame, Integer> {
}
