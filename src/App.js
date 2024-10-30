import React from 'react'
import SideBar from './components/SideBar'
import MainSide from './components/MainSide'

const App = () => {
  return (
    <main className='App flex'>
      <SideBar />
      <MainSide />
    </main>
  )
}

export default App
