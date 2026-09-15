import EventsCard from './EventsCard';
import EventsCategoriesHeader from './EventsCategoryHeader'
function EventsCategories() {
  return (
    <div className="flex flex-col items-start justify-start gap-4 py-4 h-min-full w-min-full">
        <EventsCategoriesHeader/>
        <EventsCard/>
    </div>
  )
}

export default EventsCategories