import React from 'react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
const Slide = () => {
    return (
        <>
        <div className='mx-auto w-full md:w-3/4 lg:w-3/5 max-w-4xl'>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Navigation, Pagination]}
        className="mySwiper"
        >
             <SwiperSlide><img src="https://wallpapercave.com/wp/wp15113361.webp" alt=""  /></SwiperSlide>
        <SwiperSlide> <img src="https://wallpapercave.com/wp/wp4011939.jpg" alt=""  /></SwiperSlide>
        <SwiperSlide><img src="https://wallpapercave.com/wp/Zlxkx5r.jpg" alt=""  /></SwiperSlide>

        </Swiper>
        
         
            

          
           
               
            
          
            
          
    
        </div>
        
        
        
        
        </>
        
    );
};

export default Slide;



                // 
                // <img src="https://4kwallpapers.com/images/walls/thumbs_3t/23275.jpg" alt="" className='w-200 h-110' />
                // <img src="https://wallpapercave.com/wp/wp4011939.jpg" alt="" className='w-200 h-110' />
                // <img src="https://images4.alphacoders.com/115/thumbbig-1151249.webp" alt="" className='w-200 h-110' />
            