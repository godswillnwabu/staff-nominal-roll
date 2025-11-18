import { Outlet } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

function IndexPageLayout() {

    return (
        <>
            <Navbar />
            <Footer />
        </>
    )
}

export default IndexPageLayout;