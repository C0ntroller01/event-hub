import React from 'react'
import Button from '../common/Button';
import { MessageSquareText, ThumbsDown, ThumbsUp, UserCheck2 } from 'lucide-react';

function EventsCards() {
    const events = [{id: 1, name: "Everyday Design conference", date: "August 15, 2023",time:"7:00pm", 
                    location: "Off Allen Avenue, Ikeja, Lagos State, Nigeria", 
                    image: "/public/People/People.jpg"},
                    {id: 2, name: "Everyday Design conference", date: "August 15, 2023",time:"7:00pm", 
                    location: "Off Allen Avenue, Ikeja, Lagos State, Nigeria", 
                    image: "/public/People/People_2.jpg"},
                    {id: 3, name: "Everyday Design conference", date: "August 15, 2023",time:"7:00pm",
                    location: "Off Allen Avenue, Ikeja, Lagos State, Nigeria", 
                    image: "/public/People/Conference.jpg"},
                    {id: 4, name: "Everyday Design conference", date: "August 15, 2023",time:"7:00pm", 
                    location: "Off Allen Avenue, Ikeja, Lagos State, Nigeria", 
                    image: "/public/People/Conference.jpg"},
                    {id: 5, name: "Everyday Design conference", date: "August 15, 2023",time:"7:00pm", 
                    location: "Off Allen Avenue, Ikeja, Lagos State, Nigeria", 
                    image: "/public/People/People.jpg"},
                    {id: 6, name: "Everyday Design conference", date: "August 15, 2023",time:"7:00pm", 
                    location: "Off Allen Avenue, Ikeja, Lagos State, Nigeria", 
                    image: "/public/People/People_2.jpg"},
                    {id: 7, name: "Everyday Design conference", date: "August 15, 2023",time:"7:00pm",
                    location: "Off Allen Avenue, Ikeja, Lagos State, Nigeria", 
                    image: "/public/People/Conference.jpg"},
                    {id: 8, name: "Everyday Design conference", date: "August 15, 2023",time:"7:00pm", 
                    location: "Off Allen Avenue, Ikeja, Lagos State, Nigeria", 
                    image: "/public/People/Conference_2.jpg"}
                    

    ];
  return (
    <div className="grid w-full max-w-full grid-cols-1 items-start justify-start gap-3 p-2 m-0 h-auto sm:grid-cols-2 xl:grid-cols-3">
        {events.map((event) => (
            <div key={event.id} className="flex flex-col items-start justify-start gap-2 w-full h-full bg-white border border-borderGray rounded-lg">
                <div style={{backgroundImage: `url(${event.image})`}} className="w-full h-65 relative bg-cover bg-center">
                    <div className="absolute top-3 bottom-3 right-4 flex flex-col items-center justify-center bg-[#D9D9D966] gap-4">
                        <Button className="border-b border-borderGray px-0"><ThumbsUp size={20}/></Button>
                        <Button className="border-b border-borderGray px-0"><ThumbsDown size={20}/></Button>
                        <Button className="border-b border-borderGray px-0"><MessageSquareText size={20}/></Button>
                        <Button ><UserCheck2 size={20}/></Button>
                    </div>
                </div>
                <div className="p-3 pb-6 space-y-2">
                    <h3 className="text-lg font-semibold text-black">{event.name}</h3>
                    <p className="text-sm text-gray-500">{event.location}</p>
                    <span >Coming {event.date}</span> - <span>{event.time}</span>
                </div>
            </div>
        ))}
    </div>
  )
}

export default EventsCards