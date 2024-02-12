import { useEffect } from "react";
import Cart from "../cart";
import AppDrawer from "../drawer";
import Footer from "../footer";
import ContactU from "../pagesContent/contactPg";
import SearchBox from "../search";


export default function ContactUs() {
    useEffect(() => {
        document.title = "BigKartIndia - Contact Us";
    }, []);

    return (
        <>
        <ContactU />
        <Footer />
        <Cart />
        <SearchBox />
        <AppDrawer />
        </>
    )

    }    