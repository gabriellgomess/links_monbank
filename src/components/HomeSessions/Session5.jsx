import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Box } from '@mui/material';

const cards = [
    {
        title: 'Card 1',        
    },
    {
        title: 'Card 2',        
    },
    {
        title: 'Card 3',        
    },
    {
        title: 'Card 4',        
    },
    {
        title: 'Card 5',
    },
    {
        title: 'Card 6',
    }
]

const Session5 = () => {
    return (
        <Box sx={{ width: '100%', backgroundColor: '#fff',  height: '692px', display: 'flex', alignItems: 'center' }}>
            {/* Swiper */}
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    }
                }}
                navigation = {true}
                modules={[Navigation, Pagination]}
                className='swiper-cards'
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', width: '584px', height: '584px', borderRadius: '20px' }}>
                            <p className='subtitle-desktop'>{card.title}</p>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}

export default Session5;