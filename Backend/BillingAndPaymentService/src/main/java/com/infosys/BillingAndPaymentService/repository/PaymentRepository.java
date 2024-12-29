package com.infosys.BillingAndPaymentService.repository;

import com.infosys.BillingAndPaymentService.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentRepository extends JpaRepository<Payment,Long> {
    public List<Payment> findByFlatNo(String flatNo);
    public Payment findByRazorpayId(String razorpayId);
    @Query("SELECT p FROM Payment p ORDER BY p.paymentId DESC")
    List<Payment> findAllPaymentsOrderedByIdDesc();
}
