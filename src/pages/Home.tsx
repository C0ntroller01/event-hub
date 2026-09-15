import ProfileCard from "../components/DashboardLayout/ProfileCard";
import CreateNewCard from "../components/DashboardLayout/CreateNewCard";
import EventsCategories from "../components/DashboardLayout/EventsCategories";


function Home() {
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
       <EventsCategories/>
    </div>
  )
}

export default Home