import React from 'react'

function SecondSection() {
  return (
    <>
        {/* <h4 className='text-center font-extrabold text-2xl uppercase mt-10 mb-5 border-double border-red-700'>Departmants</h4> */}
        <div className='grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3'>
            <div className='col-span-3  sm:col-span-1 z-10' >
            <img src={require('../../assets/mario.jpg')} alt="mario" className='h-[100%] md:h-[400px] object-cover' />
            </div>
            <div className='col-span-3 sm:col-span-1 md:col-span-2  bg-[#362267] text-white flex flex-col justify-center items-start pl-5 py-10'>
               <div className='px-5 w-[100%] md:w-[600px]' data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="800">
                    <div className='flex flex-row mb-3 items-center'>
                        <img src={require('../../assets/game_logo1.jpg')} alt="Game Logo" style={{ height:'70px', width:'70px' }} />
                        <p className='text-xl font-bold'>Game Development</p>
                    </div>

                    <p className='mb-3 font-light w-[80%]  md:w-[100%]'>The Euphoria experience is one where every product produced is exclusively crafted to suite the tastes of each individual client's need</p>
                    <p className='uppercase hover:bg-black bg-[#ce3168] px-5 w-fit py-2 shadow-lg shadow-black-300 rounded-lg text-sm cursor-pointer'>More here</p>
               </div>
            </div>
        </div>
    </>
  )
}

export default SecondSection
