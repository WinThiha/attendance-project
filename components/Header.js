import React from "react";

export default function Header() {
    return (
        <div className='fixed top-0 left-0 w-full flex bg-inherit items-center justify-between p-4 border-b border-solid border-white'>
            <h1 className=" text-3xl select-none sm:text-6xl">TODO LIST</h1>
            <i className="fa-solid fa-user text-xl sm:text-3xl duration-300 hover:opacity-40 cursor-pointer"></i>
        </div>
    )
}