import React from 'react'
import Heading from './Heading'

export default function Container({heading, children}) {
  return (
    <div className='w-screen h-auto flex flex-col justify-center items-center mb-10 mt-10'>
        <Heading>{heading}</Heading>
        {children}
    </div>
  );
}