import AuthService from "../services/auth/auth.service"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const useAuth = () => {
    const [isUser, setIsUser] = useState(null)
    const [isMember, setIsMember] = useState(null)
    const [isAdmin, setIsAdmin] = useState(null)
    const [isModerator, setIsModerator] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const user = AuthService.getCurrentUser()
        if (user) {
            setIsUser(user)
            setIsMember(user.roles.includes("ROLE_MEMBER"))
            setIsAdmin(user.roles.includes("ROLE_ADMIN"))
            setIsModerator(user.roles.includes("ROLE_MODERATOR"))

        }
    }, [])

    const logout = () => {
        AuthService.logout()
        setIsMember(null)
        setIsAdmin(null)
        setIsModerator(null)

        navigate("/")
    }

    return { isUser, isMember, isAdmin, isModerator, logout }
}

// export default useAuth
