import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState } from "react";

import Session1Carroussel1 from "./Session1Carroussel1";
import Session1Carroussel2 from "./Session1Carroussel2";

const Session1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          effect={'fade'}
          autoplay={{
              delay: 7000,
              disableOnInteraction: false,
          }}
          modules={[EffectFade, Navigation, Pagination, Autoplay]}
          loop={true}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          navigation={true}
        >
        <SwiperSlide>
          <Session1Carroussel1 active={currentSlide === 0} />
        </SwiperSlide>
        <SwiperSlide>
          <Session1Carroussel2 active={currentSlide === 1} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Session1;
