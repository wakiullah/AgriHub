import React, { useContext } from 'react'
import { ShopContext } from '../components/Context/Context'
import { Navigate, useNavigate } from 'react-router-dom'

export default function ProtectedRoutes({ children }) {
    // const navigate = useNavigate()
    const { user } = useContext(ShopContext)
    if (user) {
        return children

    } else {
        return <Navigate to={'/login'} replace={true} />
    }
}
