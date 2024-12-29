package com.infosys.NoticeboardEventsPostService.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FlatDto {
    private Long flatId;
    private String flatNo;
    private boolean occupied;
    private Long rent;
    private Long societyId;
}
