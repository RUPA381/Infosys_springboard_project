package com.infosys.societymanagementservice.service;

import com.infosys.societymanagementservice.exception.RegistrationException;
import com.infosys.societymanagementservice.model.Flat;

import java.util.List;

public interface FlatService {
    Flat addFlat(Flat flat);
    public Flat getFlatByFlatNoAndSocietyId(String flatNo, Long societyId) throws RegistrationException;
    List<Flat> getAllFlats();
    Flat updateFlatRent(Long id,Long rent);
}
