import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Clients from './Clients';
import Reports from './Reports';
import Bills from './Bills';
import Dashboard from './Dashboard';

const MainSide = () => {
   return (
      <section className="bg-neutral-200 flex-1 h-[100vh] overflow-y-scroll p-5 md:p-8">
         <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/clients' element={<Clients />} />
            <Route path='/bills' element={<Bills />} />
         </Routes>
      </section>
   )
}

export default MainSide
