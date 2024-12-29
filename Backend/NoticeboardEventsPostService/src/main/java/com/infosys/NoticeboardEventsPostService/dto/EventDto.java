package com.infosys.NoticeboardEventsPostService.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EventDto {
    private String eventName;
    private LocalDateTime eventDate;
    private String eventDetails;
    private String eventImage;
}
