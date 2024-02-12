import { Box, Container, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../theme";


export const Contct = styled(Box) (() => ({
    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px',
    background: Colors.light_gray,
    height: '100px'
}));

export const Back = styled(Paper) (() => ({
    background: Colors.bcon,
    justifyContent: 'center',
    width: '50%',
    paddingLeft: '3%',
    paddingBottom: '2%',
    paddingTop: '2%'
}));


export const ContactImg = styled('img')(({src, theme}) => ({
    src:`url(${src})`,
    width: '600px'
}));

export const ContactUsImg = styled('img')(({src, theme}) => ({
    src:`url(${src})`,
    width:'1794px',
    height: '500px'
}));

export const DownArrow = styled('img')(({src, theme}) => ({
    src:`url(${src})`,
    width: '20px',
    height: '20px',
    marginTop: '2%',
    marginRight: '10%'
}))



