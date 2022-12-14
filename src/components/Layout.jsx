import { Outlet } from "react-router-dom"
import Header from './Header/Header'
import Sidebar from "./Sidebar/Sidebar"

const Layout = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export { Layout }