import EventDetailCard from '../components/common/EventDetailCard';
import EventSumCard from '../components/common/EventSumCard';
import PageHeader from '../components/common/PageHeader';
import EventsCategoryHeader from '../components/DashboardLayout/EventsCategoryHeader';

function MyEvents() {
  const myEventCategories = [{id: 1, name: "All Events", handleClick: ()=>{console.log("all-events")}},
                    {id: 2, name: "Birthdays", handleClick:  ()=>{console.log("all-events")}}, 
                    {id: 3, name: "Funerals", handleClick:  ()=>{console.log("all-events")}}, 
                    {id: 4, name: "Recurring Events", handleClick:  ()=>{console.log("all-events")}}, 
                    {id: 5, name: "Upcoming Events", handleClick:  ()=>{console.log("all-events")}}, 
                    {id: 6, name: "Created Events", handleClick:  ()=>{console.log("all-events")}}, 
                    {id: 7, name: "Collaborating Events", handleClick:  ()=>{console.log("all-events")}},
                     {id: 8, name: "Drafted Events", handleClick:  ()=>{console.log("all-events")}},
                     {id: 9, name: "Pending Events", handleClick:  ()=>{console.log("all-events")}},
                     {id: 10, name: "Life Events", handleClick:  ()=>{console.log("all-events")}},
                     {id: 11, name: "Past Events", handleClick:  ()=>{console.log("all-events")}},
                     {id: 12, name: "Saved Events", handleClick:  ()=>{console.log("all-events")}}, 
                     {id: 13, name: "New to You", handleClick:  ()=>{console.log("all-events")}},
                     {id: 14, name: "Live Recommendations", handleClick:  ()=>{console.log("all-events")}}
  ]
  return (
    <div className="py-4">
      <PageHeader header="My Events" subheader="View series of events that have been posted for you."/>
      {/* These summarized event cards */}
      <div className="gap-3 p-2 mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <EventSumCard name="Posted Events" rate={20} image="/public/Calendar/PostedEvents.png" />
          <EventSumCard name="Unpublished Events" rate={88} image="/public/Calendar/UnpublishedEvents.png" />
          <EventSumCard name="Upcoming Events" rate={12} image="/public/Calendar/UpcomingEvents.png" />
          <EventSumCard name="Cancelled Events" rate={20} image="/public/Calendar/CancelledEvents.png" />
      </div>
      <EventsCategoryHeader arr={myEventCategories}/>

      <div className=" flex flex-col gap-2 p-2">
        <EventDetailCard name="Everyday Design Conference" image="/public/People/Conference_2.jpg" 
                          date="Wednesday, September30, 2024 | 20:00" dateCreated="Aug 22, 2025." 
                          createdBy="Amori Ademakinwa" locationType="Physical Event" 
                          lastModified="3 days ago" status="Live Event"
                          />
        <EventDetailCard name="Everyday Design Conference" image="/public/People/Conference.jpg" 
                          date="Wednesday, September30, 2024 | 20:00" dateCreated="Aug 22, 2025." 
                          createdBy="Amori Ademakinwa" locationType="Physical Event" 
                          lastModified="3 days ago" status="Live Event"
                          />
        <EventDetailCard name="Everyday Design Conference" image="/public/People/People_2.jpg" 
                          date="Wednesday, September30, 2024 | 20:00" dateCreated="Aug 22, 2025." 
                          createdBy="Amori Ademakinwa" locationType="Physical Event" 
                          lastModified="3 days ago" status="Live Event"
                          />
        <EventDetailCard name="Everyday Design Conference" image="/public/People/People.jpg" 
                          date="Wednesday, September30, 2024 | 20:00" dateCreated="Aug 22, 2025." 
                          createdBy="Amori Ademakinwa" locationType="Physical Event" 
                          lastModified="3 days ago" status="Live Event"
                          />
      </div>
    </div>
  )
}

export default MyEvents