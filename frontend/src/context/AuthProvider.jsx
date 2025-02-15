import React from 'react'
import { createContext } from 'react';
import { useState } from 'react';
import { useContext } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({children}) {
  const initialAuthUser = localStorage.getItem('Users');
  const [AuthUser, setAuthUser] = useState(
    initialAuthUser? JSON.parse(initialAuthUser): undefined
    );

    return(
        <AuthContext.Provider value={[AuthUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
}



export const useAuth =() =>useContext(AuthContext);