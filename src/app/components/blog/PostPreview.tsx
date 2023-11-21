// components/Post.tsx
'use client'
import React from 'react';
import SmallWrapper from '@/app/components/wrapper/SmallWrapper';
import LargeWrapper from '@/app/components/wrapper/LargeWrapper';
import { usePostStore } from '@/app/stores/PostStore';

interface PostProps {
  post: Post;
}

type Post = {
  caption: string
  created_at: string
  description: string
  image_urls: string[]
  link_urls: string[]
};

const PostPreview: React.FC<PostProps> = ({ post }) => {


  const handleClick = (currentPost: Post) => {
    // Set the post in the Zustand store when the component is clicked
    usePostStore.setState({      post: currentPost, });
  };
  
  return (
    <div onClick={()=>{handleClick(post)}}>
      <LargeWrapper>
        <h2 className='text-lg font-serif mb-2'>{post.created_at}</h2>
        <SmallWrapper>
          <p className="text-sm text-white-100 font-serif">{post.caption}</p>
        </SmallWrapper>
        <div>
          <div className="text-white-100 mt-1">
            <p className='text-xs font-serif'>{post.description}</p>
          </div>
        </div>

        {/* Caption always displayed */}
      </LargeWrapper>
    </div>
  );
};

export default PostPreview;
