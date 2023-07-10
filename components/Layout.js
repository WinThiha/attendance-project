import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useAuth } from "@/context/AuthContext";
export default function Layout(props) {
  const { children } = props;
  const {currentUser} = useAuth()
  return (
    <div className="flex flex-col min-h-screen relative bg-slate-900 text-white">
      <Header />
      
      <main className="flex-1 flex flex-col p-4">{children}</main>
      <Footer />
    </div>
  );
}
