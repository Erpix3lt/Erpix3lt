'use client'

import React from 'react'
import LargeWrapper from './wrapper/LargeWrapper'
import Link from 'next/link'
import SmallWrapper from './wrapper/SmallWrapper'
import { usePostStore } from '@/app/stores/PostStore';
import GreenLink from './Link'


const About = () => {

    const defaultPost = {
        caption: '',
        created_at: '',
        description: '',
        thumbnail_url: '',
        image_urls: [],
        link_urls: [],
    };

    const handleClick = () => {
        // Set the post in the Zustand store when the component is clicked
        usePostStore.setState({      post: defaultPost, });
      };

    return (
        <div onClick={handleClick}>
            <LargeWrapper>
                <p className='text-xs font-serif text-white-100 m-0'>Currently studying (Ma) Integrated Design Research, at KISD, Th Köln.
                    Finished my Bachelor studies at Code & Context, Th Köln. Currently working on <GreenLink href='https://garments.digital/'>Garments.Digital</GreenLink> an online platform allowing for the creation of digital fashion items. My thesis explored the topic of digital fashion, using text-to-image models and deep-learning, in a participatory design approach. Currently exploring dark ecologies in a model based research approach. </p>
            </LargeWrapper>
        </div>
    )
}

export default About