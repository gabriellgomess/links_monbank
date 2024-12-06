import { useState } from 'react';
import Logo from '/assets/imagens/logo_monbank.png';
import { Box, useMediaQuery } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.css';

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const isDesktop = useMediaQuery('(min-width: 600px)');
    const [showProdutosDropdown, setShowProdutosDropdown] = useState(false);
    const [showServicosDropdown, setShowServicosDropdown] = useState(false);

    // Pegar o pathname
    const location = useLocation();
    const path = location.pathname;

    // Função para verificar se o link deve ser "active" para os itens do dropdown
    const isActive = (route) => path.startsWith(route);

    return (
        <Box
            sx={{
                backgroundColor: '#FAFAFA',
                // opacity: 0.9,
                // backdropFilter: 'blur(12px) saturate(143%)',
                display: 'flex',
                alignItems: 'start',
                justifyContent: 'space-between',
                padding: '25px 0 0 0',
                height: '60px',
                transition: 'height 0.3s ease', // Animação suave
                position: 'fixed',
                width: '100vw',
                top: 0,
                zIndex: 999,
                boxShadow: '0px 4px 4px rgb(0 0 0 / 7%)'
            }}
        >   
            <Link to="/">
                <Box sx={{marginLeft: '30px'}}>
                    <img width={180} src={Logo} alt="Logo MonBank" />
                </Box>                
            </Link>
            <Box sx={{marginRight: '50px'}} className="links">
                <Link className={`d-none ${isDesktop ? 'text-desktop' : 'text-mobile'} menu-item-500 ${isActive('/sobre') ? 'menu-item-500-active' : ''}`} to="/sobre">
                    Sobre
                </Link>

                {/* Dropdown para Produtos */}
                <Box
                    onMouseEnter={() => setShowProdutosDropdown(true)}
                    onMouseLeave={() => setShowProdutosDropdown(false)}
                    sx={{ position: 'relative', display: 'inline-block' }}
                >
                    <Link
                        className={`d-none menu-item-400 ${isDesktop ? 'text-desktop' : 'text-mobile'} ${showProdutosDropdown ? 'menu-mouse-over' : ''}`}
                        to="/produtos"
                    >
                        Produtos
                    </Link>
                    {showProdutosDropdown && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                zIndex: 10,
                                display: 'flex',
                                gap: '27px',
                                flexDirection: 'column',
                                margin: '-10px 0',
                                padding: '27px 0 0 0',
                                width: '400px',
                                
                            }}
                            className="slide-in-top"
                        >
                            <Link
                                className={`${isDesktop ? 'text-desktop' : 'text-mobile'} ${isActive('/produtos/conta-digital') ? 'active' : ''}`}
                                to="/produtos/conta-digital"
                            >
                                Conta Digital
                            </Link>
                            <Link
                                className={`${isDesktop ? 'text-desktop' : 'text-mobile'} ${isActive('/produtos/linhas_emprestimo') ? 'active' : ''}`}
                                to="/produtos/emprestimo"
                            >
                                Linhas de empréstimo
                            </Link>
                            <Link
                                className={`${isDesktop ? 'text-desktop' : 'text-mobile'} ${isActive('/produtos/investimentos') ? 'active' : ''}`}
                                to="/produtos/investimentos"
                            >
                                Investimento
                            </Link>
                            <Link
                                className={`${isDesktop ? 'text-desktop' : 'text-mobile'} ${isActive('/produtos/adiantamento-a-fornecedor') ? 'active' : ''}`}
                                to="/produtos/adiantamento-a-fornecedor"
                            >
                                Adiantamento a fornecedor
                            </Link>
                        </Box>
                    )}
                </Box>

                {/* Dropdown para Serviços */}
                <Box
                    onMouseEnter={() => setShowServicosDropdown(true)}
                    onMouseLeave={() => setShowServicosDropdown(false)}
                    sx={{ position: 'relative', display: 'inline-block' }}
                >
                    <Link
                        className={`d-none menu-item-400 ${isDesktop ? 'text-desktop' : 'text-mobile'} ${showServicosDropdown ? 'menu-mouse-over' : ''}`}
                        to="/servicos"
                    >
                        Serviços
                    </Link>
                    {showServicosDropdown && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                zIndex: 10,
                                display: 'flex',
                                gap: '27px',
                                flexDirection: 'column',
                                margin: '-10px 0',
                                padding: '27px 0 0 0',
                                width: '400px',
                            }}
                            className="slide-in-top"
                        >
                            <Link
                                className={`${isDesktop ? 'text-desktop' : 'text-mobile'} ${isActive('/servicos/antecipacao-de-recebiveis') ? 'active' : ''}`}
                                to="/servicos/antecipacao-de-recebiveis"
                            >
                                Antecipação de recebíveis
                            </Link>
                            <Link
                                className={`${isDesktop ? 'text-desktop' : 'text-mobile'} ${isActive('/servicos/antecipacao-de-fgts') ? 'active' : ''}`}
                                to="/servicos/antecipacao-de-fgts"
                            >
                                Antecipação de FGTS
                            </Link>
                            <Link
                                className={`${isDesktop ? 'text-desktop' : 'text-mobile'} ${isActive('/servicos/conta-escrow') ? 'active' : ''}`}
                                to="/servicos/conta-escrow"
                            >
                                Conta Escrow
                            </Link>
                            <Link
                                className={`${isDesktop ? 'text-desktop' : 'text-mobile'} ${isActive('/servicos/emissao-de-boletos') ? 'active' : ''}`}
                                to="/servicos/emissao-de-boletos"
                            >
                                Emissão de boletos
                            </Link>
                            <Link
                                className={`${isDesktop ? 'text-desktop' : 'text-mobile'} ${isActive('/servicos/ccb') ? 'active' : ''}`}
                                to="/servicos/ccb"
                            >
                                CCB
                            </Link>
                        </Box>
                    )}
                </Box>

                <Link className={`d-none ${isDesktop ? 'text-desktop' : 'text-mobile'} menu-item-500 ${isActive('/monpay') ? 'menu-item-500-active' : ''}`} to="/monpay">
                    MonPay
                </Link>
                <Link className={`d-none ${isDesktop ? 'text-desktop' : 'text-mobile'} menu-item-500 ${isActive('/monseguros') ? 'menu-item-500-active' : ''}`} to="/monseguros">
                    MonSeguros
                </Link>
                <Link className={`d-none ${isDesktop ? 'text-desktop' : 'text-mobile'} menu-item-500 ${isActive('/fale-conosco') ? 'menu-item-500-active' : ''}`} to="/fale-conosco">
                    Fale Conosco
                </Link>
                <Box sx={{display: {xs: 'none', lg: 'flex'}, gap: '20px'}}>
                    <a href="https://monbank.net/#" target='blank'>
                    <Box className={`${isDesktop ? 'text-desktop' : 'text-mobile'} btn-yellow`}>
                        Acesse sua conta
                    </Box>
                    </a>
                    
                    <Box className={`${isDesktop ? 'text-desktop' : 'text-mobile'} btn-dark`}>
                        Abra sua conta
                    </Box>
                </Box>
                <Box sx={{display: {xs: 'block', lg: 'none'}}}>
                <IconButton sx={{background: '#FFC845', borderRadius: '4.4px'}} aria-label="menu" onClick={handleClick}>
                    <MenuIcon />
                </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>
                        <a href="https://monbank.net/#" target='blank'>
                        <Box className={`${isDesktop ? 'text-desktop' : 'text-mobile'} btn-acesso-conta`}>
                            Acesse sua conta
                        </Box>
                        </a>
                        
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                        <Box className={`${isDesktop ? 'text-desktop' : 'text-mobile'} btn-abre-conta`}>
                            Abra sua conta
                        </Box>
                        </MenuItem>
                        
                    </Menu>
                    </Box>
               
            </Box>
        </Box>
    );
};

export default NavBar;
