import { Button, Dialog, DialogContent, DialogTitle, IconButton, Slide, Typography, useMediaQuery } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../../styles/theme";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@emotion/react";
import { Product, ProductAddToCart, ProductImage } from "../../styles/Products";
import IncDec from "../ui";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon  from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useCart from "../../hooks/useCart";



function SlideTransition(props) {
    return <Slide direction="down" {...props} />
}

const ProductDetailWrapper = styled(Box)(({theme}) => ({
    display: 'flex',
    height: '300px',
    width: '300px',
    padding: theme.spacing(4),
    [theme.breakpoints.up('md')]:{
        width: '1200px'
    }
}));



const ProductDetailInfoWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 500,
    lineHeight: 1.5,
}));


export default function ProductDetail({open, onClose, product}) {

    const {addToCart, addToCartText} = useCart(product);

    const theme= useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Dialog
            TransitionComponent={SlideTransition}
            variant="permanent"
            open={open}
            fullScreen
        >
            <DialogTitle sx={{
                background: Colors.secondary
            }}>
                <Box
                    display={'flex'}
                    alignItems="center"
                    justifyContent={"space-between"}>
                        Product Detail
                        <IconButton onClick={onClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
            </DialogTitle>
            <DialogContent>
                <ProductDetailWrapper flexDirection={matches ? 'column' : 'row'}>
                    <Product sx={{mr: 4 }}>
                        <ProductImage src={product.image} />
                    </Product>
                    <ProductDetailInfoWrapper>
                        <Typography variant="subtitle1"></Typography>
                        <Typography variant="subtitle1">Availability: 5 in stock</Typography>
                        <Typography sx={{ lineHeight: 2 }} variant="h4">
                            {product.name}
                        </Typography>
                        <Typography variant='body'>
                            {product.description}
                            {product.description1}
                            {product.description2}
                            {product.description3}
                        </Typography>
                        <Box
                            sx={{mt: 4}}
                            display='flex'
                        alignItems='center'
                        justifyContent='space-between'    
                        >
                        <IncDec />
                        <ProductAddToCart onClick={addToCart} variant="contained">{addToCartText}</ProductAddToCart>
                        </Box>
                        <Box
                            display='flex'
                        alignItems='center'
                        sx={{ mt: 4, color: Colors.light}}>
                            <FavoriteIcon sx={{ mr: 2}} />
                            Add to Wishlist
                            </Box>    
                            <Box sx={{mt:4, color: Colors.light}}>
                                <FacebookIcon />
                                <TwitterIcon sx={{ pl : theme.spacing(4)}} />
                                <InstagramIcon sx={{ pl : theme.spacing(4)}} />
                            </Box>

                    </ProductDetailInfoWrapper>
                </ProductDetailWrapper>
            </DialogContent>
        </Dialog>
    )
}