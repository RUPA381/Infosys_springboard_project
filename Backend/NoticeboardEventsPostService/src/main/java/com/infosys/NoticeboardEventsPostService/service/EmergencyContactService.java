package com.infosys.NoticeboardEventsPostService.service;

import com.infosys.NoticeboardEventsPostService.dto.EmergencyContactDto;
import com.infosys.NoticeboardEventsPostService.exception.EmergencyContactException;
import com.infosys.NoticeboardEventsPostService.model.EmergencyContact;
import com.infosys.NoticeboardEventsPostService.response.EmergencyContactResponse;

import java.util.List;

public interface EmergencyContactService {

    public EmergencyContactResponse addContact(EmergencyContactDto emergencyContactDto, String jwt) throws EmergencyContactException;
    public List<EmergencyContact> getAllContacts();
    public EmergencyContactResponse updateContact(EmergencyContactDto emergencyContactDto,Long emergencyContactId) throws EmergencyContactException;
    public EmergencyContactResponse deleteContact(Long emergencyContactId) throws EmergencyContactException;
}
