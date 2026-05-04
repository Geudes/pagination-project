import { useContext } from "react"
import { toastContext } from "../provider/toast-provider"


function useToast() {
    const res = useContext(toastContext)
    if(!res){
        return new Error('не подключен')
    }
    return res
}

export default useToast