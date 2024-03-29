import FavoriteIcon from "@mui/icons-material/Favorite";
import { Stack } from "@mui/material";
import { Product, ProductActionButton, ProductActionWrapper, ProductAddToCart, ProductFavButton, ProductImage} from "../../styles/Products";
import ProductMeta from "./ProductMeta";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import ShareIcon from "@mui/icons-material/Share";
import useDialogModal from "../../hooks/useDialogModal";
import ProductDetail from "../productdetail";
import useCart from "../../hooks/useCart";


export default function SingleProduct({product, matches}) {

    const [ProductDetailDialog, showProductDetailDialog, closeProductDetailDialog]
    = useDialogModal(ProductDetail);

    const {addToCart, addToCartText} = useCart(product);

    return(
        <>
        <Product>
            <ProductImage src={product.image} />
            <ProductMeta product = {product} matches = {matches} /> 
            <ProductActionWrapper>
                <Stack direction="row">
                    <ProductFavButton isFav={0}>
                        <FavoriteIcon />
                    </ProductFavButton>
                    <ProductActionButton>
                        <ShareIcon color="primary" />
                    </ProductActionButton>
                    <ProductActionButton onClick={() => showProductDetailDialog()}>
                        <FitScreenIcon color="primary" />
                    </ProductActionButton>
                </Stack>
            </ProductActionWrapper>
        </Product>
        <ProductAddToCart onClick={addToCart} variant="contained">{addToCartText}</ProductAddToCart>
        <ProductDetailDialog product={product} />
        </>
    )
};