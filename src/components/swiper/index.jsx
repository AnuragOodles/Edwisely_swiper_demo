import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import './RemedialSudyContent.css'

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';
import 'swiper/modules/navigation/navigation.min.css';


// import required modules
import Scrollbar from 'swiper/modules/scrollbar/scrollbar';
import Navigation from 'swiper/modules/navigation/navigation';
import { styled } from '@mui/material';
import RemedialStudyCard from '../RemedialStudyCard';


const dummyArray = [1, 2, 3, 4, 5, 6]

const RemedialStudyContent = () => {
    const[ activeIndex , setActiveIndex] = useState(0)

    const commonCss = {
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        boxShadow: '0px 0px 13px 0px rgba(0, 0, 0, 0.10)',
    }

    const SwiperWapper = styled('div')(({ theme }) => ({
        position: 'relative',
        '.swiper': {
            position: 'static;'
        },
        '.swiper-button-next': {
            ...commonCss,
            right: '-20px',
            backgroundColor: theme.palette.primary.contrastText,

            '&::after': {
                fontSize: '20px',
                color: theme.palette.primary[800]
            }
        },
        '.swiper-button-prev': {
            ...commonCss,
            left: '-20px',
            backgroundColor: theme.palette.primary.contrastText,
            '&::after': {
                fontSize: '20px',
                color: theme.palette.primary[800]
            }
        }
    }));


    return (
        <>
            <SwiperWapper className='study-swiper'>
                <Swiper
                    spaceBetween={18}
                    slidesPerView={1.2}
                    onSlideChange={(swiperCore) => {
                        console.log('slide change' , swiperCore.activeIndex)
                        setActiveIndex(swiperCore.activeIndex)
                    }}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation={true}
                    scrollbar={{
                        hide: true,
                    }}
                    modules={[Scrollbar, Navigation]}>
                    {dummyArray.map((item, index) => {
                        return (
                            <SwiperSlide key={index}><RemedialStudyCard index={index} /></SwiperSlide>
                        )
                    })}
                </Swiper>
            </SwiperWapper>
        </>
    )
}

export default RemedialStudyContent