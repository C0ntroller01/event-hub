import PageHeader from "../components/common/PageHeader";
import EventsCategoryHeader from "../components/DashboardLayout/EventsCategoryHeader";
import FinancialCard from "../components/DashboardLayout/FinancialCard";
import TransactionTable from "../components/DashboardLayout/TransactionTable";
function Financials() {
  const transactions = [
                { id: 1, type: "Withdrawal", transactionId: "WT-129", amount: 10000.00, source: "", date: "Aug 22, 2024.", status: "" },
                { id: 2, type: "Deposit", transactionId: "DT-130", amount: 5000.00, source: "", date: "Aug 22, 2024.", status: "" },
                { id: 3, type: "Withdrawal", transactionId: "WT-131", amount: 2500.00, source: "", date: "Aug 22, 2024.", status: "" },
                { id: 4, type: "Deposit", transactionId: "DT-130", amount: 5000.00, source: "", date: "Aug 22, 2024.", status: "" },
                { id: 5, type: "Deposit", transactionId: "DT-130", amount: 5000.00, source: "", date: "Aug 22, 2024.", status: "" },
            ];
  const financialCategories = [{id: 1, name: "All Transactions", handleClick: ()=>{console.log("all-events")}},
                    {id: 2, name: "Completed Transactions", handleClick:  ()=>{console.log("all-events")}}, 
                    {id: 3, name: "Pending Transactions", handleClick:  ()=>{console.log("all-events")}}, 
                    {id: 4, name: "Failed Transactions", handleClick:  ()=>{console.log("all-events")}}, 
  ]
  return (<div>
      <PageHeader header="Financials" subheader="View series of events that have been posted for you."/>
      <div className="p-4 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <FinancialCard name="Wallet Balance" info="Total Debit - ₦ 40,457,356.53" quantity={40045735.53}/>
        <FinancialCard name="Insurance" info="4 events are insured" quantity={457356.53}/>
        <FinancialCard name="Escrow Account" info="2 activities under escrow account" quantity={457356.53}/>
      </div>
      <div className="">
        <EventsCategoryHeader arr={financialCategories}/>
        <TransactionTable transactions={transactions} />
      </div>

  </div>
  )
}

export default Financials