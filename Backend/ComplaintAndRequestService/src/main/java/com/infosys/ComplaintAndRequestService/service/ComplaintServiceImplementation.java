package com.infosys.complaintandrequestservice.service;

import com.infosys.complaintandrequestservice.dto.ComplaintDto;
import com.infosys.complaintandrequestservice.dto.ResidentDto;
import com.infosys.complaintandrequestservice.exception.ComplaintException;
import com.infosys.complaintandrequestservice.feign.SocietyManagementInterface;
import com.infosys.complaintandrequestservice.model.Complaint;
import com.infosys.complaintandrequestservice.repository.ComplaintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ComplaintServiceImplementation implements ComplaintService{
    @Autowired
    SocietyManagementInterface societyManagementInterface;
    @Autowired
    ComplaintRepository complaintRepository;
    @Override
    public Complaint addComplaint(String jwt, ComplaintDto complaintDto) throws ComplaintException {
        ResidentDto resident=societyManagementInterface.getResidentByJWT(jwt);
        Complaint newComplaint=new Complaint();
        newComplaint.setTitle(complaintDto.getTitle());
        newComplaint.setPersonName(complaintDto.getPersonName());
        newComplaint.setDescription(complaintDto.getDescription());
        newComplaint.setResidentId(resident.getResidentId());
        newComplaint.setFlatNo(resident.getFlatNo());
        newComplaint.setStatus("Open");
        newComplaint.setSocietyId(resident.getSocietyId());
        Complaint savedComplaint=complaintRepository.save(newComplaint);
        if (savedComplaint.getComplaintId()!=null){
            return savedComplaint;
        }
        throw new ComplaintException("Unable To Register Complaint");
    }

    @Override
    public List<Complaint> getAllComplaints() {
        return complaintRepository.findAll();
    }

    @Override
    public Complaint closeComplaint(Long complaintId) {
        Optional<Complaint> complaint=complaintRepository.findById(complaintId);
        if (complaint.isPresent()){
            Complaint c=complaint.get();
            c.setStatus("Closed");
            return complaintRepository.save(c);
        }
        throw new ComplaintException("Complaint Not found");
    }

}
