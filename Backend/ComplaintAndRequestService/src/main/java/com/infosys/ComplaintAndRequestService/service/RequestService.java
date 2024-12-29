package com.infosys.complaintandrequestservice.service;

import com.infosys.complaintandrequestservice.dto.RequestDto;
import com.infosys.complaintandrequestservice.exception.RequestException;

public interface RequestService {
    public String sendRequest(RequestDto requestDto) throws RequestException;
}
