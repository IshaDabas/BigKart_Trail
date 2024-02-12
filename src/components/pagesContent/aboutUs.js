import { Box, ListItemButton, ListItemIcon, ListItemText, useMediaQuery } from "@mui/material";
import { AppbarHeader, ListItemNav1, MyList} from "../../styles/appbar";
import { AboutImg, AboutWe, AboutWe1 } from "../../styles/pages/about";
import { Link as RouterLink } from "react-router-dom";
import TitlebarImageList from "../imagelist/imageList";
import { useTheme } from "@mui/material/styles";
import RecipeReviewCard from "../imagelist/imageList1";
import { useState } from "react";
import { useUser } from "../../context/ui/User";
import SearchIcon from "@mui/icons-material/Search";
import { useUIContext } from "../../context/ui";
import Actions1 from "./aboutUsActions";


export default function Home(onLogin, onLogout, onLoginClick, onLogoutClick) {
    const { user } = useUser();
    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const { setShowSearchBox } = useUIContext();    

    return (
        <>
            <AboutWe>
                <AppbarHeader textAlign={"left"} variant="h3">
                    BigKartIndia
                </AppbarHeader>
                <MyList type="row">
                    <ListItemNav1 button={true} component={RouterLink} to={'/MainPage'}><ListItemText primary="Home" /></ListItemNav1>
                    <ListItemNav1 button={true} component={RouterLink} to={'/home'}><ListItemText primary="About Us" /> </ListItemNav1>
                    <ListItemNav1 button={true} component={RouterLink} to={'/products'}><ListItemText primary="Products" /> </ListItemNav1>
                    <ListItemNav1 button={true} component={RouterLink} to={'/contact'}> <ListItemText primary="Contact Us" /> </ListItemNav1>
                    <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon onClick={() => setShowSearchBox(true)}/>
                    </ListItemIcon>
                </ListItemButton>
                </MyList>
                <Actions1 onLogin={onLoginClick} onLogout={onLogoutClick} matches={matches}/>
            </AboutWe>
            <AboutWe1>About Us!</AboutWe1>
            <Box sx={{ display: 'flex', 
            alignItems: 'center',
            marginLeft: '5%',
            justifyContent: 'space-between',
            marginRight: '5%',
            marginTop: '3%',
            marginBottom: '3%' }}>
                <AboutImg src="/images/animatedpics/AboutUs.jpg" />
                <TitlebarImageList />
            </Box>
            <Box sx={{ display: 'flex', 
            alignItems: 'center',
            marginRight: '5%',
            justifyContent: 'space-between',
            marginRight: '5%',
            marginBottom: '5%' }}>
                <RecipeReviewCard />
                <AboutImg src="/images/animatedpics/FutureCart.jpg" />
            </Box>
        </>
    )
};