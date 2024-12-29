package com.infosys.NoticeboardEventsPostService.response;

import com.infosys.NoticeboardEventsPostService.model.Notice;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NoticeResponse {
    private Notice notice;
    private String message;
}
