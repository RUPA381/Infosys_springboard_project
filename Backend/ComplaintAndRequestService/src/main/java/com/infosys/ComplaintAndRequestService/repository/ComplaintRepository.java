package com.infosys.complaintandrequestservice.repository;

import com.infosys.complaintandrequestservice.model.Complaint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComplaintRepository extends JpaRepository<Complaint,Long> {
}
