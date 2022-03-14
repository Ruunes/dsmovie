package com.SpringProjeto.dsmovie.respositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SpringProjeto.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
