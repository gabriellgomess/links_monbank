import { useState } from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import TemplatePages from './pages/TemplatePages/TemplatePages';
import pagesData from './pages/TemplatePages/pages.json';
import Regulatorio from './pages/Regulatorio/Regulatorio';
import PoliticaDePrivacidade from './pages/PoliticaDePrivacidade/PoliticaDePrivacidade';
import FaleConosco from './pages/FaleConosco/FaleConosco';
import Links from './components/Links/Links';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
const App = () => {
  const [largura, setLargura] = useState(window.innerWidth);
  const [altura, setAltura] = useState(window.innerHeight);
  // Função para mostrar a resolução da tela no console.log
  window.addEventListener('resize', () => {
    setLargura(window.innerWidth);
    setAltura(window.innerHeight);
  });

  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFC845;",
      },
      secondary: {
        main: "#CFCDC9",
      },
    }
    
  });
  return (
    <ThemeProvider theme={theme}>
      <NavBar />      
        <Routes>
          <Route path="/" element={<Links />} />
           {/* Rotas dinâmicas baseadas no JSON */}
          {pagesData.map((page, index) => (
            <Route
              key={index}
              path={page.path}
              element={<TemplatePages data={page} />}
            />
          ))}
          <Route path="/regulatorio" element={<Regulatorio />} />
          <Route path="/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
        </Routes>
      <Footer />     
      
      {/* <div style={{position: 'fixed', bottom: '10px', right: '10px', fontFamily: 'Arial'}}>
        W: {largura} x H: {altura}
      </div> */}
    </ThemeProvider>
  );
}

export default App;
