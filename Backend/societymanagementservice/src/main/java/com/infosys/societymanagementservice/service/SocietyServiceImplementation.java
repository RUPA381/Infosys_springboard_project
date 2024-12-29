package com.infosys.societymanagementservice.service;

import com.infosys.societymanagementservice.dto.AdminDto;
import com.infosys.societymanagementservice.dto.ResidentDto;
import com.infosys.societymanagementservice.exception.RegistrationException;
import com.infosys.societymanagementservice.feign.AuthenticationInterface;
import com.infosys.societymanagementservice.model.Society;
import com.infosys.societymanagementservice.repository.SocietyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SocietyServiceImplementation implements SocietyService{
    @Autowired
    SocietyRepository societyRepository;
    @Autowired
    AuthenticationInterface authenticationInterface;
    @Override
    public String societyRegistration(AdminDto adminDto, String jwt) throws RegistrationException {
        Society society=societyRepository.findBySocietyName(adminDto.getSocietyName());
        if (society!=null){
            throw new RegistrationException("Society Already Exist");
        }
        Society newSociety=new Society();
        newSociety.setName(adminDto.getName());
        newSociety.setPhoneNo(adminDto.getPhoneNo());
        newSociety.setSocietyName(adminDto.getSocietyName());
        newSociety.setSocietyAddress(adminDto.getSocietyAddress());
        newSociety.setDistrict(adminDto.getDistrict());
        newSociety.setPostal(adminDto.getPostal());
        String email=authenticationInterface.getEmailFromJWT(jwt);
        newSociety.setEmail(email);
        newSociety.setCity(adminDto.getCity());
        societyRepository.save(newSociety);
        return "Registration Successful";
    }

    public List<Society> getAllSocieties() {
        return societyRepository.findAll();
    }

    public Society getSocietyByName(String name) throws RegistrationException {
        Society society=societyRepository.findBySocietyName(name);
        if (society!=null){
            return society;
        }
        throw new RegistrationException("Society Not Found");
    }

    public Society getSocietyById(Long id){
        Optional<Society> society=societyRepository.findById(id);
        return society.orElse(null);
    }
    public Society getAdminDetails(String jwt){
        String email=authenticationInterface.getEmailFromJWT(jwt);
        return societyRepository.findByEmail(email);
    }
}
