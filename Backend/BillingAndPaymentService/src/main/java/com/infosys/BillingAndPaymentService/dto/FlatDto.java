package com.infosys.BillingAndPaymentService.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class FlatDto {
    private Long flatId;
    private String flatNo;
    private boolean occupied;
    private Long rent;
    private Long societyId;
}