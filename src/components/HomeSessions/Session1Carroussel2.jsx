import { Box } from '@mui/material';
import Foto from '/assets/imagens/monbankhome.jpg';
import Apps from '/assets/imagens/apps.png';
import './Sessions.css';

const Session1Carroussel2 = ({ active }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '948px',
        backgroundImage: `url(${Foto})`,
        backgroundSize: 'cover',
        backgroundPositionX: '150px',
        backgroundRepeat: 'no-repeat',
        padding: '100px 0 0 352px',
      }}
    >
      <Box
        sx={{
          width: '592px',
          display: 'flex',
          alignItems: 'start',
          flexDirection: 'column',
          gap: '60px',
        }}
      >
        <Box className={`text-animate ${active ? 'show' : ''}`}>
          <h1 className="title-desktop">
            Um banco digital criado para ser seu{' '}
            <span style={{ color: '#FFC845' }}>parceiro.</span>
          </h1>
        </Box>
        <p
          style={{ width: '450px' }}
          className={`subtitle-desktop text-animate ${active ? 'show' : ''}`}
        >
          O MonBank é um banco digital criado para oferecer soluções financeiras modernas e eficientes para empresas e pessoas.
        </p>
        <Box
          className={`btn-receber-proposta`}
        >
          Abra sua conta
        </Box>
        <Box>
          <img src={Apps} alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default Session1Carroussel2;
