import React from 'react';

function FourthSection() {
  return (
    <>
        <div className='grid grid-cols-3 bg-[#362267]'>
            <div className='col-span-3  sm:col-span-1 md:col-span-1 relative' data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800">
                <img src={require('../../assets/webdev1.jpg')} alt="camera" className='h-[100%] md:h-[400px] w-[100%] object-cover relative md:absolute' />
                <div className='flex flex-row justify-center items-center z-10 absolute top-0 w-[100%] h-[100%] '>
                  <p className='text-2xl text-gray-300 font-bold text-center'>Web Development</p>
                </div>
            </div>
            <div className='col-span-3  sm:col-span-2 md:col-span-2 relative' data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800" data-aos-delay="100">
                <img src={require('../../assets/commercials.jpg')} alt="camera" className='h-[100%] md:h-[400px] w-[100%] object-cover' />
                <div className='flex flex-row justify-center items-center z-10 absolute top-0 w-[100%] h-[100%]'>
                  <p className='text-2xl text-white font-bold text-center'>Audio Commercials</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default FourthSection
