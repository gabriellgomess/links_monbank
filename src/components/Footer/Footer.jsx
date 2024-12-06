import './Footer.css';
import { Box } from '@mui/material';
import Logo from '/assets/imagens/logo_monbank_yellow.png'
import Apps from '/assets/imagens/apps_light.png'
import RedesSociais from '/assets/icones/redes_sociais.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px'}}>
                    <Box sx={{width: {xs: '180px', lg:'300px' }}}>
                        <img src={Logo} style={{width: '100%'}} alt="logotipo monbank" />
                    </Box>
                    <Box sx={{width: {xs: '200px', lg: '280px'}}}>
                        <h1 className='subtitle-desktop text-light'>Baixe o app</h1>
                        <img style={{marginTop: '30px', width: '100%'}} src={Apps} alt="" />
                    </Box>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between', gap: '40px', marginTop:'40px', flexWrap: 'wrap'}}>
                    <Box sx={{width: {xs: '100%', sm: '100%', md: '50%', lg: '45%'}}}>
                        <p className='subtitle-desktop text-light text-w-500'>Atendimento</p>
                        <hr style={{border: '1px solid #FAFAFA', margin:'60px 0'}} />
                        <Box sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: {xs: '100%', sm: '100%', md: '100%', lg: '70%'}}}>
                            <Box>
                                <p className='text-desktop text-light text-w-500'>Telefone</p>
                                <p style={{marginTop: '30px'}} className='text-desktop text-light text-w-200'>(51) 3574-6945</p>
                            </Box>
                            <Box>
                                <p className='text-desktop text-light text-w-500'>E-mail</p>
                                <p style={{marginTop: '30px'}} className='text-desktop text-light text-w-200'>meajuda@monbank.net</p>
                            </Box>
                        </Box>
                        <p style={{marginTop: '30px'}} className='text-desktop text-light text-w-200'>Segunda a sexta-feira (exceto feriados), das 9h às 18h</p>
                    </Box>
                    <Box sx={{width: {xs: '100%', sm: '100%', md: '50%', lg: '45%'}}}>
                    <p className='subtitle-desktop text-light text-w-500'>Ouvidoria</p>
                    <hr style={{border: '1px solid #FAFAFA', margin:'60px 0'}} />
                        <Box sx={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', width: {xs: '100%', sm: '100%', md: '100%', lg: '70%'}}}>
                            <Box>
                                <p className='text-desktop text-light text-w-500'>Telefone</p>
                                <p style={{marginTop: '30px'}} className='text-desktop text-light text-w-200'>0800 000 3636</p>
                            </Box>
                            <Box>
                                <p className='text-desktop text-light text-w-500'>E-mail</p>
                                <p style={{marginTop: '30px'}} className='text-desktop text-light text-w-200'>etica@monbank.net</p>
                            </Box>
                        </Box>
                    </Box>
                    
                </Box>
                <hr style={{border: '1px solid #FAFAFA', margin:'60px 0'}} />
                <Box sx={{display: 'flex', gap: '20px', justifyContent: 'start', flexWrap: 'wrap'}}>
                <Box sx={{width: {xs: '100%', lg: '33%'}, display: 'flex', flexDirection: 'column', alignItems:{xs: 'center', lg: 'start'}}}>
                    <p className='text-desktop text-light text-w-200'>Sobre Nós</p>
                    <Link to='/regulatorio' style={{textDecoration: 'none'}}><p style={{marginTop: '30px'}} className='text-desktop text-light text-w-200'>Regulatório</p></Link>
                    </Box>
                    <Box sx={{width: {xs: '100%', lg: '33%'}, display: 'flex', flexDirection: 'column', alignItems:{xs: 'center', lg: 'start'}}}>
                    <Link to='/politica-de-privacidade' style={{textDecoration: 'none'}}><p style={{marginTop: '30px'}} className='text-desktop text-light text-w-200'>Portal da Privacidade</p></Link>
                    <p style={{marginTop: '30px'}} className='text-desktop text-light text-w-200'>Politica de Segurança Cibernética</p>                    
                    </Box>
                    <Box sx={{width: {xs: '100%', lg: '33%'}, display: 'flex', flexDirection: 'column', alignItems:{xs: 'center', lg: 'start'}}}>
                    <p className='text-desktop text-light text-w-200'>Segurança da informação</p>
                    <p style={{marginTop: '30px'}} className='text-desktop text-light text-w-200'>Ajuda</p>
                    </Box>
                </Box>
                <hr style={{border: '1px solid #FAFAFA', margin:'60px 0'}} />
                <Box sx={{display: 'flex', justifyContent: {xs: 'center', lg: 'center'}, margin: '60px auto', width: {xs: '150px', lg: '200px'}}}>
                    <img style={{width: '100%'}} src={RedesSociais} alt="Redes Sociais" />
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '60px'}}>
                <p className='text-desktop text-light text-w-200 color-grey text-extra-small'>Monetarie S.A. CNPJ: 46.026.562/0001-05</p>
                <p className='text-desktop text-light text-w-200 color-grey text-extra-small'>Av. Carlos Gomes, 300 sala 1502 – CEP 90.480-000 – Boa Vista – Porto Alegre/RS</p>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <p style={{marginTop: '60px'}} className='text-desktop text-light text-w-200 color-grey text-extra-small text-center'>Toda comunicação através da rede mundial de computadores está sujeita a interrupções ou atrasos, podendo prejudicar ordens, negociações ou a recepção de informações atualizadas. O MonBank exime-se de responsabilidade por danos sofridos por seus clientes, por força de falha de serviços disponibilizados por terceiros, incluindo, sem limitação, aqueles conexos à rede mundial de computadores.</p>
                <p style={{marginTop: '30px'}} className='text-desktop text-light text-w-200 color-grey text-extra-small text-center'>Todos os elementos que compõem este site, incluindo, mas não se limitando, as suas marcas, sinais de propaganda, textos, fotos e outras imagens, são propriedade e objeto de direitos exclusivos de seus respectivos titulares e/ou licenciados. A reprodução destes elementos sem prévia autorização dos respectivos proprietários e/ou licenciados constitui ou pode vir a constituir violação de propriedade intelectual, sujeitando os infratores às penalidades cabíveis na legislação civil e penal. Caso tenha interesse em utilizar algum dos elementos contidos neste site, entre em contato com o MonBank.</p>
                </Box>

            </div>
        </footer>
    );
}

export default Footer;