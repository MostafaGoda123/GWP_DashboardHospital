import React, { useEffect, useState } from 'react'
import Title from './Title'
import ClientsTable from './ClientsTable'
import { CiSearch } from 'react-icons/ci'
import { FiUpload } from 'react-icons/fi'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import allClientsData from '../data/CLIENT_DATA.json'
import * as XLSX from 'xlsx'

const Clients = () => {

  let pages = Math.ceil(allClientsData.length / 10);
  let [currentPage, setCurrentPage] = useState(1);
  let [start, setStart] = useState(0);
  let [end, setEnd] = useState(10);
  let [showData, setShowData] = useState(allClientsData.slice( start , end ));
  function handleFirstPages() {
    let s , e ;
    s = 0
    allClientsData.length >= 10 ? e = 10 : e = allClientsData.length
    setStart(s)
    setEnd(e)
    setShowData( allClientsData.slice( s , e ) );
  }
  function handleDecrease() {
    if (start !== 0){
      let s = start - 10 , e = end - 10 ;
      setStart(s)
      setEnd(e)
      setShowData( allClientsData.slice( s , e ) );
    }
  }
  function handleIncrease() {
    if (end < allClientsData.length){
      let s = start + 10 , e ;
      (end+10) > allClientsData.length ? e = allClientsData.length : e = end+10 ; 
      setStart(s)
      setEnd(e)
      setShowData( allClientsData.slice( s , e ) );
    }
  }
  function handleLastPages() {
    let s , e;
    if (allClientsData.length % 10 === 0) {
      e = allClientsData.length
      s = allClientsData.length - 10
    }else {
      e = allClientsData.length
      s = allClientsData.length - allClientsData.length%10 
    }
    setStart(s)
    setEnd(e)
    setShowData( allClientsData.slice( s , e ) );
  }
  function handleChangePages(inp) {
    let cp = (inp.target.value) - 1;
    if (cp>=-1) {
      setCurrentPage(cp);
      let s = cp * 10 ;
      let e = s + 10 > allClientsData.length ? allClientsData.length : s+10  ;
      setStart(s);
      setEnd(e);
      setShowData( allClientsData.slice( s , e ) );
    }else {
      setCurrentPage(cp);
    }
  }
  function handleUploadFile() {
    const worksheet = XLSX.utils.json_to_sheet(allClientsData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'All Clients Data.xlsx');
  }
  function handleSearch(e) {
    setShowData(allClientsData.slice( start , end ))
    if (e.target.value) {
      let newShowData = showData.filter((item) => item.category.includes(e.target.value))
      setShowData(newShowData)
    }
  }
  useEffect(() => {
    setCurrentPage(start/10 + 1)
  }, [start])


  return (
    <section>
      <Title name={'Clients'} />
      <section className="flex flex-col gap-5">

        <div className="flex items-center justify-between gap-2">
          <div className="input relative w-full sm:w-80">
            <input onChange={(e) => handleSearch(e)} type="text" className="focus:border-2 focus:border-neutral-300 outline-none w-full h-10 bg-white rounded-lg p-3" placeholder='category' />
            <CiSearch className='cursor-pointer absolute right-0 top-0 h-10 w-10 p-2 shadow-inner duration-300 hover:p-1' />
          </div>
          <button onClick={() => handleUploadFile()} className="flex items-center gap-2  h-10 px-2 md:px-4 text-white text-lg font-semibold rounded-lg bg-blue-500 duration-300 hover:bg-blue-700"><FiUpload />Export</button>
        </div>{/* search */}

        <ClientsTable showData={showData} />

        <div className="flex items-center justify-between">
          <div className="font-semibold hidden md:block">
            Go to Page :
            <input placeholder={currentPage} type="number" onChange={ (e) => handleChangePages(e) } className='w-20 h-10 ms-1 focus:border-2 focus:border-neutral-300 duration-300 outline-none p-2 rounded-lg' />
          </div>
          <p className="font-semibold text-blue-500 text-md md:text-xl"><span className='text-black me-1 hidden sm:inline-block'>Page : </span>{currentPage} to {pages}</p>
          <div className="flex items-center gap-2">
            <button disabled={start === 0} onClick={handleFirstPages} className={`h-10 px-1 md:px-2 text-white text-sm md:text-lg font-semibold rounded-lg bg-blue-500 duration-300 hover:bg-blue-700 ${start === 0 && 'cursor-not-allowed opacity-50'}`}>First Page</button>
            <button disabled={start === 0} onClick={handleDecrease} className={`h-10 px-1 md:px-2 text-white text-sm md:text-lg font-semibold rounded-lg bg-blue-500 duration-300 hover:bg-blue-700 ${start === 0 && 'cursor-not-allowed opacity-50'}`}><FaChevronLeft /></button>
            <button disabled={end === allClientsData.length} onClick={handleIncrease} className={`h-10 px-1 md:px-2 text-white text-sm md:text-lg font-semibold rounded-lg bg-blue-500 duration-300 hover:bg-blue-700 ${end === allClientsData.length && 'cursor-not-allowed opacity-50'}`}><FaChevronRight /></button>
            <button disabled={end === allClientsData.length} onClick={handleLastPages} className={`h-10 px-1 md:px-2 text-white text-sm md:text-lg font-semibold rounded-lg bg-blue-500 duration-300 hover:bg-blue-700 ${end === allClientsData.length && 'cursor-not-allowed opacity-50'}`}>Last Page</button>
          </div>
        </div>

      </section>
    </section>
  )
}

export default Clients
