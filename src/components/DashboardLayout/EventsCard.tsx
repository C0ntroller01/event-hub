import React from 'react'
import Button from '../common/Button';
import { MessageSquareText, ThumbsDown, ThumbsUp, UserCheck2 } from 'lucide-react';

interface EventCardProps{
    id: number
    image: string;
    name: string;
    location: string
    time: string;
    date: string;
}
function EventsCards({id, image, name, location, time, date}:EventCardProps) {
    
  return (
        <div key={id} className="flex flex-col items-start justify-start gap-2 w-full h-full bg-white border border-borderGray rounded-lg">
            <div style={{backgroundImage: `url(${image})`}} className="w-full h-65 relative bg-cover bg-center">
                <div className="absolute top-3 bottom-3 right-4 flex flex-col items-center justify-center bg-[#D9D9D966] gap-4">
                    <Button className="border-b border-borderGray px-0"><ThumbsUp size={20}/></Button>
                    <Button className="border-b border-borderGray px-0"><ThumbsDown size={20}/></Button>
                    <Button className="border-b border-borderGray px-0"><MessageSquareText size={20}/></Button>
                    <Button ><UserCheck2 size={20}/></Button>
                </div>
            </div>
            <div className="p-3 pb-6 space-y-2">
                <h3 className="text-lg font-semibold text-black">{name}</h3>
                <p className="text-sm text-gray-500">{location}</p>
                <span >Coming {date}</span> - <span>{time}</span>
            </div>
        </div>
  )
}

export default EventsCards