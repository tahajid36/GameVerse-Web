import React from 'react';
import Marquee from 'react-fast-marquee';

const Slide = () => {
    return (
        <div className='mt-10'>
            <Marquee className='' speed={90}>
                <img src="https://imgs.search.brave.com/5vbhttmhF0eRKSmmldg-elH33ePbJfW-HCIWsXYReGo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJiYXQuY29t/L2ltZy85ODcyNjIy/LWd0YS12aS00ay13/YWxscGFwZXIuanBn" alt="" className='w-200 h-110' />
                <img src="https://4kwallpapers.com/images/walls/thumbs_3t/23275.jpg" alt="" className='w-200 h-110' />
                <img src="https://wallpapercave.com/wp/wp4011939.jpg" alt="" className='w-200 h-110' />
                <img src="https://images4.alphacoders.com/115/thumbbig-1151249.webp" alt="" className='w-200 h-110' />
            </Marquee>
        </div>
    );
};

export default Slide;