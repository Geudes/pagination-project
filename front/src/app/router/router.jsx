import {createBrowserRouter} from "react-router"
import Layout from "../layout/layout"
import NotFoundPage from "../../pages/NotFoundPage"
import RegisterPage from "../../pages/RegisterPage"
import LoginPage from "../../pages/LoginPage"
import BookingPage from "../../pages/BookingPage"
import SpacePage from "../../pages/SpacePage"
import ReviewPage from "../../pages/ReviewPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: '/register',
                element: <RegisterPage />
            },
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/booking',
                element: <BookingPage />
            },
            {
                path: '/space',
                element: <SpacePage />
            },
            {
                path: '/review',
                element: <ReviewPage />
            }
        ]
    }
])

export default router