import { NavLink, Outlet, ScrollRestoration } from 'react-router-dom'
import BreadCrumbs from '../components/Breadcrumbs'

const RootLayout = () => {
    return (
        <div className='root-layout'>
            <ScrollRestoration />
            <header>
                <nav>
                    <h1>Recdev</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="help">Help</NavLink>
                    <NavLink to="projects">Projects</NavLink>
                </nav>
                <BreadCrumbs />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout