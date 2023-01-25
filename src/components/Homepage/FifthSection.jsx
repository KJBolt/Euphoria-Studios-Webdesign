import React from 'react'

function FifthSection() {
  return (
    <>
        <div className='grid grid-cols-2'>
            <div className='col-span-3 sm:col-span-1  bg-white text-white flex flex-col justify-center items-start pl-5 py-10'>
               <div className='px-5 w-[100%] md:w-[600px] flex flex-col justify-center items-center' data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-duration="800">
                    <div className='flex flex-row justify-center items-center'>
                        <img src={require('../../assets/friends.png')} alt="Game Logo" style={{ height:'230px', width:'230px', objectFit:'fill' }} />
                    </div>

                    <img src={require('../../assets/power.png')} alt="Game Logo" style={{ height:'70px', width:'200px', objectFit:'fill' }} />
                    <p className='uppercase hover:bg-black bg-[#ce3168] px-5 w-fit py-2 shadow-sm shadow-black-300 rounded-lg text-sm cursor-pointer'>Learn More</p>
               </div>
            </div>
            <div className='col-span-3 sm:col-span-1  bg-yellow-600 text-white flex flex-col justify-center items-start pl-5 py-10'>
               <div className='px-5 w-[100%] md:w-[600px] flex flex-col justify-center items-center' data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration="800">
                    <div className='flex flex-row justify-center items-center'>
                        <img src={require('../../assets/T15.png')} alt="Game Logo" style={{ objectFit:'fill' }} />
                    </div>
                    <p className='uppercase hover:bg-black bg-[#ce3168] px-5 w-fit py-2 shadow-sm shadow-black-300 rounded-lg text-sm cursor-pointer'>Learn More</p>
               </div>
            </div>
        </div>
    </>
  )
}

export default FifthSection
