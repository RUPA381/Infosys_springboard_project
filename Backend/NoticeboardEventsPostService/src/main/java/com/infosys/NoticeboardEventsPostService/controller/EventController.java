package com.infosys.NoticeboardEventsPostService.controller;


import com.infosys.NoticeboardEventsPostService.dto.EventDto;
import com.infosys.NoticeboardEventsPostService.exception.EventException;
import com.infosys.NoticeboardEventsPostService.model.Event;
import com.infosys.NoticeboardEventsPostService.response.EventResponse;
import com.infosys.NoticeboardEventsPostService.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class EventController {

    @Autowired
    EventService eventService;
    @PostMapping("/addEvent")
    public EventResponse addEvent(@RequestHeader("Authorization") String jwt,@RequestBody EventDto eventDto) throws EventException {
        return eventService.addEvent(jwt, eventDto);
    }

    @GetMapping("/getAllEvents")
    public List<Event> getAllEvents(@RequestHeader("Authorization") String jwt) throws EventException{
        return eventService.getAllEvents();
    }

    @PutMapping("updateEvent/{eventId}")
    public EventResponse updateEvent(@RequestHeader("Authorization") String jwt,@RequestBody EventDto eventDto,@PathVariable Long eventId){
        return eventService.updateEvent(eventId,eventDto);
    }

    @DeleteMapping("/deleteEvent/{eventId}")
    public EventResponse deleteEvent(@RequestHeader("Authorization") String jwt,@PathVariable Long eventId){
        return eventService.deleteEvent(eventId);
    }

    @GetMapping("/getEventById/{eventId}")
    public Event getEventByEventId(@RequestHeader("Authorization") String jwt,@PathVariable Long eventId){
        return eventService.getEventById(eventId);
    }
}
