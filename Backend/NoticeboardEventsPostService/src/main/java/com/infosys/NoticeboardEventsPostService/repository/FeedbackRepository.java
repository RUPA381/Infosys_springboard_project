package com.infosys.NoticeboardEventsPostService.repository;

import com.infosys.NoticeboardEventsPostService.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback,Long> {
    public List<Feedback> findByEventId(Long eventId);
}
