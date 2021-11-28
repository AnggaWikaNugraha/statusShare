import React from 'react'
import MenuBar from '../components/MenuBar'

const Layout = ({ children }) => {
    return (
        <>
            <MenuBar />
            {children}
        </>
    )
}

export default Layout
