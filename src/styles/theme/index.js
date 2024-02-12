import { createTheme } from "@mui/material/styles";
import { lighten } from "polished";

export const Colors = {
    primary: "#4ea5b4",
    secondary: "#74cddc",
    moppy: "#1383cb",
    sucess: "#4CAF50",
    info: "#00a2ff",
    danger: "#FF5722",
    warning: "#FFC107",
    dark: "#0e1b20",
    light: "#aaa",
    muted: "#abafb3",
    border: "#DDDFE1",
    inverse: "#2F3D4A",
    shaft: "#527991",
    dim_grey: "#696969",
    dove_gray: "#d5d5d5",
    body_bg: "#f3f6f9",
    light_gray: "#dbebf5",
    white: "#fff",
    black: "#000",
    bcon: "#c9e1ef",
};


const theme = createTheme({
    palette: {
        primary:{
            main: Colors.primary
        },
        secondary:{
            main: Colors.secondary
        }
    },

    components:{
        MuiButton:{
            defaultProps:{
                disableRipple: true,
                disableElevatiion: true
            },
        },
        MuiDrawer: {
            styleOverrides : {
                paper: {
                    width: 250,
                    background: Colors.primary,
                    color: Colors.secondary,
                    borderRadius: '0px 100px 0px 100px',
                    borderRight: `10px solid ${Colors.secondary}`
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: lighten(0.2, Colors.primary)
                }
            }
        },
        MyShopButton: {
            styleOverrides: {
                root: {
                    color: Colors.white,
                },
                primary: {
                    background: Colors.primary,
                    "&:hover": {
                        background: lighten(0.10, Colors.primary),
                    }
                },
                secondary: {
                    background: Colors.secondary,
                    "&:hover": {
                        background: lighten(0.3, Colors.secondary),
                    }
                }
            }
        }
    }
});

export default theme; 