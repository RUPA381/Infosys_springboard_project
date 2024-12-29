package com.infosys.BillingAndPaymentService.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ResidentDto {
    private Long residentId;
    private String name;
    private String phoneNo;
    private String flatNo;
    private String postal;
    private String email;
    private Long flatId;
    private Long societyId;
    private String role;
}
