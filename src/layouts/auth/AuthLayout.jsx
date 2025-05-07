import Navbar from "../common/NavBar";
import ProtectedRoute from "../../middleware/ProtectedRoute";
import { useAuth } from "../../hooks/useAuth";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    const { isUser } = useAuth();
    return (
        <ProtectedRoute roles={["ROLE_MEMBER", "ROLE_ADMIN", "ROLE_MODERATOR"]}>
            <Navbar isUser={isUser} />

            <main className="container">
                <Outlet />
            </main>
        </ProtectedRoute>
    )
}

export default AuthLayout
