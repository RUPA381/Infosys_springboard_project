package com.infosys.NoticeboardEventsPostService.repository;

import com.infosys.NoticeboardEventsPostService.model.EmergencyContact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmergencyContactRepository extends JpaRepository<EmergencyContact,Long> {
}
