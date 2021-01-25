package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.model.Guest;

@Repository
public interface GuestRepository extends JpaRepository<Guest, Long>{

}
