import Navbar from "../common/NavBar";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
    return (
        <>
            <Navbar />

            <main className="container">
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout
