import React from 'react'
import Sidebar from "./Sidebar";
import Header from "./Header";
import {Outlet} from "react-router-dom"

function DashboardLayout() {
  return (
    <div className="flex h-screen w-screen max-w-full flex-row overflow-x-hidden text-sm">
        <hr className="absolute top-20 right-0 left-0 text-gray-400 "/>
        <div className="shrink-0">
          <Sidebar />
        </div>
        {/* left */}
        <div className="flex min-w-0 flex-1 flex-col w-full h-full overflow-x-hidden">
          {/* header content */}
          <header className="h-20 w-full flex items-center px-6">
            <Header/>
          </header>
          {/* page content */}
          <main className="min-w-0 flex-1 overflow-x-hidden p-6">
            <Outlet/>
          </main>
        </div>
      </div>
  )
}

export default DashboardLayout