package com.infosys.societymanagementservice.service;

import com.infosys.societymanagementservice.dto.AdminDto;
import com.infosys.societymanagementservice.dto.ResidentDto;
import com.infosys.societymanagementservice.exception.RegistrationException;
import com.infosys.societymanagementservice.model.Society;

import java.util.List;
import java.util.Optional;

public interface SocietyService {
    public String societyRegistration(AdminDto adminDto, String jwt) throws RegistrationException;
    public List<Society> getAllSocieties();
    public Society getSocietyByName(String name) throws RegistrationException;
    public Society getSocietyById(Long id);
    public Society getAdminDetails(String jwt);
}
