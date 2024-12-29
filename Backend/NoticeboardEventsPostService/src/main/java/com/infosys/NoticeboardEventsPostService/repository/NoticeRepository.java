package com.infosys.NoticeboardEventsPostService.repository;

import com.infosys.NoticeboardEventsPostService.model.Notice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoticeRepository extends JpaRepository<Notice,Long> {
}
