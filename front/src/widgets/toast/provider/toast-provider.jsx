import { createContext, useState } from "react"

export const toastContext = createContext(null)
function ToastProvider({children}) {
    const [items, setItems] = useState([])
    const showToast = (message , type = 'info') => {
        const id = Date.now()
        setItems(prev => [...prev , {id, message , type}])
        setTimeout(()=> {
            setItems(prev => prev.filter(el => el.id !== id))
        }, 3000)
    }
    const remove  = ((id) => {
        setItems(prev => prev.filter(el => el.id !== id))
    })
  return (
    <toastContext value={{showToast}} >
        {children}
        <div className="toast-container">
            {items.map(item => {
                <div key={item.id} className={`toast toast-${item.type}`}>
                    <div className="toast-message">
                        {item.message}
                    </div>
                    <button onClick={() => remove(item.id)}>X</button>
                </div>
            })}
        </div>
    </toastContext>
  )
}

export default ToastProvider