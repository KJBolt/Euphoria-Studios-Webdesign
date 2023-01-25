import React from 'react'
import action from '../../assets/action.mp4'

function FirstSection() {
  return (
    <div className='h-96 relative overflow-hidden'>
        <video autoPlay loop muted className='object-cover w-[100%] h-[100%] absolute'>
            <source src={action} type='video/mp4' />
        </video>

        <div className='absolute z-10 text-white h-[100%] sm:[w-100%] md:w-[600px] p-6 flex flex-col my-auto justify-center items-center' data-aos="fade-left" data-aos-easing="ease-in-out" data-aos-duration="800">
            <div>
                <h4 className='uppercase font-black text-xl md:text-4xl mb-2'>Welcome to euphoria studios</h4>
                <p className='mb-2 font-light w-[80%]  md:w-[100%]'>The Euphoria experience is one where every product produced is exclusively crafted to suite the tastes of each individual client's need</p>
                <p className='uppercase text-white text-md md:text-lg bg-[#ce3168] shadow-lg rounded-lg px-8 py-2 w-fit cursor-pointer hover:bg-black'>More here</p>
            </div>
        </div>
    </div>
  )
}

export default FirstSection
