import { Box, TextField, Checkbox, Accordion, AccordionActions, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom'
import Ellipse from '../../../public/assets/icones/ellipse-contato.png';
import Arrow from '../../../public/assets/icones/arrow-ellipse.png';

const FaleConosco = () => {

    const duvidas = [
        {
            "title" : "Dúvidas frequentes",
            "text" : "Podemos ajudar você com alguma dúvida?",
            "duvidas" : [
                {
                    "title" : "Dúvidas frequentes?",
                    "text" : "Respostas aqui"
                },
                {
                    "title" : "Dúvidas frequentes?",
                    "text" : "Respostas aqui"
                },
                {
                    "title" : "Dúvidas frequentes?",
                    "text" : "Respostas aqui"
                },
                {
                    "title" : "Dúvidas frequentes?",
                    "text" : "Respostas aqui"
                },
                {
                    "title" : "Dúvidas frequentes?",
                    "text" : "Respostas aqui"
                },
                {
                    "title" : "Dúvidas frequentes?",
                    "text" : "Respostas aqui"
                },
                {
                    "title" : "Dúvidas frequentes?",
                    "text" : "Respostas aqui"
                }
               
            ],
            "btnText" : "Abra sua conta",
            "btnLink" : "/conta-digital"
        }
    ]

    return (
        <Box>
        <Box sx={{margin: '200px auto 120px auto', display: 'flex', justifyContent: 'center', gap: '20px'}}>
            <Box sx={{width: '580px', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', gap: '60px'}}>
                <h1 className='title-desktop'>Precisa de ajuda? Entre em contato conosco.</h1>
                <p className='subtitle-desktop'>Preencha o fromulário ao lado que entraremos em contato!</p>
                <Box sx={{width: '66px', height: '66px', backgroundImage: `url(${Ellipse})`, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={Arrow} alt="" />
                </Box>
            </Box>
            <Box sx={{width: '578px', backgroundColor: '#F1F3F7', borderRadius: '20px', border: '1px solid #CFCDC9', padding: '70px 67px'}}>
                <TextField color='primary' fullWidth label="Seu nome completo" variant="outlined" sx={{marginBottom: '20px', backgroundColor: '#fff'}} required />
                <TextField color='primary' fullWidth label="Seu telefone" variant="outlined" sx={{marginBottom: '20px', backgroundColor: '#fff'}} required />
                <TextField color='primary' fullWidth label="Seu e-mail" variant="outlined" sx={{marginBottom: '20px', backgroundColor: '#fff'}} required />
                <TextField color='primary' fullWidth label="Mensagem" multiline rows={6} variant="outlined" sx={{marginBottom: '20px', backgroundColor: '#fff'}} required />
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Checkbox color='primary' required />
                    <label className='text-desktop'>Concordo com a <Link style={{color: '#669BFC', fontWeight: 'bold'}} to='/politica-de-privacidade'>Política de Privacidade</Link></label>   
                </Box>
                <Box className='btn-yellow btn-contato' sx={{margin: '60px auto 20px auto'}}>
                    Enviar
                </Box>              
                
            </Box>
        </Box>
        <Box sx={{}}>
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'start', backgroundColor: '#FAFAFA', width: '1200px', margin: '0 auto', padding: '0 0 120px 0'}}>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: '60px', marginBottom: '80px'}}>
            <h1 className='title-desktop'>{duvidas[0].title}</h1>
            <p className='subtitle-desktop' style={{lineHeight: '46px'}}>{duvidas[0].text}</p>
          </Box>
        {duvidas[0].duvidas.map((item, idx) => (
            <Accordion elevation={0} key={idx} sx={{width: '100%', padding: '20px 0', borderBottom: '1px solid #E0E0E0'}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${idx}-content`}
                    id={`panel${idx}-header`}
                >
                    <p className='subtitle-desktop'>{item.title}</p>
                </AccordionSummary>
                <AccordionDetails>
                    <p className='text-desktop'>{item.text}</p>
                </AccordionDetails>
            </Accordion>
        ))}
         <Box
          className={`btn-receber-proposta`}
          sx={{marginTop: '120px' }}
        >
          Abra sua conta
        </Box>

        </Box>
       
          </Box>    
        </Box>
        
    );
    }

export default FaleConosco;