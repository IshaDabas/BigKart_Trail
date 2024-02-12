import { useUIContext } from "../../context/ui";
import { AboutWe } from "../../styles/pages/about";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Actions1 from "./aboutUsActions";


export default function HomeMob ({ matches, onLoginClick, onLogoutClick }) {
    const { setDrawerOpen, setShowSearchBox } = useUIContext()

    return(
        <AboutWe>
            <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            <AppbarHeader textAlign={"center"} variant="h3">
                BigKartIndia
            </AppbarHeader>
            <IconButton>
                <SearchIcon onClick={() => setShowSearchBox(true)}/>
            </IconButton>
            <Actions1 onLogin={onLoginClick} onLogout={onLogoutClick} matches = {matches} />
        </AboutWe>
    );
}