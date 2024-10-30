import React from 'react'
import Title from './Title';
import DashboardFirst from '../charts/DashboardFirst';
import DashboardProductSales from '../charts/DashboardProductSales';
import DashboardRevenue from '../charts/DashboardRevenue';
import DashboardDots from '../charts/DashboardDots';
import DashboardRadar from '../charts/DashboardRadar';

const Dashboard = () => {



  return (
    <section>
      <Title name={'Revenue Dashboard'} />
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <DashboardFirst />
        <DashboardProductSales />
        <DashboardRevenue />
        <DashboardDots />
        <DashboardRadar />
      </section>
    </section>
  )
}

export default Dashboard
