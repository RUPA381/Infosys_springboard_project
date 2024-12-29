package com.infosys.NoticeboardEventsPostService.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class NoticeDto {
    private String heading;
    private String content;
    private Date datePosted;
    private String noticeImage;
}
