import { Box } from '@mui/material';
import Foto from '/assets/imagens/homemfotomonbank.jpg';
import Apps from '/assets/imagens/apps.png';
import './Sessions.css';

const Session1Carroussel1 = ({ active }) => {
  return (
    <Box sx={{
      width: '100%',
      height: '948px',
      backgroundImage: `url(${Foto})`,
      backgroundSize: 'cover',
      backgroundPositionX: '0',
      backgroundRepeat: 'no-repeat',
      padding: '100px 0 0 352px'
    }}>
      <Box sx={{
        width: '592px',
        display: 'flex',
        alignItems: 'start',
        flexDirection: 'column',
        gap: '60px'
      }}>
        <Box className={`text-animate ${active ? 'show' : ''}`}>
          <h1 className='title-desktop'>CCB Monbank:</h1>
          <h1 className='title-desktop'>crédito rápido e seguro para o seu negócio</h1>
        </Box>
        <p style={{ width: '450px' }} className={`subtitle-desktop text-animate ${active ? 'show' : ''}`}>
          Obtenha recursos de maneira prática e eficiente com a Cédula de Crédito Bancário do MonBank.
        </p>
        <Box className={`btn-receber-proposta`}>
          Quero receber uma proposta
        </Box>
        <Box>
          <img src={Apps} alt="" />
        </Box>
      </Box>
    </Box>
  );
};

export default Session1Carroussel1;
