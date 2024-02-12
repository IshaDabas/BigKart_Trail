import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";
import { Typography } from "@mui/material";


export const NavImgCon = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'center',
    width: '300%',
    height: '100%',
    padding: '0px 0px',
    background: Colors.light_gray,
    [theme.breakpoints.down('sm')]:{
        flexDirection:'column',
        alignItems: 'center'
    }
}));

export const NavImage = styled('img')(({src, theme})=>({
    src:`url(${src})`,
    width: '100px',
    [theme.breakpoints.down('md')]: {
        width: '100px'
    },

    [theme.breakpoints.down('sm')]:{
        width: '100px',
        height: '900px'
    }
}));