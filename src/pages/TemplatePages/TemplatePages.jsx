import { useState } from 'react';

import './TemplatePages.css';
import { Box, Accordion, AccordionActions, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';



const TemplatePages = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const progressPercentage = ((currentSlide % data.session2[0].cards.length) + 1) / data.session2[0].cards.length * 100;

  return (
    <div className="container-template">
      {/* Sessão 1 */}
      {data.session1 && (
        <Box sx={{display: 'flex', height: '800px', gap: '40px', alignItems: 'center'}}>
          <Box sx={{width: '50%', height: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center'}}>
            <Box sx={{width: '592px', display: 'flex', flexDirection: 'column', gap: '40px'}}>
              <h1 className='title-desktop'>{data.session1[0].title}</h1>
              <p className='subtitle-desktop'>{data.session1[0].text}</p>
              <a href={data.session1[0].btnLink}>
                <Box className='btn-yellow'>{data.session1[0].btnText}</Box>
              </a>
            </Box>            
          </Box>
          <Box sx={{backgroundImage: `url(${data.session1[0].img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '50%', height: '100%' }}>
          </Box>
        </Box>
      )}

      {/* Sessão 2 */}
      {data.session2 && (
        <Box sx={{width: '100%',  backgroundColor: '#101820', backgroundImage: `url(${data.session2[0].bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '60px', padding: '120px 0'}}>
          <h1 className='title-desktop text-white'>
            {data.session2[0].title}{" "}
            <span className='text-yellow'>{data.session2[0].titleEmphasis}</span>
          </h1>
          <p style={{maxWidth: '954px', textAlign: 'center'}} className='subtitle-desktop text-white'>{data.session2[0].text}</p>
          <Box sx={{ width: '290px', margin: '0 auto', padding: '60px 0' }}>
          <Box
            sx={{
              height: '4px',
              backgroundColor: '#101820',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                height: '4px',
                width: `${progressPercentage}%`,
                backgroundColor: '#e0e0e0',
                transition: 'width 0.3s ease',
                '@media (max-width: 600px)': {
                  width: `${progressPercentage}%`,
                },
              }}
            />
          </Box>
        </Box>
        <Box sx={{width: '80%', display: 'flex', justifyContent: 'center'}}>
            <Swiper
            spaceBetween={3}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="swiper-produtos"
          >
          {data.session2[0].cards.map((slide, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '20px',
                  width: '350px',
                  height: '400px',
                  backgroundColor: '#F1F3F7',
                  borderRadius: '20px',
                  padding: '30px',
                }}
              >
                <img style={{ width: '120px' }} src={slide.icon} alt="" />
                <h1 style={{ textAlign: 'center' }} className="title-desktop title-small">
                  {slide.title}
                </h1>
                <p className="text-desktop text-small" style={{ textAlign: 'center' }}>
                  {slide.text}
                </p>              
              </Box>
            </SwiperSlide>
          ))}
          </Swiper>
        </Box>
      </Box>
    )}

      {/* Sessão 3 */}
      {data.session3 && (
        <Box>
          <Box sx={{display: 'flex', gap: '60px', alignItems: 'center', justifyContent: 'center', padding: '120px 0', backgroundColor: '#FAFAFA'}}>
          <Box sx={{width: '550px', minHeight: '456px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <h1 className='title-desktop'>Mais de três décadas de experiência</h1>
            <p className='subtitle-desktop' style={{lineHeight: '46px'}}>Originado a partir do Grupo Monetarie, reconhecido entre os 500 Maiores do Sul + Emergentes na edição de 30 anos da Revista AMANHÃ, o MonBank carrega mais de 30 anos de experiência.</p>
          </Box>
          <Box sx={{borderRadius: '20px', width: '632px', minHeight: '456px', backgroundImage: `url(${data.session3[0].img})`, backgroundRepeat: 'no-repeat', backgoundSize: 'cover', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img width='273px' src={data.session3[0].logo} alt="" />
          </Box>        
        </Box>
        <Box sx={{width: '95%', display: 'flex', justifyContent: 'center', margin: '0 auto 120px auto'}}>
            <Swiper
            spaceBetween={2}
            slidesPerView={4}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            loop={true}
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            // navigation={true}
            className="swiper-produtos"
          >
          {data.session3[0].cards.map((slide, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '20px',
                  width: '350px',
                  height: '400px',
                  backgroundColor: '#F1F3F7',
                  borderRadius: '20px',
                  padding: '30px',
                }}
              >
                <img style={{ width: '120px' }} src={slide.icon} alt="" />
                <h1 style={{ textAlign: 'center' }} className="title-desktop title-small">
                  {slide.title}
                </h1>
                <p className="text-desktop text-small" style={{ textAlign: 'center' }}>
                  {slide.text}
                </p>              
              </Box>
            </SwiperSlide>
          ))}
          </Swiper>
        </Box>
        
        </Box>
        
      )}

      {/* Sessão 4 */}

      {data.session4 && (
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'start', backgroundColor: '#FAFAFA', width: '1200px', margin: '0 auto', padding: '0 0 120px 0'}}>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: '60px', marginBottom: '80px'}}>
            <h1 className='title-desktop'>{data.session4[0].title}</h1>
            <p className='subtitle-desktop' style={{lineHeight: '46px'}}>{data.session4[0].text}</p>
          </Box>
          <Box sx={{}}>
            {data.session4[0].duvidas.map((card, index) => (
              <Accordion elevation={0} key={index} sx={{width: '100%', padding: '20px 0', borderBottom: '1px solid #E0E0E0'}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <p className='subtitle-desktop'>{card.title}</p>
                </AccordionSummary>
                <AccordionDetails>
                  <p className='text-desktop'>{card.text}</p>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>        
        </Box>
      )}

    </div>
  );
};

export default TemplatePages;
