import Navbar from "../common/NavBar";
import { useAuth } from "../../hooks/useAuth";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
    const { isUser, logout } = useAuth();
    return (
        <>
            <Navbar isUser={isUser} logout={logout} />
            <main className="container">
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout
