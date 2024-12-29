package com.infosys.NoticeboardEventsPostService.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class EmergencyContact {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long emergencyId;
    private String personName;
    private String serviceType;
    private String phoneNo;
    private String block;
    private Long societyId;
}
