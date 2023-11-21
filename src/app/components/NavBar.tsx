import React from 'react'
import Link from 'next/link';
import SmallWrapper from './wrapper/SmallWrapper';
import LargeWrapper from './wrapper/LargeWrapper';

const NavBar = () => {
  return (
    <LargeWrapper>
      <div className='flex flex-row gap-4'>
          <SmallWrapper><Link className='font-serif' href="https://github.com/Erpix3lt">Github</Link></SmallWrapper>
          <SmallWrapper><Link className='font-serif' href="mailto:maximilian.schmalenbach@hotmail.com">Mail</Link></SmallWrapper>
          <SmallWrapper><Link className='font-serif' href="https://git.coco.study/mschmal2/thesis">Thesis</Link></SmallWrapper>
      </div>
    </LargeWrapper>
  )
}

export default NavBar