
interface TransactionProps {
  id: number;
  type: string;
  transactionId: string;
  amount: number;
  source: string;
  date: string;
  status: string;
}
interface TransactionTableProps {
  transactions: TransactionProps[];
}
function TransactionTable({ transactions }: TransactionTableProps) {
             
  return (
    <div className="overflow-x-auto w-full mt-4">
        <table className="w-full">
            <thead className="">
                <tr>
                    <th className="p-4 text-left">TRANSACTION TYPE</th>
                    <th className="p-4 text-left">AMOUNT</th>
                    <th className="p-4 text-left">SOURCE</th>
                    <th className="p-4 text-left">TRANSACTION DATE</th>
                    <th className="p-4 text-left">STATUS</th>
                    <th className="p-4 text-left">ACTION</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction, index) => (
                    <tr key={index} className="border-b border-borderGray">
                        <td className="p-4">{transaction.type}</td>
                        <td className="p-4">₦ {transaction.amount.toLocaleString()}</td>
                        <td className="p-4">{transaction.source}</td>
                        <td className="p-4">{transaction.date}</td>
                        <td className="p-4">{transaction.status}</td>
                        <td className="p-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                                View Details
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default TransactionTable