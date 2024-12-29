package com.infosys.complaintandrequestservice.service;

import com.infosys.complaintandrequestservice.dto.RequestDto;
import com.infosys.complaintandrequestservice.exception.RequestException;
import com.infosys.complaintandrequestservice.model.Request;
import com.infosys.complaintandrequestservice.model.Vendor;
import com.infosys.complaintandrequestservice.repository.RequestRepository;
import com.infosys.complaintandrequestservice.repository.VendorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RequestServiceImplementation implements RequestService {

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private VendorRepository vendorRepository;

    @Autowired
    private RequestRepository requestRepository;

    @Override
    public String sendRequest(RequestDto requestDto) throws RequestException {
        if (!isValidPhoneNumber(requestDto.getPhoneNo())) {
            throw new RequestException("Invalid phone number");
        }
        Optional<Vendor> vendorOptional = vendorRepository.findById(requestDto.getVendorId());
        if (vendorOptional.isEmpty()) {
            throw new RequestException("Vendor with ID " + requestDto.getVendorId() + " not found.");
        }

        Vendor vendor = vendorOptional.get();
        String emailBody = createRequestBody(requestDto);
        String subject = vendor.getService();
        String recipientEmail = vendor.getEmail();
        boolean isEmailSent = sendEmail(recipientEmail, emailBody, subject);

        if (isEmailSent) {
            // Save the request in the database
            Request newRequest = new Request();
            newRequest.setAddress(requestDto.getAddress());
            newRequest.setDescription(requestDto.getDescription());
            newRequest.setStatus("Open");
            newRequest.setVendorId(requestDto.getVendorId());
            requestRepository.save(newRequest);
            return "Request sent and saved successfully.";
        } else {
            throw new RequestException("Failed to send the email. Request not saved.");
        }
    }

    private boolean sendEmail(String toEmail, String body, String subject) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom("rupamalika757@gmail.com");
            message.setTo(toEmail);
            message.setText(body);
            message.setSubject(subject);
            javaMailSender.send(message);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    private String createRequestBody(RequestDto requestDto) {
        return "Request Details:\n" +
                "Address: " + requestDto.getAddress() + "\n" +
                "Description: " + requestDto.getDescription() + "\n" +
                "Phone No: " + requestDto.getPhoneNo();
    }

    private boolean isValidPhoneNumber(String phoneNo) {
        // Regex to match valid phone numbers (e.g., 10 digits, allows country code)
        String phoneRegex = "^(\\+\\d{1,3}[- ]?)?\\d{10}$";
        return phoneNo != null && phoneNo.matches(phoneRegex);
    }
}
