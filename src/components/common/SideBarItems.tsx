import React from 'react'
import { House, History, Cog, CreditCard, CircleQuestionMark } from "lucide-react"
import { NavLink } from "react-router-dom"
import { cn } from "../../lib/utils";


function SideBarItems() {
    const items = [
        {name: "Home", icon: <House width={20} height={20}/>,href: "/dashboard"},
        {name: "Explore", icon: <History width={20} height={20}/>,href: "/explore"},
        {name: "My Events", icon: <History width={20} height={20}/>,href: "/my-events"},
        {name: "My Tickets", icon: <CreditCard width={20} height={20}/>,href: "/my-tickets"},
        {name: "Financials", icon: <History width={20} height={20}/>,href: "/financials"},
        {name: "Service Management", icon: <History width={20} height={20}/>,href: "/service-management"},
        {name: "Media", icon: <History width={20} height={20}/>,href: "/media"},
        {name: "Event Store/Gift", icon: <History width={20} height={20}/>,href: "/event-store"},
        {name: "Messages", icon: <History width={20} height={20}/>,href: "/messages"},
        {name: "Settings", icon: <Cog width={20} height={20}/>,href: "/settings"},
        {name: "Activity log", icon: <History width={20} height={20}/>,href: "/activity-log"},
        {name: "Support", icon: <CircleQuestionMark width={20} height={20}/>,href: "/help"}
    ]
  return (
    <>  
    {items.map((item: { name: string; icon: React.ReactNode; href: string }) => (
    <NavLink to={item.href} key={item.name} className={({isActive})=>cn("flex items-center gap-2 text-gray-400 px-3 py-2",
                  "rounded-md cursor-pointer w-full" ,
                  "hover:text-white transition-colors ease-in duration-200",
                  isActive && "text-white")}>
        <span>{item.icon} </span>
        <span> {item.name} </span>
    </NavLink>
    ))}
    </>
  )
}

export default SideBarItems