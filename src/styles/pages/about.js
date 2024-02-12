import { Card, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import theme, { Colors } from "../theme";
import "@fontsource/aboreto";
import "@fontsource/aladin"


export const AboutWe = styled (Box) (() => ({
    display: 'center',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px',
    background: Colors.light_gray,
    height: '100px',
    [theme.breakpoints.down("md")]:{
        lineHeight:1.15,
        letterSpacing: 1.15,
        marginBottom:"1.5em",
    }
}));

export const AboutWe1 = styled(Typography, Box)(()=>({
    padding: '4px',
    flexGrow: 1,
    fontSize: '4em', 
    color: Colors.primary,
    textAlign: 'center',
    fontFamily: '"Aladin", "cursive"',
    [theme.breakpoints.down("md")]:{
        lineHeight:1.15,
        letterSpacing: 1.15,
        marginBottom:"1.5em",
    }
}));

export const CardWe = styled(Card)(() => ({
    height: '50px',
    background: Colors.moppy,
    borderRadius: '5%'
}));

export const AboutImg = styled('img')(({src, theme}) => ({
    src:`url(${src})`,
    width: '500px',
    height: '400px',
}));

export const AboutWe2 = styled(Typography, Box)(() => ({
    padding: '4px',
    flexGrow: 1,
    fontSize: '3em',
    color: Colors.primary,
    textAlign: 'left',
    fontFamily: '"Aladin", "cursive"',
    marginLeft: '20%'
}))