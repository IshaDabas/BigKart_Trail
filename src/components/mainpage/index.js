import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import Appbar from '../../components/appbar';
import Banner from '../../components/banner';
import Cart from '../../components/cart';
import AppDrawer from '../../components/drawer';
import Footer from '../../components/footer';
import HomePage from '../../components/pages/home';
import Home from '../../components/pages/home';
import Products from '../../components/products';
import Promotions from '../../components/promotions';
import SearchBox from '../../components/search';
import ContactUs from '../pages/contactUs';
import Prods from '../pages/product';

function MainPage() {
    useEffect(() => {
        document.title = "BigKartIndia - Home";
    }, []);
    return (
        <>
            <Appbar>
                <HomePage />
                <ContactUs />
                <Prods />
            </Appbar>
            <Banner />
            <Promotions />
            <Box display="flex" justifyContent={"center"} sx={{ p: 4 }}>
                <Typography variant='h4'>ITEMS</Typography>
            </Box>
            <Products />
            <Footer />
            <AppDrawer />
            <SearchBox />
            <Cart />
        </>
    );
}
export default MainPage;

