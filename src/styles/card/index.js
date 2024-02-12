import { Card, List } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";
import CardHeader from '@mui/material/CardHeader';



export const MyCard = styled(List)(({ type })=>({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    justfyContent: 'center',
    alignItems: 'center',
    
}));

export const CardHeader1 = styled(CardHeader)(({ type }) => ({
    display: 'flex',
    color: Colors.moppy,
    justifyContent: 'left'
}));

export const Cardd = styled(Card)(({ type }) => ({
    borderColor: Colors.moppy,
    border: '15%'
}));