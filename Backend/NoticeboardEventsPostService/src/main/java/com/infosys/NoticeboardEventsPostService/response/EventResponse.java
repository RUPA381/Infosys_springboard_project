package com.infosys.NoticeboardEventsPostService.response;

import com.infosys.NoticeboardEventsPostService.model.Event;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EventResponse {
    private Event event;
    private String message;
}
