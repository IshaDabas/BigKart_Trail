import { Box, Button, Grid, List, ListItemText, Stack, Typography } from "@mui/material";
import { FooterTitle, SubscribeTf } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon  from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";


export default function Footer() {
    return (
        <Box
            sx ={{
                background: Colors.shaft,
                color: Colors.white,
                p: { xs: 4, md: 5},
                pt: 12,
                pb: 12,
                fontSize: { xs: '12px', md: '14px'}
            }}
        >
            <Grid container spacing={2} justifyContent="center">
                <Grid item md={6} olg={4}>
                    <FooterTitle variant="body1">About Us</FooterTitle>
                    <Typography variant="caption2">
                        Online B2C food and grocery store. Every type of indian food is available on our site. We wil be having over 150+ trusted partners with us. This delivery website
                        Online B2C food and grocery store. Every type of indian food is available on our site. We wil be having over 150+ trusted partners with us. This delivery website
                        Online B2C food and grocery store. Every type of indian food is available on our site. We wil be having over 150+ trusted partners with us. This delivery website
                        Online B2C food and grocery store. Every type of indian food is available on our site. We wil be having over 150+ trusted partners with us. This delivery website
                        Online B2C food and grocery store. Every type of indian food is available on our site. We wil be having over 150+ trusted partners with us. This delivery website
                    </Typography>
                    <Box
                    sx={{
                        mt: 4,
                        color: Colors.dove_gray,                        
                    }}
                    >
                        <FacebookIcon sx={{ mr:1 }} />
                        <TwitterIcon sx= {{ mr: 1 }} />
                        <InstagramIcon />
                    </Box>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">Information</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                About Us
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Order Tracking
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Privacy &amp; Policy
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Terms &amp; Conditions
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1"> My Account</FooterTitle>
                    <List>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Login
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                My Cart 
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                My Account
                            </Typography>
                        </ListItemText>
                        <ListItemText>
                            <Typography lineHeight={2} variant="caption2">
                                Wishlist
                            </Typography>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item md={6} lg={2}>
                    <FooterTitle variant="body1">newsletter</FooterTitle>
                    <Stack>
                         <SubscribeTf
                            color="primary"
                            label="Email Address"
                            variant="standard" /> 
                            <Button 
                                startIcon={<SendIcon sx={{ color: Colors.white }} />}
                                sx ={{ mt: 4, mb: 4}}
                                variant="contained">
                                    Enter
                                </Button>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}