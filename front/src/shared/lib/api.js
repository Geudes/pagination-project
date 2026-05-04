import AxiosInstance from "./axios-instance"

class Api {
    static register (userData) {
       return AxiosInstance.post('/auth/register', userData).then(response => response.data)
    }

    static login (userData) {
       return AxiosInstance.post('/auth/login', userData).then(response => response.data)
    }

    static logout () {
       return AxiosInstance.post('/auth/logout').then(response => response.data)
    }

    static userMe () {
       return AxiosInstance.post('/user/me').then(response => response.data)
    }

    static getPopularSpaces (limit) {
        return AxiosInstance.get('/spaces/popular', {
            params: {
                limit,
            }
        }).then(response => response.data)
    }

    static getSpaces(limit, page) {
        return AxiosInstance.get('/spaces', {
            params: {
                limit,
                page,
            }
        })
    }
}

export default Api