import { createContext, useState } from "react"
import SpacesApi from "../api/spaces-api"

export const SpacesContext = createContext(null)
function SpacesProvider({children}) {
    const [spaces , setSpaces] = useState([])
    const [loader , setLoader] = useState(true)
    const [spacesPopular , setSpacesPopular] = useState([])
    const getSpaces = async () => {
        setLoader(true)
        const data = await SpacesApi.getSpaces()
        setLoader(false)
        setSpaces(data.data)
        return data.data
    }
    const getSpacesPopular = async () => {
        setLoader(true)
        const data = await SpacesApi.getPopularSpaces()
        setLoader(false)
        setSpacesPopular(data.data)
        return data.data
    }
    const removeSpace = async (id) => {
        setLoader(true)
        const data = await SpacesApi.removeSpace(id)
        setLoader(false)
        setSpaces(prev => prev.filter(el => el.id !== data.id))
        return data.data 
    }
    const createSpace = async (form) => {
        setLoader(true)
        const data = await SpacesApi.createSpace(form)
        setSpaces(prev => [...prev , data])
        setLoader(false)
        return data.data 
    }
    const updateSpace = async (form , id) => {
        setLoader(true)
        const data = await SpacesApi.updateSpace(form , id)
        setSpaces(prev => prev.map(el => el.id === id ? data : el))
        setLoader(false)
        return data.data 
    }
    const value = {
       spaces , loader , getSpaces  , removeSpace , createSpace , updateSpace , spacesPopular, getSpacesPopular
    }
  return (
    <SpacesContext value={value}>
        {children}
    </SpacesContext>
  )
}
export default SpacesProvider