import { useEffect } from "react";
import Cart from "../cart";
import AppDrawer from "../drawer";
import Footer from "../footer";
import ProductU from "../pagesContent/productPg";
import SearchBox from "../search";


export default function Prods() {
    useEffect(() => {
        document.title = "BigKartIndia - Products";
    }, []);

    return (
        <>
         <ProductU />
         <Cart />
         <SearchBox />
         <AppDrawer />
         <Footer />
        </>
    )
};
