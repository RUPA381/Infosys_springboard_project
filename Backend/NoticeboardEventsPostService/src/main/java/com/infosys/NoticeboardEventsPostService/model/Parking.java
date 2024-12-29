package com.infosys.NoticeboardEventsPostService.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Parking {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long parkingId;
    private String flatNo;
    private String parkingNo;
    private Long flatId;
    private Long societyId;
}
