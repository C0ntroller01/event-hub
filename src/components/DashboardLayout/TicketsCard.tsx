import React from 'react'

interface TicketCardProps{
    name?: string;
    quantity?: number;
    info?: string
}

function TicketsCard({name, quantity,info}:TicketCardProps) {
  return (
    <div className="relative flex m-3 p-5 gap-10 border border-borderGray items-center transition-all ease-in duration-300 
              hover:bg-[linear-gradient(296.41deg,#26263B_50.31%,#2F2F47_83.36%)] hover:cursor-pointer hover:scale-110"
>
        <div className="absolute w-[152.887px] h-[152.887px] top-[-68.5px] left-34.5 opacity-50 rounded-full bg-[#D9D9D90D]"/>
        <div className="absolute  w-[152.887px] h-[152.887px] top-[28.61px] left-[214.11px] opacity-50 rounded-full bg-[#D9D9D90D]"/>
        <div className="flex flex-col gap-4">
          <div>{name}</div>
          <div className="text-4xl font-bold">{quantity}</div>
          <div className="text-textGray whitespace-nowrap">{info}</div>
        </div>
        <img src="/public/Others/Ticket.png" alt="ticket" className="w-15 h-15" />
    </div>
  )
}

export default TicketsCard