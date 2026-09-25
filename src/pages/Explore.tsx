import React from 'react'
import Button from '../components/common/Button';
import { Settings, SlidersVertical } from 'lucide-react';
import EventsCarousel from '../components/common/EventsCarousel';
import EventsCategories from '../components/DashboardLayout/EventsCategories';
import PageHeader from '../components/common/PageHeader';

function Explore() {
  const events = [
                    {id: 1, name: "Everyday Design conference", date: "August 15, 2023",time:"7:00pm", 
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
    const eventCategories = [{id: 1, name: "All Events", handleClick: ()=>{console.log("all-events")}},
                    {id: 2, name: "Birthdays", handleClick:  ()=>{console.log("all-events")}}, 
                    {id: 3, name: "Funerals", handleClick:  ()=>{console.log("all-events")}}, 
                    {id: 4, name: "Parties", handleClick:  ()=>{console.log("all-events")}}, 
                    {id: 5, name: "Conferences", handleClick:  ()=>{console.log("all-events")}}, 
                    {id: 6, name: "Reunion", handleClick:  ()=>{console.log("all-events")}}, 
                    {id: 7, name: "Seminars", handleClick:  ()=>{console.log("all-events")}},
                     {id: 8, name: "Trade Shows", handleClick:  ()=>{console.log("all-events")}},
                     {id: 9, name: "Sponsored", handleClick:  ()=>{console.log("all-events")}},
                     {id: 10, name: "Suggested for you", handleClick:  ()=>{console.log("all-events")}},
                     {id: 11, name: "Recommended", handleClick:  ()=>{console.log("all-events")}},
                     {id: 12, name: "Continue Watching", handleClick:  ()=>{console.log("all-events")}}, 
                     {id: 13, name: "New to You", handleClick:  ()=>{console.log("all-events")}},
  ]
  return (
    <div className="p-3">
      {/* header */}
      <header  className="flex justify-between items-center mb-4">
        <PageHeader 
          header="Explore Events" 
          subheader="View series of events that have been posted for you."
          />
        <div className="flex gap-2 ">
          <Button className="text-primary flex border-r border-borderGray justify-center items-center">
            <Settings size={16}/>
            <span>Customize Events</span>
          </Button>
          <Button className="bg-primary flex justify-center items-center">
            <SlidersVertical size={16}/>
            <span>Apply Filter</span>
          </Button>
        </div>
      </header>
      <EventsCarousel items={events}/>
      <EventsCategories categories={eventCategories}/>
    </div>
  )
}

export default Explore