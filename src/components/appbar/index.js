import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppbarDesktop from "./appbarDesktop";
import AppbarMobile from "./appbarMobile";
import Login from "../Login";
import useDialogModal from "../../hooks/useDialogModal";
import { firebasedb } from "../../services/firebase/db";
import { async } from "@firebase/util";

export default function Appbar(){
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const [LoginDialog, showLoginDialog] = useDialogModal(Login);

    const handleLogin = () => {
        showLoginDialog();

    }

    const handleLogout = async () => {
        try{
            await firebasedb.logout();
        } catch(error) {
            console.log(error);
        }
        
        
    }

    return(
        <>
            {matches ? (
                <AppbarMobile
                    onLoginClick={handleLogin}
                    onLogoutClick={handleLogout}
                matches={matches} />)
                :(<AppbarDesktop 
                    onLoginClick={handleLogin}
                    onLogoutClick={handleLogout}
                matches={matches} /> )}
                <LoginDialog />
        </>
    );
}