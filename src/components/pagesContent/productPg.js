import { Button, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import { AppbarHeader, ListItemNav1, MyList } from "../../styles/appbar";
import { AboutWe, AboutWe1 } from "../../styles/pages/about";
import { Link as RouterLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useUIContext } from "../../context/ui";
import Actions1 from "./aboutUsActions";

export default function ProductU (onLoginClick, onLogoutClick) {
    const { setShowSearchBox } = useUIContext();   
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md')); 

    return(
        <>
        <AboutWe>
        <AppbarHeader textAlign={"left"} variant="h3">
                BigKartIndia
            </AppbarHeader>
            <MyList type="row">
                <ListItemNav1 button={true} component={RouterLink} to={'/MainPage'}><ListItemText primary="Home" /></ListItemNav1>
                <ListItemNav1 button={true} component={RouterLink} to={'/home'}><ListItemText primary = "About Us" /> </ListItemNav1>
                <ListItemNav1 button={true} component={RouterLink} to={'/products'}><ListItemText primary="Products" /> </ListItemNav1>
                <ListItemNav1 button={true} component={RouterLink} to={'/contact'}> <ListItemText primary = "Contact Us" /> </ListItemNav1>
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon onClick={() => setShowSearchBox(true)}/>
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions1 onLogin={onLoginClick} onLogout={onLogoutClick} matches={matches}/>
        </AboutWe>
        <AboutWe1>Products</AboutWe1>
        <Button variant="outlined">Add Products</Button>
        </>
    )
};