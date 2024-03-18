import React from 'react'
import SideBar from './SideBar'
import TopBar from './TopBar'
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <SideBar />
            <main>
                <TopBar />
                <Outlet />
            </main>
        </>
    )
}

export default Layout