package com.infosys.NoticeboardEventsPostService.service;


import com.infosys.NoticeboardEventsPostService.dto.FeedbackDto;
import com.infosys.NoticeboardEventsPostService.exception.FeedbackException;
import com.infosys.NoticeboardEventsPostService.model.Feedback;
import com.infosys.NoticeboardEventsPostService.response.FeedbackResponse;

import java.util.List;

public interface FeedbackService {
    public FeedbackResponse addFeedback(FeedbackDto feedbackDto,Long eventId) throws FeedbackException;
    public List<Feedback> getFeedbackByEventId(Long eventId) throws FeedbackException;
}
