package com.infosys.NoticeboardEventsPostService.repository;

import com.infosys.NoticeboardEventsPostService.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event,Long> {
}
