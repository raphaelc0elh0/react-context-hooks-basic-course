import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const toggleAuth = () => {
    return (setIsAuthenticated(!isAuthenticated))
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated: isAuthenticated, toggleAuth: toggleAuth }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
