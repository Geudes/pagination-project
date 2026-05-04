import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './app/router/router'
import ToastProvider from './widgets/toast/provider/toast-provider'
import GlobalProvider from './app/providers/gloval-provider'

createRoot(document.getElementById('root')).render(
  <GlobalProvider>
    <ToastProvider>
      <RouterProvider router={router} />
    </ToastProvider>
  </GlobalProvider>
)