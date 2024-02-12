import { useEffect } from "react";
import Cart from "../cart";
import AppDrawer from "../drawer";
import AboutDrawer from "../drawer/aboutDrawer";
import Footer1 from "../footer/index1";
import Home from "../pagesContent/aboutUs";
import SearchBox from "../search";

export default function HomePage() {
    useEffect(() => {
        document.title = "BigKartIndia - About Us";
    }, []);

    return (
        <>
        <Home />
        <AppDrawer />
        <Footer1 />
        <Cart />
        <SearchBox />
        </>
    );
}
