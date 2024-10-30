import React from 'react'
import { CartesianGrid, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashboardDots = () => {

   const data01 = [
      {
      "x": 100,
      "y": 200,
      "z": 200
      },
      {
      "x": 120,
      "y": 100,
      "z": 260
      },
      {
      "x": 170,
      "y": 300,
      "z": 400
      },
      {
      "x": 140,
      "y": 250,
      "z": 280
      },
      {
      "x": 150,
      "y": 400,
      "z": 500
      },
      {
      "x": 110,
      "y": 280,
      "z": 200
      }
   ];

   const data02 = [
      {
      "x": 200,
      "y": 260,
      "z": 240
      },
      {
      "x": 240,
      "y": 290,
      "z": 220
      },
      {
      "x": 190,
      "y": 290,
      "z": 250
      },
      {
      "x": 198,
      "y": 250,
      "z": 210
      },
      {
      "x": 180,
      "y": 280,
      "z": 260
      },
      {
      "x": 210,
      "y": 220,
      "z": 230
      }
   ];

   return (
      <div className='w-full aspect-square md:h-[400px] md:col-span-2 bg-white rounded-xl p-3'>
         <h3 className='text-lg font-semibold'>Dashboard Dots</h3>
         <ResponsiveContainer width="100%" height={`100%`}>
            <ScatterChart
               margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
               }}
            >
               <CartesianGrid />
               <XAxis type="number" dataKey="x" name="stature" unit="units" />
               <YAxis type="number" dataKey="y" name="weight" unit="units" />
               <Tooltip cursor={{ strokeDasharray: '3 3' }} />
               <Scatter name="A school" data={data01} fill="#3B82F6" />
               <Scatter name="A school" data={data02} fill="#22C55E" />
            </ScatterChart>
         </ResponsiveContainer>
      </div>
   )
}

export default DashboardDots
