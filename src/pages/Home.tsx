import ProfileCard from "../components/DashboardLayout/ProfileCard";
import CreateNewCard from "../components/DashboardLayout/CreateNewCard";
import EventsCategories from "../components/DashboardLayout/EventsCategories";


function Home() {
  return (
    <div className="flex flex-col  justify-start gap-4 p-10 w-full h-full">
      {/* top */}
        <div className="flex gap-4 ">
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