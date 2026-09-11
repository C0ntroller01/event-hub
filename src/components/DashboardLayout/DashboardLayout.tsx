import React from 'react'
import Sidebar from "./Sidebar";
import Header from "./Header";
import {Outlet} from "react-router-dom"

function DashboardLayout() {
  return (
    <div className="flex flex-row w-screen h-screen text-sm ">
        <hr className="absolute top-20 right-0 left-0 text-gray-400 "/>
        <Sidebar />
        {/* left */}
        <div className="flex flex-col flex-1 w-full h-full">
          {/* header content */}
          <header className="h-16 w-full flex items-center px-6 ">
            <Header/>
          </header>
          {/* page content */}
          <main className="flex-1 p-6">
            <Outlet/>
          </main>
        </div>
      </div>
  )
}

export default DashboardLayout