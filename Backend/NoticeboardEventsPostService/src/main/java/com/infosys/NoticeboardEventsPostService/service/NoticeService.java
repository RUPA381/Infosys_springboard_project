package com.infosys.NoticeboardEventsPostService.service;



import com.infosys.NoticeboardEventsPostService.dto.NoticeDto;
import com.infosys.NoticeboardEventsPostService.exception.NoticeException;
import com.infosys.NoticeboardEventsPostService.model.Notice;
import com.infosys.NoticeboardEventsPostService.response.NoticeResponse;

import java.util.List;

public interface NoticeService {
    public NoticeResponse addNotice(String jwt, NoticeDto noticeDto) throws NoticeException;
    public List<Notice> getAllNotices() throws NoticeException;
    public NoticeResponse updateNotice(Long noticeId,NoticeDto noticeDto) throws NoticeException;
    public NoticeResponse deleteNotice(Long noticeId) throws NoticeException;
    public Notice getNoticeById(Long noticeId) throws NoticeException;
}
