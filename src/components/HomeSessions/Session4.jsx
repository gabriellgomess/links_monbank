import { Box } from '@mui/material'
import FotoMonbankHomem from '/assets/imagens/fotomonbankhomem.jpg';
import FotoMonbankGrupo from '/assets/imagens/fotomonbankgrupo.jpg';
import FotoMonbankMulher from '/assets/imagens/fotomonbankmulher.jpg';
import FotoMonbankHomem2 from '/assets/imagens/fotomonbankhomem2.jpg';
import PhoneMockup from '/assets/imagens/phone_mockup.png';
import Circulos from '/assets/imagens/circulos.png';
import SymbolMonbank from '/assets/imagens/symbol_monbank_bg.png';


const Session4 = () => {

    const cards = [
        {
            title: 'Sem filas e sem burocracia',
            description: 'Crédito rápido e direto, sem perda de tempo em filas ou com papelada.',
            img: FotoMonbankHomem
        },
        {
            title: 'Sem complicação pra cobrar e receber.',
            description: 'Processos simplificados para garantir que o dinheiro entre e saia de forma prática e eficiente.',
            img: FotoMonbankGrupo  
        },
        {
            title: 'Atendimento humanizado, ágil e acessível',
            description: 'Suporte especializado, sempre pronto para entender e atender suas necessidades.',
            img: FotoMonbankMulher
        },
        {
            title: 'Tarifas e taxas negociadas conforme o seu perfil',
            description: 'Condições personalizadas, feitas sob medida para o perfil e objetivos da sua empresa.',
            img: FotoMonbankHomem2
        }
    ]

    return (
        <Box sx={{backgroundColor: '#F1F3F4', padding: '100px 0', backgroundImage: `url(${SymbolMonbank})`, backgroundSize: '1800px 1800px', backgroundRepeat: 'no-repeat', backgroundPositionX: '-880px', backgroundPositionY: '100%' }}>
            <Box className='container' sx={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px'}}>
                {cards.map((card, index) => (
                    <Box key={index} sx={{display: 'flex', width: '700px', height: '324px', justifyContent: 'start', alignItems: 'center', backgroundColor: '#FFFFFF', borderRadius: '20px'}}>
                        <Box sx={{width: '324px', height: '324px', backgroundColor: 'white', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <img height='100%' style={{borderRadius: '20px 0 0 20px'}} src={card.img} alt={card.title} />
                        </Box>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px', padding: '0 40px', alignItems: 'start'}}>
                            <h3 className='title-desktop title-small'>{card.title}</h3>
                            <p className='text-desktop text-small'>{card.description}</p>
                        </Box>
                    </Box>
                ))}
            </Box>
           

            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '1048px', gap: '45px', margin: '80px auto 0 auto'}}>
                <h1 className='title-desktop'>O banco feito para sua empresa</h1>
                <p style={{width: '800px', textAlign: 'center'}} className='subtitle-desktop'>Tenha uma conta digital feita para seu negócio, sem burocracia e sem complicação. Tudo na palma da sua mão.</p>
            </Box>

            <Box sx={{marginLeft: '80px', display: 'flex', alignItems: 'center'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: '56px', margin: '0 -100px 0 100px'}}>
                    <h1 className='title-about'>Sobre Nós</h1>
                    <p className='text-desktop'>Originado a partir do Grupo Monetarie, reconhecido entre os 500 Maiores do Sul + Emergentes na edição de 30 anos da Revista AMANHÃ, o MonBank carrega mais de uma década de experiência. </p>
                    <p className='text-desktop'>Essa expertise sólida  permite oferecer serviços que realmente fazem a diferença na vida financeira de nossos clientes.</p>
                    <Box className='btn-conheca'>Conheça</Box>
                    <img width='413px' src={Circulos} alt="Circulos" />
                </Box>
                <Box>
                    <img src={PhoneMockup} alt="" />
                </Box>
            </Box>
        </Box>
    )
}

export default Session4