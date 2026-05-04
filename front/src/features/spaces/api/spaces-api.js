import AxiosInstance from "../../../shared/lib/axios-instance"

class SpacesApi{
    static async getSpaces(){
        const {data} = await AxiosInstance.get('/spaces?page=1&limit=20`')
        return data
    }
    static async getPopularSpaces(){
        const {data} = await AxiosInstance.get('/spaces/popular?limit=3')
        return data
    }
    static async getIdSpace(id){
        const {data} = await AxiosInstance.get(`/spaces/${id}`)
        return data
    }
    static async removeSpace(id){
        const {data} = await AxiosInstance.delete(`/spaces/${id}`)
        return data
    } 
    static async createSpace(form){
        const {data} = await AxiosInstance.post(`/spaces`, form)
        return data
    }
    static async updateSpace(form , id){
        const {data} = await AxiosInstance.put(`/spaces/:id`, form)
        return data
    }
}
export default SpacesApi