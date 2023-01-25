import React from 'react'

function ThirdSection() {
  return (
    <>
        <div className='grid grid-cols-2'>
            <div className='col-span-3 sm:col-span-1  bg-[#1989ce] text-white flex flex-col justify-center items-start pl-5 py-10'>
                <div className='px-5 w-[100%] md:w-[450px] lg:w-[600px] z-10' data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="400">
                    <div className='flex flex-row mb-3 items-center'>
                        <img src={require('../../assets/video_logo.jpg')} alt="Game Logo" style={{ height:'70px', width:'70px', objectFit:'fill' }} />
                        <p className='text-xl font-bold'>Video Production</p>
                    </div>

                    <p className='mb-3 font-light w-[80%]  md:w-[100%]'>The Euphoria experience is one where every product produced is exclusively crafted to suite the tastes of each individual client's need</p>
                    <p className='uppercase hover:bg-black bg-[#ce3168] px-5 w-fit py-2 shadow-sm shadow-black-300 rounded-lg text-sm cursor-pointer'>More here</p>
                </div>
            </div>
            <div className='col-span-3  sm:col-span-1'>
            <img src={require('../../assets/camera.jpg')} alt="camera" className='h-[100%] md:h-[400px] w-[100%] object-cover' />
            </div>
        </div>
    </>
  )
}

export default ThirdSection
