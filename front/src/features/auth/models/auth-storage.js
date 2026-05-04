const authStorage = {
    //SET PARAMS
    setAccess: (token) => localStorage.setItem('accessToken', token),
    setRefresh: (token) => localStorage.setItem('refreshToken', token),
    setUser: (user) => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user))
        }
    },

    //GET PARAMS
    getAccess: () => localStorage.getItem('accessToken'),
    getRefresh: () => localStorage.getItem('refreshToken'),
    getUser: () => {
        const user = localStorage.getItem('user')
        if (user) {
            return JSON.parse(user)
        }
    },

    //CLEAR STORAGE
    clear: () => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('user')
    }
}

export default authStorage