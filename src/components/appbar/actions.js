import { Badge, Box, Divider, ListItemButton, ListItemIcon, Menu, MenuItem, Typography } from "@mui/material";
import { MyList, ActionIconsContainerDesktop, ActionIconsContainerMobile} from "../../styles/appbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Colors } from "../../styles/theme";
import { useUIContext } from "../../context/ui";
import { useState } from "react";
import { useUser } from "../../context/ui/User";

export default function Actions({matches, onLogin, onLogout}) {

    const [anchorEl, setAnchorEl] = useState(null);
    const { cart, setShowCart} = useUIContext();
    const { user } = useUser();


    const Component = matches 
        ? ActionIconsContainerMobile : ActionIconsContainerDesktop;


    return(
        <Component>
        <MyList type="row">
            <ListItemButton
                sx={{
                    justifyContent:'center'
                }}
            >
                <ListItemIcon
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: matches && Colors.secondary            
                    }}
                >
                    <Badge badgeContent={cart && cart.length} color="secondary">
                    <ShoppingCartIcon onClick={() => setShowCart(true)} />
                    </Badge>
                    
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>
            <ListItemButton
            sx={{
                justifyContent:'center',
                color: matches && Colors.secondary
            }}
        >
                <ListItemIcon
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: matches && Colors.secondary
                }}
                >
                    <FavoriteIcon />
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem/>
            <ListItemButton
            sx={{
                justifyContent:'center',
                color: matches && Colors.secondary
            }}
        >
                <ListItemIcon
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: matches && Colors.secondary
                }}

                onClick={(event) => setAnchorEl(event.currentTarget)}
                >
                    <Box display="flex" flexDirection="column">
                        <PersonIcon />
                        {user && <Typography variant="caption">{user.displayName}</Typography>}
                    </Box>
                </ListItemIcon>
            </ListItemButton>
            <Divider orientation="vertical" flexItem />
        </MyList>
        <Menu
            anchorEl={anchorEl}
            open={anchorEl !== null}
            onClose={() => setAnchorEl(null)}>
            { !user && <MenuItem onClick={onLogin}>Login</MenuItem>}
            { user && <MenuItem onClick={onLogout}>Logout</MenuItem>}
            </Menu>
        </Component>
    );
}