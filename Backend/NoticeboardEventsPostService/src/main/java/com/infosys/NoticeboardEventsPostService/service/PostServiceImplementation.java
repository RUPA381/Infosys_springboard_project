package com.infosys.NoticeboardEventsPostService.service;

import com.infosys.NoticeboardEventsPostService.dto.PostDto;
import com.infosys.NoticeboardEventsPostService.dto.SocietyDto;
import com.infosys.NoticeboardEventsPostService.exception.NoticeException;
import com.infosys.NoticeboardEventsPostService.exception.PostException;
import com.infosys.NoticeboardEventsPostService.feign.SocietyManagementInterface;
import com.infosys.NoticeboardEventsPostService.model.Notice;
import com.infosys.NoticeboardEventsPostService.model.Post;
import com.infosys.NoticeboardEventsPostService.repository.PostRepository;
import com.infosys.NoticeboardEventsPostService.response.NoticeResponse;
import com.infosys.NoticeboardEventsPostService.response.PostResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostServiceImplementation implements PostService{
    @Autowired
    SocietyManagementInterface societyManagementInterface;
    @Autowired
    PostRepository postRepository;

    @Override
    public PostResponse addPost(PostDto postDto, String jwt) throws PostException {
        SocietyDto society=societyManagementInterface.getAdminDetails(jwt);
        Post newPost=new Post();
        newPost.setTitle(postDto.getTitle());
        newPost.setContent(postDto.getContent());
        newPost.setPostImage(postDto.getPostImage());
        newPost.setSocietyId(society.getSocietyId());
        Post savedPost=postRepository.save(newPost);
        if (savedPost.getPostId()!=null){
            return new PostResponse(savedPost,"Post Created Successfully");
        }
        throw new PostException("Unable To Create Post");
    }

    @Override
    public List<Post> getAllPosts() throws PostException {
        return postRepository.findAll();
    }

    @Override
    public PostResponse updatePost(PostDto postDto, Long postId) throws PostException {
        Optional<Post> post=postRepository.findById(postId);
        if (post.isPresent()){
            Post existingPost=post.get();
            if (!existingPost.getTitle().equals(postDto.getTitle())) {
                existingPost.setTitle(postDto.getTitle());
            }
            if (!existingPost.getContent().equals(postDto.getContent())) {
                existingPost.setContent(postDto.getContent());
            }
            if (!existingPost.getPostImage().equals(postDto.getPostImage())) {
                existingPost.setPostImage(postDto.getPostImage());
            }
            Post updatedPost = postRepository.save(existingPost);
            if (updatedPost.getPostId()!=null){
                return new PostResponse(updatedPost,"Post Updated Successfully");
            }
            throw new PostException("Unable To Update Post");
        }
        throw new PostException("Unable To Update Post");
    }

    @Override
    public PostResponse deletePost(Long postId) throws PostException {
        if (!postRepository.existsById(postId)) {
            throw new PostException("Post Not Found");
        }
        postRepository.deleteById(postId);
        return new PostResponse(null,"Post Deleted Successfully");
    }

    @Override
    public Post getPostById(Long postId) throws PostException {
        Optional<Post> post=postRepository.findById(postId);
        if (post.isPresent()){
            return post.get();
        }
        throw new PostException("Post Not Found");
    }

    @Override
    public Post likePost(Long postId) throws PostException {
        Post post=getPostById(postId);
        post.setLikeCount(post.getLikeCount()+1);
        return postRepository.save(post);
    }

    @Override
    public Post removeLike(Long postId){
        Post post=getPostById(postId);
        post.setLikeCount(post.getLikeCount()-1);
        return postRepository.save(post);
    }
}
