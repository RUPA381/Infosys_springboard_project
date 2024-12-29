package com.infosys.complaintandrequestservice.repository;

import com.infosys.complaintandrequestservice.model.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VendorRepository extends JpaRepository<Vendor,Long> {
}
