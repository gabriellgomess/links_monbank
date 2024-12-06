import { Box } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import IconConta from '/assets/icones/conta.png';
import IconEmprestimo from '/assets/icones/emprestimo.png';
import IconCCB from '/assets/icones/ccb.png';

const Session3 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      icon: IconConta,
      title: 'Conta Digital',
      text: 'Abra sua conta digital PJ de forma rápida e sem complicações. Com o MonBank, você gerencia suas finanças de onde estiver, contando com transferências, pagamentos e serviços integrados na palma da sua mão.',
      link: '',
    },
    {
      icon: IconEmprestimo,
      title: 'Linhas de Empréstimo',
      text: 'Conte com linhas de crédito flexíveis e acessíveis para atender às necessidades da sua empresa. Com condições personalizadas e prazos competitivos, você pode financiar o crescimento do seu negócio de forma rápida e segura.',
      link: '',
    },
    {
      icon: IconCCB,
      title: 'CCB',
      text: 'A CCB do MonBank oferece crédito rápido e descomplicado para empresas. Com a CCB, você acessa uma linha de crédito segura e personalizada, ideal para investimentos estratégicos, otimização do fluxo de caixa e crescimento empresarial.',
      link: '',
    },
    {
      icon: IconConta,
      title: 'Conta Digital',
      text: 'Abra sua conta digital PJ de forma rápida e sem complicações. Com o MonBank, você gerencia suas finanças de onde estiver, contando com transferências, pagamentos e serviços integrados na palma da sua mão.',
      link: '',
    },
    {
      icon: IconEmprestimo,
      title: 'Linhas de Empréstimo',
      text: 'Conte com linhas de crédito flexíveis e acessíveis para atender às necessidades da sua empresa. Com condições personalizadas e prazos competitivos, você pode financiar o crescimento do seu negócio de forma rápida e segura.',
      link: '',
    },
    {
      icon: IconCCB,
      title: 'CCB',
      text: 'A CCB do MonBank oferece crédito rápido e descomplicado para empresas. Com a CCB, você acessa uma linha de crédito segura e personalizada, ideal para investimentos estratégicos, otimização do fluxo de caixa e crescimento empresarial.',
      link: '',
    },

  ];

  const progressPercentage = ((currentSlide % slides.length) + 1) / slides.length * 100;

  // Ref e useInView para ativar animação ao scroll
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 }); // Ativa quando 50% visível

  return (
    <Box
      sx={{ marginTop: '-130px', width: '100%', backgroundColor: '#fff', padding: '180px 0' }}
    >
      <motion.div
        ref={ref} // Conecta o hook à div principal
        className="animate-3"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '50px',
        }}
        initial={{ opacity: 0, y: 100 }} // Invisível e fora da posição
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Ativa animação quando visível
        transition={{ duration: 1.5 }} // Tempo da animação
      >
        <h1 style={{ width: '750px' }} className="title-desktop">
          Tudo que seu negócio precisa de um banco. Em um só lugar.
        </h1>
        <p style={{ width: '950px', textAlign: 'center' }} className="subtitle-desktop">
          Conheça mais sobre nossos produtos e descubra como o MonBank pode ajudar a sua empresa.
        </p>
      </motion.div>

      {/* Barra de progresso */}
      <Box sx={{ width: '130px', margin: '0 auto', padding: '60px 0' }}>
        <Box
          sx={{
            height: '4px',
            backgroundColor: '#e0e0e0',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              height: '4px',
              width: `${progressPercentage}%`,
              backgroundColor: '#101820',
              transition: 'width 0.3s ease',
              '@media (max-width: 600px)': {
                width: `${progressPercentage}%`,
              },
            }}
          />
        </Box>
      </Box>

      {/* Swiper */}
      <Box className="container" sx={{ margin: '0 auto' }}>
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
              slidesPerView: 2,
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
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '20px',
                  width: '400px',
                  height: '500px',
                  backgroundColor: '#F1F3F7',
                  borderRadius: '20px',
                  padding: '30px',
                }}
              >
                <img style={{ width: '70px' }} src={slide.icon} alt="" />
                <h1 style={{ textAlign: 'center' }} className="title-desktop title-small">
                  {slide.title}
                </h1>
                <p className="text-desktop text-small" style={{ textAlign: 'center' }}>
                  {slide.text}
                </p>
                <a href={slide.link}>
                  <p className="text-desktop" style={{ color: '#669BFC', fontWeight: 'bold' }}>
                    Conhecer
                  </p>
                </a>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box sx={{ margin: '30px auto' }} className="btn-receber-proposta">
        Abra sua conta
      </Box>
    </Box>
  );
};

export default Session3;
