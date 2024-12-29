package com.infosys.NoticeboardEventsPostService.response;

import com.infosys.NoticeboardEventsPostService.model.Post;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PostResponse {
    private Post post;
    private String message;
}
