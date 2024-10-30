import React from 'react'

const BillsTable = ({showData}) => {
   return (
      <div className="w-full overflow-auto shadow-lg rounded-lg">
      <table className='bg-white rounded-lg min-w-full text-sm md:text-lg'>
         <thead className='font-semibold border-collapse' >
            <tr>
               <th className='p-1 md:p-2 lg:p-3 border-2 border-neutral-200 text-center'>ID</th>
               <th className='p-1 md:p-2 lg:p-3 border-2 border-neutral-200 text-center'>Client</th>
               <th className='p-1 md:p-2 lg:p-3 border-2 border-neutral-200 text-center'>Payment</th>
               <th className='p-1 md:p-2 lg:p-3 border-2 border-neutral-200 text-center'>Status</th>
               <th className='p-1 md:p-2 lg:p-3 border-2 border-neutral-200 text-center'>Amount ($)</th>
               <th className='p-1 md:p-2 lg:p-3 border-2 border-neutral-200 text-center'>Date</th>
            </tr>
         </thead>
         <tbody>
            {showData.map((item,index) => (
               <tr key={index+95638} className={`${item.id%2===1 && 'bg-neutral-100'} duration-300 hover:bg-neutral-300`}>
                  <td className='p-1 md:p-2 lg:p-3 border-2 border-neutral-200 text-center'>{item.id}</td>
                  <td className='p-1 md:p-2 lg:p-3 border-2 border-neutral-200 text-center'>{item.client_name}</td>
                  <td className='p-1 md:p-2 lg:p-3 border-2 border-neutral-200 text-center'>{item.payment_method}</td>
                  <td className='p-1 md:p-2 lg:p-3 border-2 border-neutral-200 text-center'><span className={`rounded-lg px-2 ${item.payment_status === 'Paid'?'bg-green-200 text-green-500':'bg-yellow-200 text-yellow-500'}`}>{item.payment_status}</span></td>
                  <td className='p-1 md:p-2 lg:p-3 border-2 border-neutral-200 text-center'>{item.amount}</td>
                  <td className='p-1 md:p-2 lg:p-3 border-2 border-neutral-200 text-center'>{item.date}</td>
               </tr>
            ))}
         </tbody>
      </table>
      </div>
   )
}

export default BillsTable
