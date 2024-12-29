package com.infosys.complaintandrequestservice.service;

import com.infosys.complaintandrequestservice.dto.ComplaintDto;
import com.infosys.complaintandrequestservice.exception.ComplaintException;
import com.infosys.complaintandrequestservice.model.Complaint;

import java.util.List;

public interface ComplaintService {
    Complaint addComplaint(String jwt, ComplaintDto complaintDto) throws ComplaintException;
    List<Complaint> getAllComplaints();
    Complaint closeComplaint(Long complaintId);
}
