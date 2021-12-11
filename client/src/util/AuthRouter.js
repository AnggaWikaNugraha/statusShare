import * as React from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/auth';

export const GuardOnlyLogin = ({ children }) => {
    const { user } = React.useContext(AuthContext)

    if (!user) {
        return <Navigate to="/login" />
    }

    return (
        <>
            {children}
        </>
    )
};