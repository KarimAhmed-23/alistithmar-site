'use client';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';
import DirectorBox from './director-box';
import { useRef } from 'react';

SwiperCore.use([Pagination, Navigation]);
interface Director {
  name: string;
  position: string;
  about: string;
  bio: string;
  image: string;
}

interface SliderProps {
  directorsData: Director[];
}

function Slider({ directorsData }: SliderProps) {
  const windowSizeRef = useRef<number | undefined>(
    typeof window !== 'undefined' ? window.innerWidth : undefined
  );

  const [isMobile, setIsMobile] = useState<boolean>(
    windowSizeRef.current !== undefined ? windowSizeRef.current < 576 : false
  );

  useEffect(() => {
    const handleWindowResize = () => {
      const newWindowSize = typeof window !== 'undefined' ? window.innerWidth : undefined;
      windowSizeRef.current = newWindowSize;
      setIsMobile(newWindowSize !== undefined ? newWindowSize < 576 : false);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <div className="slider-container directors-slider-container free-mode-slider equal-h">
      <div className="swiper directors-slider">
        <Swiper
          className="swiper-wrapper"
          slidesPerView={isMobile ? 'auto' : 1}
          freeMode={isMobile}
          spaceBetween={12}
          grabCursor={true}
          loop={false}
          speed={600}
          pagination={{ el: '.directors-slider-container .swiper-pagination', clickable: true }}
          navigation={{ prevEl: '.directors-slider-container .prev-btn', nextEl: '.directors-slider-container .next-btn' }}
          breakpoints={{
            576: {
              slidesPerView: 1.5,
              spaceBetween: 16,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 24,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
        >
          {directorsData.map((director, index) => (
            <SwiperSlide key={index}>
              <DirectorBox director={director} />
            </SwiperSlide>
          ))}
          <div className="slider-arrows">
            <button type="button" className="arrow-btn prev-btn" role="prev">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
            </button>
            <button type="button" className="arrow-btn next-btn" role="next">
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
            </button>
          </div>
        </Swiper>
          <div className="swiper-pagination mt-4"></div>
      </div>
    </div>
  );
}

export default Slider;