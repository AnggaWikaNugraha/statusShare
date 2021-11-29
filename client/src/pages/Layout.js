import React from 'react'
import MenuBar from '../components/MenuBar'
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <MenuBar />
            <Outlet />
        </>
    )
}

export default Layout
