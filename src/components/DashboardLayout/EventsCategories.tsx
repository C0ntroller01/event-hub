import EventsCard from './EventsCard';
import EventsCategoriesHeader from './EventsCategoryHeader'
interface EventCategoriesProps{
    id: number;
    name: string;
    handleClick: ()=> void
}
interface EventCatHeaderArr{
    categories: EventCategoriesProps[]
}
function EventsCategories({categories}:EventCatHeaderArr) {
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
    
  return (
    <div className="flex flex-col items-start justify-start gap-4 py-4 h-min-full w-min-full">
        <EventsCategoriesHeader arr={categories}/>
        <div className="grid w-full max-w-full grid-cols-1 items-start justify-start gap-3 p-2 m-0 h-auto md:grid-cols-2 xl:grid-cols-3">
        {events.map((event)=>
                    <EventsCard name={event.name} key={event.id} id ={event.id} date={event.date} location={event.location} time={event.time} image={event.image}/>
                  )
            }
          </div>
    </div>
  )
}

export default EventsCategories