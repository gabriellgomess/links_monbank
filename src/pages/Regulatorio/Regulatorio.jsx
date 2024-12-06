import { Box } from '@mui/material';
import regulatorioData from './regulatorio.json';
import { Link } from 'react-router-dom';

const Regulatorio = () => {
    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', maxWidth: '1200px', margin: '200px auto', gap: '60px', justifyContent: {xs: 'center', sm: 'center', md: 'center', lg: 'start'}}}>
        {regulatorioData.map((item, index) => (
            <Box key={index} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', marginTop: '20px'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', maxWidth: '500px', padding: '0 15px'}}>
                    <h1 className='title-desktop'>{item.title}</h1>
                    <Box sx={{display: 'flex', flexDirection: 'column', gap: '30px', marginTop: '60px'}}>
                    {item.links.map((link, index) => (
                        <Link key={index} to={link.url} target='blank' style={{textDecoration: 'none', color: 'black', display: 'flex', gap: '20px', alignItems: 'center'}}>
                            <img width='46px' src={link.icon} alt="" />
                            <p className='text-desktop'>{link.title}</p>
                        </Link>
                    ))}
                    </Box>
                </Box>
            </Box>
        ))}
        </Box>
    );
    }

export default Regulatorio;