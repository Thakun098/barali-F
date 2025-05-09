const useAuthHeader = () => {
    const isUser = JSON.parse(localStorage.getItem("user"))

    if (isUser && isUser.accessToken) {
        return {
            Authorization: `Bearer ${isUser.accessToken}`
        };
    }
    else {
        return {};
    }
}

export default useAuthHeader;