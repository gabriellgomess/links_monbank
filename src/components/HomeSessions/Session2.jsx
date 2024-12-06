import { Box } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import BgSession2 from '/assets/imagens/photo-low-angle-view-singapore-city-buildings-generative-ai 1.png';
import MulherMonbank from '/assets/imagens/mulhermonbank 1.jpg';
import SimboloMonbank from '/assets/icones/simbolo_monbank.png';
import Apps from '/assets/imagens/apps.png';

const Session2 = () => {
  // Referência para observar a entrada do componente na viewport
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 }); // 50% visível para acionar a animação

  return (
    <Box
      ref={ref} // Conectando o hook à div principal
      sx={{
        width: '100%',
        height: 'fit-content',
        marginTop: '-40px',
        backgroundClip: 'border-box',
        backgroundColor: '#101820',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '1312px',
          backgroundImage: `url(${BgSession2})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '50px',
          }}
          className="container"
        >
          {/* Animação de baixo para cima */}
          <motion.div
            className="animate-1"
            style={{
              width: '756px',
              height: '756px',
              borderRadius: '50%',
              backgroundImage: `url(${MulherMonbank})`,
            }}
            initial={{ opacity: 0, y: 100 }} // Invisível e fora da posição inicial
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Ativa apenas se estiver visível
            transition={{ duration: 1.5 }} // Controle de duração
          />

          {/* Animação da esquerda para a direita */}
          <motion.div
            className="animate-2"
            style={{
              width: '510px',
              display: 'flex',
              flexDirection: 'column',
              gap: '50px',
              color: '#FAFAFA',
            }}
            initial={{ opacity: 0, x: -100 }} // Invisível e fora da posição inicial
            animate={isInView ? { opacity: 1, x: 0 } : {}} // Ativa apenas se estiver visível
            transition={{ duration: 1.5 }} // Controle de duração
          >
            <img width="50px" src={SimboloMonbank} alt="" />
            <h1 className="title-desktop">
              Produtos e serviços desenvolvidos para impulsionar sua empresa.
            </h1>
            <p className="subtitle-desktop">
              Explore um universo de produtos e serviços pensados para suas
              necessidades.
            </p>
            <Box className="btn-receber-proposta">Abra sua conta</Box>
            <img width="318px" src={Apps} alt="" />
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Session2;
