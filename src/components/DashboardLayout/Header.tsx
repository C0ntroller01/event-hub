import React from 'react'
import {Plus, Info, Bell} from "lucide-react"
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className="w-full flex justify-between items-center pt-6">
        <div className="font-semibold text-gray-500 text-sm ">
            Dashboard
        </div>
        <div className="flex items-center space-x-4">
            <Link to="/create-event" className="flex items-center space-x-1 border-r border-r-gray-300 pr-4 text-[#4141A4]">
                <Plus/>
                <span>Create new event</span>
            </Link>
            <div className="flex space-x-2">
                <span className="p-2 rounded-full border border-gray-300 text-gray-500"> <Info width={20} height={20}/> </span>
                <span className="p-2 rounded-full border border-gray-300 text-gray-500"> <Bell width={20} height={20} /> </span>
                <span className="p-2 rounded-full border border-gray-300 text-white bg-orange-500"> MM </span>
            </div>
        </div>
    </div>
  )
}

export default Header