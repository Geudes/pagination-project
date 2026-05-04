import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './app/router/router'
import ToastProvider from './widgets/toast/provider/toast-provider'

createRoot(document.getElementById('root')).render(
    <ToastProvider>
      <RouterProvider router={router}></RouterProvider>  
    </ToastProvider>
    
)
