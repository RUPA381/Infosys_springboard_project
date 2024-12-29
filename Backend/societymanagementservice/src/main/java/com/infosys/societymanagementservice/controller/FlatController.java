package com.infosys.societymanagementservice.controller;

import com.infosys.societymanagementservice.config.JwtProvider;
import com.infosys.societymanagementservice.dto.FlatDto;
import com.infosys.societymanagementservice.exception.RegistrationException;
import com.infosys.societymanagementservice.model.Flat;
import com.infosys.societymanagementservice.model.Resident;
import com.infosys.societymanagementservice.model.Society;
import com.infosys.societymanagementservice.repository.ResidentRepository;
import com.infosys.societymanagementservice.repository.SocietyRepository;
import com.infosys.societymanagementservice.service.FlatService;
import com.infosys.societymanagementservice.service.ResidentService;
import com.infosys.societymanagementservice.service.SocietyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class FlatController {

    @Autowired
    SocietyService societyService;
    @Autowired
    SocietyRepository societyRepository;
    @Autowired
    FlatService flatService;
    @PostMapping("/addFlat")
    public Flat addFlat(@RequestHeader("Authorization") String jwt,@RequestBody FlatDto flatDto){
        String email= JwtProvider.getEmailFromJwtToken(jwt);
        Society society=societyRepository.findByEmail(email);
        Flat flat=new Flat();
        flat.setFlatNo(flatDto.getFlatNo());
        flat.setOccupied(false);
        flat.setSocietyId(society.getSocietyId());
        return flatService.addFlat(flat);
    }
    @GetMapping("/getAllFlats")
    public List<Flat> getAllFlats(){
        return flatService.getAllFlats();
    }

    @GetMapping("/flatByFlatNo")
    public Flat getFlatByFlatNoAndSocietyId(@RequestHeader("Authorization") String jwt,@RequestParam String flatNo) throws RegistrationException {
        Society society=societyService.getAdminDetails(jwt);
        return flatService.getFlatByFlatNoAndSocietyId(flatNo,society.getSocietyId());
    }
}
