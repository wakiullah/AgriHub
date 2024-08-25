import React, { useContext } from 'react'
import { ShopContext } from '../components/Context/Context'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRoutes({ children }) {
    const navigate = useNavigate()
    const { user } = useContext(ShopContext)
    if (!user) {
        return navigate('/')
    }
    return children;
}
