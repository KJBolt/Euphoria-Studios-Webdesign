import React, {useState,useEffect} from 'react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";



function Gallery() {
    const [width, setWidth] = useState(10000)

    

    useEffect(() => {
       const getWindowWidth = () => {
        const getWidth = window.innerWidth
        setWidth(getWidth)
       } 

       window.addEventListener('resize', getWindowWidth);

       return () => {
        window.removeEventListener('resize', getWindowWidth);
      };
    }, [])
    

  return (
    <div className='bg-[#362267]'>
      <h5 className='text-center text-2xl font-semibold pt-20 mb-10 text-white'>Gallery</h5>

      <div className='relative h-auto w-[100%] py-2 md:py-5'>
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={width <= 490 ? 1 : 3 }
            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            }}
            autoplay={{ delay: 1500 }}
            pagination={true}
            loop={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper h-[100%] w-[100%] mb-10"
        >
            <SwiperSlide>
                <div className={`bg-[#1989ce] rounded-lg shadow-sm text-white shadow-black h-[100%] flex flex-col items-start justify-center px-2 py-3 md:px-16 md:py-10`}>
                    <div className='flex flex-row items-center justify-center'>
                        <div>
                            <img src={require('../assets/mario.jpg')} alt="" style={{height:'80px', width:'80px'}} />
                        </div>
                        <div>
                            <img src={require('../assets/T15.png')} alt="" style={{height:'120px', width:'120px'}} />
                        </div>
                    </div>
                    <p className='text-xl font-semibold mt-2'>Marvin Max</p>
                    <p className='mb-2 font-light w-[80%]  md:w-[100%]'>The Euphoria experience is one where every product produced is exclusively crafted to suite the tastes of each individual client's need</p>
                    <p className='uppercase text-white text-xs md:text-sm bg-[#ce3168] shadow-lg rounded-lg px-8 py-2 w-fit cursor-pointer hover:bg-black'>More here</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-[#1e1338] rounded-lg shadow-sm text-white shadow-black h-[100%] flex flex-col items-start px-2 py-5 md:px-16 md:py-10'>
                    <div className='flex flex-row items-center justify-center'>
                        <div>
                            <img src={require('../assets/mario.jpg')} alt="" style={{height:'80px', width:'80px'}} />
                        </div>
                        <div>
                            <img src={require('../assets/T15.png')} alt="" style={{height:'120px', width:'120px'}} />
                        </div>
                    </div>
                    <p className='text-xl font-semibold mt-2'>Marvin Max</p>
                    <p className='mb-2 font-light w-[80%]  md:w-[100%]'>The Euphoria experience is one where every product produced is exclusively crafted to suite the tastes of each individual client's need</p>
                    <p className='uppercase text-white text-sm bg-[#ce3168] shadow-lg rounded-lg px-8 py-2 w-fit cursor-pointer hover:bg-black'>More here</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-[#1989ce] rounded-lg shadow-sm text-white shadow-black h-[100%] flex flex-col items-start px-2 py-5 md:px-16 md:py-10'>
                    <div className='flex flex-row items-center justify-center'>
                        <div>
                            <img src={require('../assets/mario.jpg')} alt="" style={{height:'80px', width:'80px'}} />
                        </div>
                        <div>
                            <img src={require('../assets/T15.png')} alt="" style={{height:'120px', width:'120px'}} />
                        </div>
                    </div>
                    <p className='text-xl font-semibold mt-2'>Marvin Max</p>
                    <p className='mb-2 font-light w-[80%]  md:w-[100%]'>The Euphoria experience is one where every product produced is exclusively crafted to suite the tastes of each individual client's need</p>
                    <p className='uppercase text-white text-sm bg-[#ce3168] shadow-lg rounded-lg px-8 py-2 w-fit cursor-pointer hover:bg-black'>More here</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-[#1e1338] rounded-lg shadow-sm text-white shadow-black h-[100%] flex flex-col items-start px-2 py-5 md:px-16 md:py-10'>
                    <div className='flex flex-row items-center justify-center'>
                        <div>
                            <img src={require('../assets/mario.jpg')} alt="" style={{height:'80px', width:'80px'}} />
                        </div>
                        <div>
                            <img src={require('../assets/T15.png')} alt="" style={{height:'120px', width:'120px'}} />
                        </div>
                    </div>
                    <p className='text-xl font-semibold mt-2'>Marvin Max</p>
                    <p className='mb-2 font-light w-[80%]  md:w-[100%]'>The Euphoria experience is one where every product produced is exclusively crafted to suite the tastes of each individual client's need</p>
                    <p className='uppercase text-white text-sm bg-[#ce3168] shadow-lg rounded-lg px-8 py-2 w-fit cursor-pointer hover:bg-black'>More here</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-[#1989ce] rounded-lg shadow-sm text-white shadow-black h-[100%] flex flex-col items-start px-2 py-5 md:px-16 md:py-10'>
                    <div className='flex flex-row items-center justify-center'>
                        <div>
                            <img src={require('../assets/mario.jpg')} alt="" style={{height:'80px', width:'80px'}} />
                        </div>
                        <div>
                            <img src={require('../assets/T15.png')} alt="" style={{height:'120px', width:'120px'}} />
                        </div>
                    </div>
                    <p className='text-xl font-semibold mt-2'>Marvin Max</p>
                    <p className='mb-2 font-light w-[80%]  md:w-[100%]'>The Euphoria experience is one where every product produced is exclusively crafted to suite the tastes of each individual client's need</p>
                    <p className='uppercase text-white text-sm bg-[#ce3168] shadow-lg rounded-lg px-8 py-2 w-fit cursor-pointer hover:bg-black'>More here</p>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='bg-[#1e1338] rounded-lg shadow-sm text-white shadow-black h-[100%] flex flex-col items-start px-2 py-5 md:px-16 md:py-10 mb-0'>
                    <div className='flex flex-row items-center justify-center'>
                        <div>
                            <img src={require('../assets/mario.jpg')} alt="" style={{height:'80px', width:'80px'}} />
                        </div>
                        <div>
                            <img src={require('../assets/T15.png')} alt="" style={{height:'120px', width:'120px'}} />
                        </div>
                    </div>
                    <p className='text-xl font-semibold mt-2'>Marvin Max</p>
                    <p className='mb-2 font-light w-[80%]  md:w-[100%]'>The Euphoria experience is one where every product produced is exclusively crafted to suite the tastes of each individual client's need</p>
                    <p className='uppercase text-white text-sm bg-[#ce3168] shadow-lg rounded-lg px-8 py-2 w-fit cursor-pointer hover:bg-black'>More here</p>
                </div>
            </SwiperSlide>
            
        </Swiper>
      </div>
    </div>
  )
}

export default Gallery
