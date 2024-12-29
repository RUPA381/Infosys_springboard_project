package com.infosys.BillingAndPaymentService.service;


import com.infosys.BillingAndPaymentService.dto.FlatDto;
import com.infosys.BillingAndPaymentService.dto.ResidentDto;
import com.infosys.BillingAndPaymentService.feign.SocietyManagementInterface;
import com.infosys.BillingAndPaymentService.model.Payment;
import com.infosys.BillingAndPaymentService.repository.PaymentRepository;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import jakarta.annotation.PostConstruct;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class PaymentServiceImplementation implements PaymentService{

    @Autowired
    SocietyManagementInterface societyManagementInterface;
    @Autowired
    PaymentRepository paymentRepository;

    @Value("${razorpay.key.id}")
    private String razorpayId;
    @Value("${razorpay.key.secret}")
    private String razorpaySecret;

    private RazorpayClient razorpayClient;

    @PostConstruct
    public void init() throws RazorpayException {
        this.razorpayClient=new RazorpayClient(razorpayId,razorpaySecret);
    }

    @Scheduled(cron = "0 50 17 23 * *", zone = "Asia/Kolkata")
    public void billReminder(){
        List<FlatDto> flats=societyManagementInterface.getAllFlats();
        for (FlatDto flat:flats){
            if (flat.isOccupied()){
                Payment newPayment=new Payment();
                newPayment.setFlatNo(flat.getFlatNo());
                newPayment.setSocietyId(flat.getSocietyId());
                newPayment.setAmount((long) 3500);
                newPayment.setStatus("PENDING");
                paymentRepository.save(newPayment);
            }
        }
    }
    public List<Payment> getAllPayments(){
        return paymentRepository.findAllPaymentsOrderedByIdDesc();
    }

    @Override
    public Payment createPayment(String jwt) throws RazorpayException {
        ResidentDto resident=societyManagementInterface.getResidentByJWT(jwt);
        List<Payment> flats=paymentRepository.findByFlatNo(resident.getFlatNo());
        for(Payment flat:flats){
            if(flat.getStatus().equals("PENDING")){
                JSONObject json=new JSONObject();
                json.put("amount",flat.getAmount());
                json.put("currency","INR");
                json.put("receipt",resident.getEmail());
                Order razorpayOrder=razorpayClient.orders.create(json);
                flat.setRazorpayId(razorpayOrder.get("id"));
                return paymentRepository.save(flat);
            }
        }
        throw new RazorpayException("Flat Not Found");
    }
    @Override
    public void updateStatus(Map<String, String> response) {
        String razorpayId=response.get("razorpay_order_id");
        Payment details=paymentRepository.findByRazorpayId(razorpayId);
        System.out.println(details);
        details.setStatus("PAID");
        details.setPaymentDate(new Date());
        paymentRepository.save(details);
        System.out.println(details);
        System.out.println("details updated");
    }
}
