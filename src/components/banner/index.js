import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner";



export default function Banner(){
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return(
        <BannerContainer>
                <BannerImage src="/images/banner/Bigkartindia.png"/>
            <BannerContent>
                <BannerTitle variant="h2">
                    Groceries and Food items
                </BannerTitle>
                <BannerDescription variant="subtitle">
                    Shop for the upcoming offers!
                </BannerDescription>
                <BannerShopButton color='primary'>Shop Now</BannerShopButton>
            </BannerContent>
        </BannerContainer>
        
    )
}