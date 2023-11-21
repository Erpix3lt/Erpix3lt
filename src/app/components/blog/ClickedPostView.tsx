'use client'
import React from 'react';
import LargeWrapper from '../wrapper/LargeWrapper';
import Image from 'next/image';
import SmallWrapper from '../wrapper/SmallWrapper';
import Link from 'next/link';
import { usePostStore } from '@/app/stores/PostStore';

const ClickedPostView: React.FC = () => {
  const post = usePostStore(state => state.post)

  return (
    <div className='pl-5 pr-5'>
      <LargeWrapper>
        <h1 className='m-0 p-0 caption font-serif bg-gradient-to-r from-fuchsia-300 to-green-300'>{post.caption}</h1>
      </LargeWrapper>
      <div className='mb-10'></div>
      <div className='flex gap-4'>
        {post.link_urls !== null && post.link_urls.map((link, index) => (
          <SmallWrapper key={index}>
            <Link className='font-serif' href={link}>
              {link}
            </Link>
          </SmallWrapper>
        ))}
      </div>
      <div className='text-xm font-serif mt-3'>{post.description}</div>
      <div className='mt-10'>
        <div className='grid grid-cols-3 gap-4'>
          {post.image_urls !== null && post.image_urls.map((image, index) => (
            <React.Fragment key={index}>
              <Image src={image} width={500} height={500} alt={image} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClickedPostView;
