package com.infosys.NoticeboardEventsPostService.repository;

import com.infosys.NoticeboardEventsPostService.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post,Long> {
}
