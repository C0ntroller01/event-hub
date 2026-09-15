import React from 'react'
import {LogOut} from "lucide-react"
import SideBarItems from '../common/SideBarItems'
import {Link} from "react-router-dom"
function Sidebar() {
  return (
    <aside className="flex flex-col items-center text-sm bg-primary w-64 h-full">
      {/* top */}
      <div className="text-white flex text-xl items-center justify-center py-7 font-bold  w-full">
        EVENT-HUB
      </div>
      {/* items */}
      <div className="flex flex-col items-center gap-2 pl-4 pt-6  w-full h-full ">
        <SideBarItems />
        <Link to={"/login"} className="flex gap-2 mt-6 items-center w-full px-4
                                       text-red-900 hover:text-red-500 
                                       transition-colors ease-in duration-200">
          <LogOut className="" width={20} height={20}/>
          <span className="">Logout</span>
        </Link>
      </div>
    </aside>
  )
}

export default Sidebar
