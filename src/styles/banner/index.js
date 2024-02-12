import { Box, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";
import { Typography } from "@mui/material";

export const BannerContainer = styled(Box)(({theme})=>({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
    padding: 'px 0px',
    background: Colors.light_gray,
    [theme.breakpoints.down('sm')]:{
        flexDirection:'column',
        alignItems: 'center'
    }
}));

export const BannerImage = styled('img')(({src, theme})=>({
    src:`url(${src})`,
    width: '400px',
    marginTop: '1%',
    marginBottom: '1%',
    [theme.breakpoints.down('md')]: {
        height: '400px',
        width: '300px'
    },

    [theme.breakpoints.down('sm')]:{
        width: '400px',
        height: '300px'
    }
}));

export const BannerContent = styled(Box)(()=> ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: 420,
    padding:'30px'
}));

export const BannerTitle = styled(Typography)(({theme})=>({
    lineHeight: 1.5,
    fontsize: '72px',
    marginBottom:'20px',
    [theme.breakpoints.down('sm')]:{
        fontsize:'40px'
    }
}));

export const BannerDescription = styled(Typography)(({ theme })=>({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]:{
        lineHeight:1.15,
        letterSpacing: 1.15,
        marginBottom:"1.5em",
    }
}));

export const BannerShopButton = styled(Button, {
    shouldForwardProp: (prop) => prop !== 'color',
    name: 'MyShopButton',
    slot: 'Root', 
    overridesResolver: (props, styles) => [
        styles.root,
        props.color === 'primary' && styles.primary,
        props.color === 'secondary' && styles.secondary
    ],
})(({theme}) => ({

    padding: '20px 0px',
    fontWeight: 'bold',
    fontSize: '16px',
    [theme.breakpoints.down('sm')]: {
        padding: '10px 0px',
        fontSize: '15px'
    }
}));