import React, { useEffect, useState, useContext, useRef } from "react";
import { auth,db } from "@/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const[loading, setLoading] = useState(true);
    const userInfo = useRef();

    function signup(email, password) {
        createUserWithEmailAndPassword(auth, email, password)
        return
    }
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)

    }
    function logout() {
        return signOut(auth)
    }
    function gmailSignIn(){
        const provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            setCurrentUser(user);
            setLoading(false);
        })
        return unsubscribe
    }, [])


    const value = {
        currentUser,
        login,
        signup,
        logout,
        userInfo,
        gmailSignIn
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}