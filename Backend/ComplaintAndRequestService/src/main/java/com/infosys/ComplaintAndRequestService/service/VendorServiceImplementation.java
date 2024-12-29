package com.infosys.complaintandrequestservice.service;

import com.infosys.complaintandrequestservice.dto.SocietyDto;
import com.infosys.complaintandrequestservice.dto.VendorDto;
import com.infosys.complaintandrequestservice.exception.VendorException;
import com.infosys.complaintandrequestservice.feign.SocietyManagementInterface;
import com.infosys.complaintandrequestservice.model.Vendor;
import com.infosys.complaintandrequestservice.repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.regex.Pattern;

@Service
public class VendorServiceImplementation implements VendorService {
    @Autowired
    VendorRepository vendorRepository;
    @Autowired
    SocietyManagementInterface societyManagementInterface;

    private static final String EMAIL_REGEX = "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$";
    private static final String PHONE_REGEX = "^[6-9]\\d{9}$";

    private void validateEmail(String email) {
        if (!Pattern.matches(EMAIL_REGEX, email)) {
            throw new VendorException("Invalid Email Address");
        }
    }

    private void validatePhoneNumber(String phoneNumber) {
        if (!Pattern.matches(PHONE_REGEX, phoneNumber)) {
            throw new VendorException("Invalid Phone Number");
        }
    }

    @Override
    public Vendor addVendor(String jwt, VendorDto vendorDto) {
        validateEmail(vendorDto.getEmail());
        validatePhoneNumber(vendorDto.getPhoneNo());

        SocietyDto society = societyManagementInterface.getAdminDetails(jwt);
        Vendor newVendor = new Vendor();
        newVendor.setName(vendorDto.getName());
        newVendor.setCompany(vendorDto.getCompany());
        newVendor.setService(vendorDto.getService());
        newVendor.setPhoneNo(vendorDto.getPhoneNo());
        newVendor.setEmail(vendorDto.getEmail());
        newVendor.setSocietyId(society.getSocietyId());
        Vendor savedVendor = vendorRepository.save(newVendor);
        if (savedVendor.getVendorId() != null) {
            return savedVendor;
        }
        throw new VendorException("Unable to add vendor");
    }

    @Override
    public List<Vendor> getAllVendors() {
        return vendorRepository.findAll();
    }

    @Override
    public Vendor updateVendor(Long vendorId, VendorDto vendorDto) {
        Optional<Vendor> vendorOptional = vendorRepository.findById(vendorId);
        if (vendorOptional.isPresent()) {
            Vendor existingVendor = vendorOptional.get();

            if (!existingVendor.getName().equals(vendorDto.getName())) {
                existingVendor.setName(vendorDto.getName());
            }
            if (!existingVendor.getService().equals(vendorDto.getService())) {
                existingVendor.setService(vendorDto.getService());
            }
            if (!existingVendor.getCompany().equals(vendorDto.getCompany())) {
                existingVendor.setCompany(vendorDto.getCompany());
            }
            if (!existingVendor.getPhoneNo().equals(vendorDto.getPhoneNo())) {
                validatePhoneNumber(vendorDto.getPhoneNo());
                existingVendor.setPhoneNo(vendorDto.getPhoneNo());
            }
            if (!existingVendor.getEmail().equals(vendorDto.getEmail())) {
                validateEmail(vendorDto.getEmail());
                existingVendor.setEmail(vendorDto.getEmail());
            }
            return vendorRepository.save(existingVendor);
        }
        throw new VendorException("Vendor Not Found");
    }

    @Override
    public String deleteVendor(Long vendorId) {
        if (!vendorRepository.existsById(vendorId)) {
            throw new VendorException("Vendor Not Found");
        }
        vendorRepository.deleteById(vendorId);
        return "Vendor Deleted Successfully";
    }
}
