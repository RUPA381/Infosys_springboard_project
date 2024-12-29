package com.infosys.NoticeboardEventsPostService.service;

import com.infosys.NoticeboardEventsPostService.dto.FeedbackDto;
import com.infosys.NoticeboardEventsPostService.exception.FeedbackException;
import com.infosys.NoticeboardEventsPostService.model.Feedback;
import com.infosys.NoticeboardEventsPostService.repository.FeedbackRepository;
import com.infosys.NoticeboardEventsPostService.response.FeedbackResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackServiceImplementation implements FeedbackService{

    @Autowired
    FeedbackRepository feedbackRepository;
    @Override
    public FeedbackResponse addFeedback(FeedbackDto feedbackDto, Long eventId) throws FeedbackException{
        Feedback newFeedback=new Feedback();
        newFeedback.setContent(feedbackDto.getContent());
        newFeedback.setEventId(eventId);
        Feedback savedFeedback=feedbackRepository.save(newFeedback);
        if (savedFeedback.getFeedbackId()!=null){
            return new FeedbackResponse(savedFeedback,"Feedback Sent Successfully");
        }
        throw new FeedbackException("Unable to Add Feedback");
    }

    @Override
    public List<Feedback> getFeedbackByEventId(Long eventId) throws FeedbackException{
        return feedbackRepository.findByEventId(eventId);
    }
}
