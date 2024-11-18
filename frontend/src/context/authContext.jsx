import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'

const userContext = createContext()

const authContext = ({children}) => {
    useEffect(()=>{
        const verifyUser = async () => {
            try{
                const token = localStorage.getItem("token")
                if(token){
                    const res = await axios.get("http://localhost:5001/api/auth/verify",{
                        headers: {
                            "Authorization" : `Bearer ${token}`
                        }
                    })
                    if(res.data.success){
                        setUser(res.data.user)
                    }
                }
                else{
                    setUser(null)
                }
            }
            catch(err){
                if(err.response && !err.response.success){
                    setUser(null)
                }
            }
            verifyUser()
        }
    },[])
    const [user,setUser] = useState(null)
    const login = (user) => {
        setUser(user)
    }
    const logout = () => {
        setUser(null)
        localStorage.removeItem("token")
    }
  return (
    <userContext.Provider value={{user,login,logout}}>{children}</userContext.Provider>
  )
}

export const useAuth = () => useContext(userContext)

export default authContext