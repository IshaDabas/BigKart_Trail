import { Box, Container, Typography } from '@mui/material';
import { ThemeProvider } from "@mui/system";
import { useEffect } from 'react';
import Home from './components/pages/home';
import { UIProvider } from './context/ui';
import UserProvider from './context/ui/User';
import theme from "./styles/theme";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import MainPage from './components/mainpage';
import ContactUs from './components/pages/contactUs';
import Prods from './components/pages/product';

function App() {
  useEffect(() => {
    document.title = "BigKartIndia - Home";
  }, []);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="x1"
          sx={{
            background: '#fff'
          }}>
          <UIProvider>
            <UserProvider>
              <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path="home" element={<Home />} />
                <Route path="contact" element={<ContactUs />} />
                <Route path="products" element={<Prods />} />
                <Route path="MainPage" element={<MainPage />} />
              </Routes>
            </UserProvider>
          </UIProvider>
        </Container>
      </ThemeProvider>
    </Router>

  );
}
export default App;

