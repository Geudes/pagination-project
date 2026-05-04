import { useContext } from 'react'
import { NavLink, Outlet } from 'react-router'
import authStorage from '../../features/auth/models/auth-storage'
import "./layout.css"

function Layout() {
    // const { user, logout } = useContext(authStorage)
    // const visitor = !user
    // const role = user?.role
    return (
        <div className="layout-container">
            <nav>
                {/* {visitor && (
                    <>
                       <NavLink to='/login'>Login</NavLink>
                        <NavLink to='/register'>Register</NavLink> 
                    </>
                )} */}
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/register'>Register</NavLink>
                <NavLink to='/booking'>Booking</NavLink>
                <NavLink to='/space'>Space</NavLink>
                <NavLink to='/review'>Review</NavLink>
                <button>log out</button>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout