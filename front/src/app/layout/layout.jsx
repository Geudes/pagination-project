import { NavLink, Outlet } from 'react-router'
import "./layout.css"

function Layout() {
    return (
        <div className="layout-container">
            <nav>
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