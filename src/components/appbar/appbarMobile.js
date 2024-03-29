import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";

export default function AppbarMobile ({ matches, onLoginClick, onLogoutClick }) {

    const { setDrawerOpen, setShowSearchBox } = useUIContext()

    return (
        <AppbarContainer>
            <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            <AppbarHeader textAlign={"center"} variant="h3">
                BigKartIndia
            </AppbarHeader>
            <IconButton>
                <SearchIcon onClick={() => setShowSearchBox(true)}/>
            </IconButton>
            <Actions onLogin={onLoginClick} onLogout={onLogoutClick} matches = {matches} />
        </AppbarContainer>
    );
}