package com.infosys.complaintandrequestservice.controller;

import com.infosys.complaintandrequestservice.dto.RequestDto;
import com.infosys.complaintandrequestservice.exception.RequestException;
import com.infosys.complaintandrequestservice.service.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class RequestController {

    @Autowired
    RequestService requestService;
    @PostMapping("/sendRequest")
    public String sendRequest(@RequestHeader("Authorization") String jwt,@RequestBody RequestDto requestDto) throws RequestException {
        return requestService.sendRequest(requestDto);
    }
}
