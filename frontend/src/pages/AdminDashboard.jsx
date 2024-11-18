import React, { useEffect } from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

function AdminDashboard() {
  const {user} = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);
  return (
    <div>{user && user.name}</div>
  )
}

export default AdminDashboard