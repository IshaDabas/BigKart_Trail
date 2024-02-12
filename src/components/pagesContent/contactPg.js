import { Box, Button, ListItemButton, ListItemIcon, ListItemText, TextField, useMediaQuery, useTheme } from "@mui/material";
import { AppbarHeader, ListItemNav1, MyList } from "../../styles/appbar";
import { AboutWe, AboutWe1, AboutWe2 } from "../../styles/pages/about";
import { Link as RouterLink } from "react-router-dom";
import { Back,  ContactImg, DownArrow } from "../../styles/pages/contact";
import ContactWe from "./contactWe";
import SearchIcon from "@mui/icons-material/Search";
import { useUIContext } from "../../context/ui";
import Actions1 from "./aboutUsActions";

export default function ContactU(onLoginClick, onLogoutClick) {
    const { setShowSearchBox } = useUIContext();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

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
                    <ListItemNav1 button={true} component={RouterLink} to={'/contact'}> <ListItemText primary = "Contact Us" /> </ListItemNav1>
                    <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon onClick={() => setShowSearchBox(true)}/>
                    </ListItemIcon>
                </ListItemButton>
                </MyList>
                <Actions1 onLogin={onLoginClick} onLogout={onLogoutClick} matches={matches}/>
            </AboutWe>
            <AboutWe1>Contact Us!</AboutWe1>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', ml: '5%', mr: '5%', mb:'5%', mt: '5%'}}>
                <Back>
                    <Box display={"flex"} flexDirection="column"
                        sx={{ width: '90%' }}>
                        <form>
                            <TextField
                                label="First Name"
                                variant="standard"
                                sx={{ mb: 2 }}
                                fullWidth
                            />
                            <TextField
                                label="Last Name"
                                variant="standard"
                                sx={{ mb: 2 }}
                                fullWidth
                            />
                            <TextField
                                label="Phone Number"
                                variant="standard"
                                sx={{ mb: 2 }}
                                fullWidth
                            />
                            <TextField
                                label="Message"
                                variant="standard"
                                sx={{ mb: 2 }}
                                fullWidth
                            />
                        </form>
                        <Box sx={{ mt: 2, textAlign: "center" }}>
                            <Button variant="contained">Submit</Button>
                        </Box>
                    </Box>
                </Back>
                <ContactImg src="/images/animatedpics/ContactUs.jpg" />
            </Box>
            <Box sx={{ display: 'flex', mr: '10%', ml: '10%'}}>
            <AboutWe2>Want to Contact us directly? Click on the drop down button</AboutWe2>
            <DownArrow src="/images/animatedpics/arrows.png" />
            </Box>
            <ContactWe />
        </>
    )
};