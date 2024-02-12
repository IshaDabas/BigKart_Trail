import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Colors } from "../theme";
import "@fontsource/montez"
import { borderRadius } from "polished";
import "@fontsource/artifika"

export const AppbarContainer = styled(Box)(() => ({
    display:'center',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px'
}));

export const AppbarHeader = styled(Typography)(()=>({
    padding: '4px',
    flexGrow: 1,
    fontSize: '4em',
    fontFamily: '"Montez", "cursive"',
    color: Colors.moppy,
}));


export const MyList = styled(List)(({ type })=>({
    display: type === 'row' ? 'flex' : 'block',
    flexGrow: 3,
    justfyContent: 'center',
    alignItems: 'center'
}));


export const ActionIconsContainerDesktop = styled(Box)(() =>({
    flexGrow:0
}));

export const ActionIconsContainerMobile = styled(Box)(()=>({
    display: 'flex',
    background: Colors.shaft,
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    zIndex: 99,
    borderTop: `1px solid ${Colors.border}`
}));


export const DrawerCloseButton = styled(IconButton)(() => ({
    position: 'absolute',
    top: 10,
    left: '250px',
    zIndex: 1999
}));

export const ListItemNav = styled(ListItem) (() => ({
    position: 'relative',
    width: '150px',
    marginLeft: '100px',
    borderRadius: '30%',
    textAlign: 'center',
    '&:hover': {
        background:  Colors.secondary,
      }
}));

export const ListItemNav1 = styled(ListItem) (() => ({
    position: 'relative',
    width: '150px',
    marginLeft: '100px',
    borderRadius: '30%',
    textAlign: 'center',
    '&:hover': {
        background:  Colors.primary,
      }
}));

export const ListItemNav2 = styled(ListItem) (() => ({
    position: 'left',
    width: '150px',
    marginLeft: '0px',
    borderRadius: '100%',
    textAlign: 'left',
    '&:hover': {
        background:  Colors.light_gray,
      }
}));
