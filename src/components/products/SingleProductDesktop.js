import FavoriteIcon from "@mui/icons-material/Favorite";
import { Stack } from "@mui/material";
import { Product, ProductActionButton, ProductActionWrapper, ProductAddToCart, ProductFavButton, ProductImage} from "../../styles/Products";
import ProductMeta from "./ProductMeta";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import ShareIcon from "@mui/icons-material/Share";
import { useState } from "react";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productdetail";
import useCart from "../../hooks/useCart";



export default function SingleProductDesktop({product, matches}) {

    const [showOptions, setShowOptions] = useState(false);
    const [ProductDetailDialog, showProductDetailDialog, closeProductDetailDialog]
    = useDialogModal(ProductDetail);

    const { addToCart, addToCartText } = useCart(product);

    const handleMouseEnter = () => {
        setShowOptions(true);
    };

    const handleMouseLeave = () => {
        setShowOptions(false);
    };

    return(
        <>
        <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <ProductImage src={product.image} />
            <ProductFavButton isFav={0}>
                <FavoriteIcon />
            </ProductFavButton>
            {showOptions && (
            <ProductAddToCart 
                onClick={addToCart} 
                show = {showOptions} variant="contained">
                    {addToCartText}
                </ProductAddToCart>
                )}
            <ProductActionWrapper show={showOptions}>
                <Stack direction="column">
                    <ProductActionButton>
                        <ShareIcon color="primary" />
                    </ProductActionButton>
                    <ProductActionButton onClick={() => showProductDetailDialog()}>
                        <FitScreenIcon color="primary" />
                    </ProductActionButton>
                </Stack>
            </ProductActionWrapper>
        </Product>
        <ProductMeta product = {product} matches = {matches} /> 
        <ProductDetailDialog product={product} />
        </>
    )
};