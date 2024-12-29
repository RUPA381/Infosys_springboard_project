package com.infosys.NoticeboardEventsPostService.service;

import com.infosys.NoticeboardEventsPostService.dto.NoticeDto;
import com.infosys.NoticeboardEventsPostService.dto.SocietyDto;
import com.infosys.NoticeboardEventsPostService.exception.NoticeException;
import com.infosys.NoticeboardEventsPostService.feign.SocietyManagementInterface;
import com.infosys.NoticeboardEventsPostService.model.Notice;
import com.infosys.NoticeboardEventsPostService.repository.NoticeRepository;
import com.infosys.NoticeboardEventsPostService.response.NoticeResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NoticeServiceImplementation implements NoticeService{
    @Autowired
    NoticeRepository noticeRepository;
    @Autowired
    SocietyManagementInterface societyManagementInterface;
    @Override
    public NoticeResponse addNotice(String jwt, NoticeDto noticeDto) throws NoticeException {
        SocietyDto society=societyManagementInterface.getAdminDetails(jwt);
        Notice newNotice=new Notice();
        newNotice.setHeading(noticeDto.getHeading());
        newNotice.setContent(noticeDto.getContent());
        newNotice.setDatePosted(noticeDto.getDatePosted());
        newNotice.setNoticeImage(noticeDto.getNoticeImage());
        newNotice.setSocietyId(society.getSocietyId());
        Notice savedNotice=noticeRepository.save(newNotice);
        if (savedNotice.getNoticeId()!=null){
            return new NoticeResponse(savedNotice,"Notice Created Successfully");
        }
        throw new NoticeException("Unable To Create Notice");
    }

    @Override
    public List<Notice> getAllNotices() throws NoticeException {
        return noticeRepository.findAll();
    }

    @Override
    public NoticeResponse updateNotice(Long noticeId, NoticeDto noticeDto) throws NoticeException {
        Optional<Notice> notice=noticeRepository.findById(noticeId);
        if (notice.isPresent()){
            Notice existingNotice=notice.get();
            if (!existingNotice.getHeading().equals(noticeDto.getContent())) {
                existingNotice.setHeading(noticeDto.getHeading());
            }
            if (!existingNotice.getContent().equals(noticeDto.getContent())) {
                existingNotice.setContent(noticeDto.getContent());
            }
            if (!existingNotice.getDatePosted().equals(noticeDto.getDatePosted())) {
                existingNotice.setDatePosted(noticeDto.getDatePosted());
            }
            if (!existingNotice.getNoticeImage().equals(noticeDto.getNoticeImage())) {
                existingNotice.setNoticeImage(noticeDto.getNoticeImage());
            }
            Notice updatedNotice = noticeRepository.save(existingNotice);
            if (updatedNotice.getNoticeId()!=null){
                return new NoticeResponse(updatedNotice,"Notice Updated Successfully");
            }
            throw new NoticeException("Unable To Update Notice");
        }
        throw new NoticeException("Unable To Update Notice");
    }

    @Override
    public NoticeResponse deleteNotice(Long noticeId) throws NoticeException {
        if (!noticeRepository.existsById(noticeId)) {
            throw new NoticeException("Notice Not Found");
        }
        noticeRepository.deleteById(noticeId);
        return new NoticeResponse(null,"Notice Deleted Successfully");
    }

    @Override
    public Notice getNoticeById(Long noticeId) throws NoticeException {
        Optional<Notice> notice=noticeRepository.findById(noticeId);
        if (notice.isPresent()){
            return notice.get();
        }
        throw new NoticeException("Notice Not Found");
    }
}
