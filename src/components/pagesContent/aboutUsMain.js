import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Login from "../Login";
import useDialogModal from "../../hooks/useDialogModal";
import { firebasedb } from "../../services/firebase/db";
import { async } from "@firebase/util";
import Home from "./aboutUs";
import HomeMob from "./aboutUsMob";

export default function Appbar1(){
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
                <HomeMob
                    onLoginClick={handleLogin}
                    onLogoutClick={handleLogout}
                matches={matches} />)
                :(<Home 
                    onLoginClick={handleLogin}
                    onLogoutClick={handleLogout}
                matches={matches} /> )}
                <LoginDialog />
        </>
    );
}