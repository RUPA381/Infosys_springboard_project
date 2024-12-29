package com.infosys.societymanagementservice.repository;

import com.infosys.societymanagementservice.model.Society;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SocietyRepository extends JpaRepository<Society,Long> {
    Optional<Society> findById(Long id);
    Society findByEmail(String email);
    Society findBySocietyName(String name);
}
