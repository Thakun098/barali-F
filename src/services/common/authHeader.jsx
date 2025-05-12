const useAuthHeader = () => {
    const isUser = JSON.parse(localStorage.getItem("user"))

    if (isUser && isUser.accessToken) {
        return { 'x-access-token': isUser.accessToken };
    }
    else {
        return {};
    }
}

export default useAuthHeader;