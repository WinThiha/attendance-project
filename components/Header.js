
import React,{useState} from "react";
import Modal from "./Modal";
import { ReactDOM } from "react";
import Navbar from "./Navbar";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
    const {currentUser} = useAuth()
    
    return (
        <>
        
      {currentUser ?  <Navbar></Navbar> :(
        
            <h1 className="sticky fixed top-0 left-0 w-full flex bg-inherit items-center justify-between   p-4 border-b border-solid border-white text-3xl select-none sm:text-6xl ">Attendance System</h1>
        
      )}
        </>
        
    )
}