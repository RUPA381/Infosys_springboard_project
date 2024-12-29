package com.infosys.societymanagementservice.service;

import com.infosys.societymanagementservice.dto.ResidentDto;
import com.infosys.societymanagementservice.dto.ResidentProfileDto;
import com.infosys.societymanagementservice.exception.RegistrationException;
import com.infosys.societymanagementservice.model.Resident;

import java.util.List;

public interface ResidentService {
    public String residentRegistration(ResidentDto residentDto,String jwt) throws RegistrationException;
    public List<Resident> getResidents();
    public Resident getResident(String jwt);
    public Resident getResidentProfile(String jwt);
}
