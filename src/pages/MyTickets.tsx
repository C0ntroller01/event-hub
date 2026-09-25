import PageHeader from "../components/common/PageHeader";
import TicketsCard from "../components/DashboardLayout/TicketsCard";

function MyTickets() {
  return <div className="m-0">
          <PageHeader header="My Tickets" subheader="View series of events that have been posted for you."/>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <TicketsCard name="Total Tickets" info="5 tickets used this month" quantity={204}/>
            <TicketsCard name="Active/Unused Tickets" info="5 tickets used this month" quantity={0o3}/>
            <TicketsCard name="Expired/Used Tickets" info="5 tickets used this month" quantity={129}/>
            <TicketsCard name="Insured Tickets" info="5 tickets used this month" quantity={24}/>
          </div>
        </div>
}

export default MyTickets