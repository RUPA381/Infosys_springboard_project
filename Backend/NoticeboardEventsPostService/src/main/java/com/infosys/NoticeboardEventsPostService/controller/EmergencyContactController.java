package com.infosys.NoticeboardEventsPostService.controller;

import com.infosys.NoticeboardEventsPostService.dto.EmergencyContactDto;
import com.infosys.NoticeboardEventsPostService.exception.EmergencyContactException;
import com.infosys.NoticeboardEventsPostService.model.EmergencyContact;
import com.infosys.NoticeboardEventsPostService.response.EmergencyContactResponse;
import com.infosys.NoticeboardEventsPostService.service.EmergencyContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class EmergencyContactController {

    @Autowired
    EmergencyContactService emergencyContactService;
    @PostMapping("/addContact")
    public EmergencyContactResponse addContact(@RequestHeader("Authorization") String jwt,@RequestBody EmergencyContactDto emergencyContactDto) throws EmergencyContactException {
        return emergencyContactService.addContact(emergencyContactDto,jwt);
    }
    @GetMapping("/getAllContacts")
    public List<EmergencyContact> getAllContacts(@RequestHeader("Authorization") String jwt){
        return emergencyContactService.getAllContacts();
    }
    @PutMapping("/updateContact/{emergencyId}")
    public EmergencyContactResponse updateContact(@RequestHeader("Authorization") String jwt,@RequestBody EmergencyContactDto emergencyContactDto,@PathVariable Long emergencyId) throws EmergencyContactException{
        return emergencyContactService.updateContact(emergencyContactDto,emergencyId);
    }
    @DeleteMapping("/deleteContact/{emergencyId}")
    public EmergencyContactResponse deleteContact(@RequestHeader("Authorization") String jwt,@PathVariable Long emergencyId) throws EmergencyContactException{
        return emergencyContactService.deleteContact(emergencyId);
    }
}
