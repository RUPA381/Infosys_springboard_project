package com.infosys.BillingAndPaymentService.controller;


import com.infosys.BillingAndPaymentService.model.Payment;
import com.infosys.BillingAndPaymentService.service.PaymentService;
import com.razorpay.RazorpayException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class PaymentController {

    @Autowired
    PaymentService paymentService;

    @GetMapping("/getAllPayments")
    public List<Payment> getAllPayments(){
        return paymentService.getAllPayments();
    }

    @PostMapping("/createPayment")
    public Payment createPayment(@RequestHeader("Authorization") String jwt) throws RazorpayException {
        return paymentService.createPayment(jwt);
    }

    @PostMapping("/paymentCallback")
    public String paymentCallback(@RequestBody Map<String,String> response){
        System.out.println("Callback Response: " + response);
        paymentService.updateStatus(response);
        return "Payment is Successful";
    }

}
