package com.infosys.NoticeboardEventsPostService.response;

import com.infosys.NoticeboardEventsPostService.model.EmergencyContact;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class EmergencyContactResponse {
    private EmergencyContact emergencyContact;
    private String message;
}
