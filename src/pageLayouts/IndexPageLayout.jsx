import { Outlet } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

function IndexPageLayout() {

    return (
        <>
            <Navbar />
            <div className="pt-[70px] md:pt-[100px] lg:pt-[130px] px-[50px] pb-[80px] md:pb-[55px] w-full min-h-screen bg-bg-blue/50">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default IndexPageLayout;