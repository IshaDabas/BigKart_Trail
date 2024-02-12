import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../theme";


export const PromotionsContainer = styled(Box)(({theme})=>({
    [theme.breakpoints.down('md')]:{
        padding:'20px 0px 20px 0px'
    },
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'10px 0px 10px 0px',
    overflow:'hidden',
    background: Colors.secondary
}));

export const MessageText = styled(Typography)(({theme})=>({

    fontFamily: '"Montez", "cursive"',
    [theme.breakpoints.down('md')]:{
        fontSize: '2rem',
    },
    color: Colors.white,
    fontSize: '3rem',
}));