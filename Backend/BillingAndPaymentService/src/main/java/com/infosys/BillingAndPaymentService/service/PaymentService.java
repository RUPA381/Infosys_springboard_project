package com.infosys.BillingAndPaymentService.service;

import com.infosys.BillingAndPaymentService.model.Payment;
import com.razorpay.RazorpayException;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface PaymentService {
    public List<Payment> getAllPayments();
    public Payment createPayment(String jwt) throws RazorpayException;
    public void updateStatus(Map<String,String> response);
}
