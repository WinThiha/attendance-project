import { useAuth } from '@/context/AuthContext'
import React from 'react'

export default function Navbar() {
    const {logout} = useAuth()
  return (
    <nav className="navbar .navbar-expand-lg.  ">
  <div class="container-fluid">
  <div className='sticky fixed top-0 left-0 w-full flex bg-inherit items-center justify-between   p-4 border-b border-solid border-white'>
            <h1 className=" text-3xl select-none sm:text-6xl ">Attendance System</h1>
            <i className=" fa-solid fa-user text-xl sm:text-3xl text-white duration-300 hover:opacity-40 cursor-pointer " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      
    </i>
        </div>
    
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 className="select-none offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        
        <i type="button" className="fa-solid fa-xmark duration-300 hover:rotate-90 text-lg sm:text-3xl cursor-pointer " data-bs-dismiss="offcanvas" aria-label="Close"></i>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><p className="select-none ml-4 hover:pl-2 duration-300 cursor-pointer max-w-fit" onClick={()=>logout()}>Log Out</p></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
  )
}
