package com.infosys.NoticeboardEventsPostService.response;

import com.infosys.NoticeboardEventsPostService.model.Feedback;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FeedbackResponse {
    private Feedback feedback;
    private String message;
}
