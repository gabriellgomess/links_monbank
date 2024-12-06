import { Box } from '@mui/material';
import Regulatorio from '/assets/icones_links/regulatorio.png';
import Linkedin from '/assets/icones_links/linkedin.png';
import YouTube from '/assets/icones_links/youtube.png';
import Facebook from '/assets/icones_links/facebook.png';
import Banner from '/assets/imagens/banner_links.png';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
      // Referência para observar a entrada do componente na viewport
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 }); // 50% visível para acionar a animação

    const links = [
        {
            title: 'Regulatório',
            url: '/regulatorio',
            icon: Regulatorio
        },
        {
            title: 'Linkedin',
            url: 'https://www.linkedin.com/company/monbank',
            icon: Linkedin
        },
        {
            title: 'Youtube',
            url: 'https://www.youtube.com/@sejamonbank',
            icon: YouTube
        },
        {
            title: 'Facebook',
            url: 'https://www.facebook.com/sejamonbank',
            icon: Facebook
        }
    ]

    return (
        
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '180px auto 100px auto', width: {xs: '90%', lg: '80%', xl: '1200px'}}}>
         <motion.div
            ref={ref} // Atribuindo a referência
            initial={{ opacity: 0, y: 50 }} // Invisível e deslocado para baixo
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Move para sua posição original ao entrar na viewport
            transition={{ duration: 1.5 }} // Controle de duração
        >


            <h1 style={{textAlign: 'center', maxWidth: '650px'}} className='subtitle-desktop text-w-400'>O site do MonBank está passando por manutenções e atualizações para trazer uma nova experiência ainda mais <span style={{color: '#FFC845'}}>moderna</span> e <span style={{color: '#FFC845'}}>eficiente</span></h1>
          </motion.div>
        
        <h1 style={{textAlign: 'center', maxWidth: '600px', marginTop: '80px'}} className='subtitle-desktop text-w-400'><span style={{fontWeight: 'bold'}}>Em breve:</span> um novo Monbank no ar! &#9203;</h1>

     
        

        <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '40px'}}>
            {links.map((link, index) => (
                <Link key={index} to={link.url} style={{textDecoration: 'none'}}>
                    <Box sx={{display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'space-between', maxWidth: '428px', minWidth: '320px', height: '60px', border: '1px solid black', borderRadius: '200px', padding: '9px 32px'}}>
                        <img width='40px' src={link.icon} alt={link.title} />
                        <h1 className='text-desktop' style={{textAlign: 'center'}}>{link.title}</h1>
                        <div></div>
                    </Box>
                </Link>
                
            ))}
        </Box>  

        </Box>
    );
    }

export default Links;