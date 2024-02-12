import { Button, Divider, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { styled } from "@mui/system";
import { useUIContext } from "../../context/ui";
import { DrawerCloseButton, ListItemNav, ListItemNav2 } from "../../styles/appbar";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import { lighten } from "polished";
import { Link as RouterLink } from "react-router-dom";

const MiddleDivider = styled((props) => (
    <Divider variant="middle" {...props} />
))``;

export default function AppDrawer() {

    const {drawerOpen, setDrawerOpen} = useUIContext();

    return (
        <>
          {drawerOpen && ( 
                <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
                <CloseIcon
                    sx = {{
                        fontSize: '2.5rem',
                        color: lighten(0.09, Colors.secondary)
                    }} 
                />
                </DrawerCloseButton> 
                )}
        <Drawer open={drawerOpen}>
            <List>
                <ListItemButton>
                <ListItemNav2 button={true} component={RouterLink} to={'/home'}><ListItemText primary = "About Us" /> </ListItemNav2>
                </ListItemButton>
                <MiddleDivider />
                <ListItemButton>
                <ListItemNav2 button={true }component={RouterLink} to={'/products'}><ListItemText primary = "Products" /> </ListItemNav2>
                </ListItemButton>
                <MiddleDivider />
                <ListItemButton>
                <ListItemNav2 button={true} component={RouterLink} to={'/contact'}> <ListItemText primary = "Contact Us" /> </ListItemNav2>
                </ListItemButton>
            </List>
        </Drawer>  
        </>  
    )
}