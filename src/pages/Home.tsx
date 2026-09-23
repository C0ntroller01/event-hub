import ProfileCard from "../components/DashboardLayout/ProfileCard";
import CreateNewCard from "../components/DashboardLayout/CreateNewCard";
import EventsCategories from "../components/DashboardLayout/EventsCategories";


function Home() {
const homeCategories = [{id: 1, name: "All Events", handleClick: ()=>{console.log("all-events")}},
                    {id: 2, name: "My Events", handleClick:  ()=>{console.log("all-events")}}, 
                    {id: 3, name: "Streaming Events", handleClick:  ()=>{console.log("all-events")}}, 
                    {id: 4, name: "Trending Events", handleClick:  ()=>{console.log("all-events")}}, 
                    {id: 5, name: "Saved Events", handleClick:  ()=>{console.log("all-events")}}, 
                    {id: 6, name: "Posted Events", handleClick:  ()=>{console.log("all-events")}}, 
                    {id: 7, name: "Events Around Me", handleClick:  ()=>{console.log("all-events")}},
                     {id: 8, name: "Sponsored", handleClick:  ()=>{console.log("all-events")}},
                     {id: 9, name: "Suggested for you", handleClick:  ()=>{console.log("all-events")}},
                     {id: 10, name: "Recommended", handleClick:  ()=>{console.log("all-events")}},
                     {id: 11, name: "Continue Watching", handleClick:  ()=>{console.log("all-events")}}, 
  ]
  return (
    <div className="flex min-w-0 max-w-full flex-col justify-start gap-4 overflow-x-hidden scrollbar-none py-4 h-full">
      {/* top */}
        <div className="flex max-w-full flex-wrap gap-4">
          {/* profile */}
          <ProfileCard />
          {/* create new event */}
          <CreateNewCard/>
        </div>
        {/* remaining */}
       <EventsCategories categories={homeCategories}/>
    </div>
  )
}

export default Home