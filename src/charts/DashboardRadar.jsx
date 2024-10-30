import React from 'react'
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts'

const DashboardRadar = () => {

   const data = [
      {
      "subject": "Ryzen",
      "A": 120,
      "B": 110,
      "fullMark": 150
      },
      {
      "subject": "intel",
      "A": 98,
      "B": 130,
      "fullMark": 150
      },
      {
      "subject": "RAM",
      "A": 86,
      "B": 130,
      "fullMark": 150
      },
      {
      "subject": "CPU",
      "A": 99,
      "B": 100,
      "fullMark": 150
      },
      {
      "subject": "GTX",
      "A": 85,
      "B": 90,
      "fullMark": 150
      },
      {
      "subject": "RTX",
      "A": 65,
      "B": 85,
      "fullMark": 150
      }
   ]

   return (
      <div className='w-full aspect-square md:h-[400px] bg-white rounded-xl p-3 '>
         <h3 className='text-lg font-semibold'>Dashboard Radar</h3>
         <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
               <PolarGrid />
               <PolarAngleAxis dataKey="subject" />
               <PolarRadiusAxis angle={30} domain={[0, 150]} />
               <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#3B82F6" fillOpacity={0.6} />
               <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#22C55E" fillOpacity={0.6} />
            </RadarChart>
         </ResponsiveContainer>
      </div>
   )
}

export default DashboardRadar
