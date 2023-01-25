import React from 'react';
import {FaFacebookF} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {RiInstagramFill} from 'react-icons/ri';

function Footer() {
  return (
    <div className='flex flex-row justify-center items-center bg-[#1e1338] h-auto p-8'>
        <div className='flex flex-col sm:flex-row items-center w-[100%] md:w-[500px]'>
            <div className='flex flex-row items-center px-10 text-gray-400 mb-3'>
                <FaFacebookF className='mr-3' />
                <BsTwitter className='mr-3'/>
                <RiInstagramFill className='mr-3'/>
            </div>

            <div className='text-gray-500'>
                <p className='mb-5 font-normal'>We specialize in all aspect ranging from 3d and 2d animations, Web development, Graphic Design, Video Production etc</p>
                <p className='uppercase font-medium'>Euphoriastudios @ 2023</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
