import React from 'react'

const ClientsTable = ({showData}) => {

   

   return (
      <div className="w-full overflow-auto shadow-lg rounded-lg">
      <table className='bg-white rounded-lg min-w-full text-sm md:text-lg'>
         <thead className='font-semibold border-collapse' >
            <tr>
               <th className='p-1 md:p-2 lg:p-3 border-2 border-neutral-200 text-center'>ID</th>
               <th className='p-1 md:p-2 lg:p-3 border-2 border-neutral-200 text-center'>Client</th>
               <th className='p-1 md:p-2 lg:p-3 border-2 border-neutral-200 text-center'>Document Name</th>
               <th className='p-1 md:p-2 lg:p-3 border-2 border-neutral-200 text-center'>Category</th>
               <th className='p-1 md:p-2 lg:p-3 border-2 border-neutral-200 text-center'>Upload Date</th>
            </tr>
         </thead>
         <tbody>
            {showData.map((item,index) => (
               <tr key={index+95638} className={`${item.id%2===1 && 'bg-neutral-100'} duration-300 hover:bg-neutral-300`}>
                  <td className='p-1 md:p-2 lg:p-3 border-2 border-neutral-200 text-center'>{item.id}</td>
                  <td className='p-1 md:p-2 lg:p-3 border-2 border-neutral-200 text-center'>{item.client}</td>
                  <td className='p-1 md:p-2 lg:p-3 border-2 border-neutral-200 text-center'>{item.document_name}</td>
                  <td className='p-1 md:p-2 lg:p-3 border-2 border-neutral-200 text-center'>{item.category}</td>
                  <td className='p-1 md:p-2 lg:p-3 border-2 border-neutral-200 text-center'>{item.upload_date}</td>
               </tr>
            ))}
         </tbody>
      </table>
      </div>
   )
}

export default ClientsTable
