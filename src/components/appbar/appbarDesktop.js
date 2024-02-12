import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList, ListItemNav } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";
import { Link as RouterLink } from "react-router-dom";


export default function AppbarDesktop ({ matches, onLoginClick, onLogoutClick }) {

    const { setShowSearchBox } = useUIContext();

    return (  
        <AppbarContainer>
            <AppbarHeader>BigKartIndia</AppbarHeader>
            <MyList type="row">
                <ListItemNav button={true} component={RouterLink} to={'/MainPage'}><ListItemText primary="Home" /></ListItemNav>
                <ListItemNav button={true} component={RouterLink} to={'/home'}><ListItemText primary = "About Us" /> </ListItemNav>
                <ListItemNav button={true }component={RouterLink} to={'/products'}><ListItemText primary = "Products" /> </ListItemNav>
                <ListItemNav button={true} component={RouterLink} to={'/contact'}> <ListItemText primary = "Contact Us" /> </ListItemNav>
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon onClick={() => setShowSearchBox(true)}/>
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions onLogin={onLoginClick} onLogout={onLogoutClick} matches={matches}/>
        </AppbarContainer>
    );
}