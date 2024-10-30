import React from 'react'
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

const DashboardProductSales = () => {

   const data01 = [
      {
      "name": "Group A",
      "value": 400
      },
      {
      "name": "Group B",
      "value": 300
      },
      {
      "name": "Group C",
      "value": 300
      },
      {
      "name": "Group D",
      "value": 200
      },
      {
      "name": "Group E",
      "value": 278
      },
      {
      "name": "Group F",
      "value": 189
      }
];

const data02 = [
      {
      "name": "Group A",
      "value": 2400
      },
      {
      "name": "Group B",
      "value": 4567
      },
      {
      "name": "Group C",
      "value": 1398
      },
      {
      "name": "Group D",
      "value": 9800
      },
      {
      "name": "Group E",
      "value": 3908
      },
      {
      "name": "Group F",
      "value": 4800
      }
   ];

   return (
      <div className='w-full aspect-square lg:h-[400px] bg-white rounded-xl p-3'>
         <h3 className='text-lg font-semibold'>Product Sales</h3>
         <ResponsiveContainer width="100%" height="100%">
            <PieChart width={`100%`} height={`100%`}>
            <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#3B82F6" />
            <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={110} fill="#22C55E" label />
            </PieChart>
         </ResponsiveContainer>
      </div>
   )
}

export default DashboardProductSales
