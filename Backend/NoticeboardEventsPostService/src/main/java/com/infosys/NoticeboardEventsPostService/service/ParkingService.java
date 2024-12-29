package com.infosys.NoticeboardEventsPostService.service;

import com.infosys.NoticeboardEventsPostService.dto.ParkingDto;
import com.infosys.NoticeboardEventsPostService.exception.ParkingException;
import com.infosys.NoticeboardEventsPostService.model.Parking;

import java.util.List;

public interface ParkingService {
    public Parking addParking(String jwt,ParkingDto parkingDto) throws ParkingException;
    public List<Parking> getAllParking();
}
