import React from 'react'

interface TicketCardProps{
    name?: string;
    quantity?: number;
    info?: string
}

function TicketsCard({name, quantity,info}:TicketCardProps) {
  return (
    <div className="flex m-3 p-5 gap-10 b border border-borderGray  items-center">
        <div className="flex flex-col gap-4">
          <div>{name}</div>
          <div className="text-4xl font-bold">{quantity}</div>
          <div className="text-textGray">{info}</div>
        </div>
        <img src="/public/Others/Ticket.png" alt="ticket" className="w-15 h-15" />
    </div>
  )
}

export default TicketsCard