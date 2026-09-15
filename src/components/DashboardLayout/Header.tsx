import React from 'react'
import {Plus, Info, Bell} from "lucide-react"
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className="flex w-full min-w-0 flex-wrap items-center justify-between gap-3 pt-6">
        <div className="font-semibold text-gray-500 text-sm ">
            Dashboard
        </div>
        <div className="flex min-w-0 flex-wrap items-center gap-4">
            <Link to="/create-event" className="flex shrink-0 items-center space-x-1 border-r border-r-gray-300 pr-4 text-primary">
                <Plus size={16}/>
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