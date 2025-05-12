import Navbar from "../common/NavBar";
import ProtectedRoute from "../../middleware/ProtectedRoute";
import { useAuth } from "../../hooks/useAuth";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";

const AuthLayout = () => {
    const { isUser, logout } = useAuth();
    return (
        <ProtectedRoute roles={["ROLE_MEMBER", "ROLE_ADMIN", "ROLE_MODERATOR"]}>
            <Navbar isUser={isUser} logout={logout} />

            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </ProtectedRoute>
    )
}

export default AuthLayout
