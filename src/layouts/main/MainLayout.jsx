import Navbar from "../common/NavBar";
import { useAuth } from "../../hooks/useAuth";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import HeroImage from "../../components/heroimage/HeroImage";

const MainLayout = () => {
    const { isUser, logout } = useAuth();
    return (
        <>
            <Navbar isUser={isUser} logout={logout} />
            <HeroImage />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout
