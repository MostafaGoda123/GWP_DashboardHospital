import React, { useEffect, useState } from 'react'
import Title from './Title'
import DashboardFirst from '../charts/DashboardFirst'
import { CiSearch } from 'react-icons/ci'
import * as XLSX from 'xlsx'
import allBillsData from '../data/BILL_DATA.json'
import { FiUpload } from 'react-icons/fi'
import BillsTable from './BillsTable'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Bills = () => {

  let pages = Math.ceil(allBillsData.length / 10);
  let [currentPage, setCurrentPage] = useState(1);
  let [start, setStart] = useState(0);
  let [end, setEnd] = useState(10);
  let [showData, setShowData] = useState(allBillsData.slice( start , end ));
  function handleFirstPages() {
    let s , e ;
    s = 0
    allBillsData.length >= 10 ? e = 10 : e = allBillsData.length
    setStart(s)
    setEnd(e)
    setShowData( allBillsData.slice( s , e ) );
  }
  function handleDecrease() {
    if (start !== 0){
      let s = start - 10 , e = end - 10 ;
      setStart(s)
      setEnd(e)
      setShowData( allBillsData.slice( s , e ) );
    }
  }
  function handleIncrease() {
    if (end < allBillsData.length){
      let s = start + 10 , e ;
      (end+10) > allBillsData.length ? e = allBillsData.length : e = end+10 ; 
      setStart(s)
      setEnd(e)
      setShowData( allBillsData.slice( s , e ) );
    }
  }
  function handleLastPages() {
    let s , e;
    if (allBillsData.length % 10 === 0) {
      e = allBillsData.length
      s = allBillsData.length - 10
    }else {
      e = allBillsData.length
      s = allBillsData.length - allBillsData.length%10 
    }
    setStart(s)
    setEnd(e)
    setShowData( allBillsData.slice( s , e ) );
  }
  function handleChangePages(inp) {
    let cp = (inp.target.value) - 1
    if (cp>=-1) {
      setCurrentPage(cp)
      let s = cp * 10 ;
      let e = s + 10 > allBillsData.length ? allBillsData.length : s+10  ;
      setStart(s)
      setEnd(e)
      setShowData( allBillsData.slice( s , e ) );
    }else {
      setCurrentPage(cp+1)
    }
  }
  function handleUploadFile() {
    const worksheet = XLSX.utils.json_to_sheet(allBillsData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'All Bills Data.xlsx');
  }
  function handleSearch(e) {
    setShowData(allBillsData.slice( start , end ))
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
      <Title name={'Bills'} />
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8 pb-8 border-b-2 border-blue-500' >
        <DashboardFirst />
      </section>
      <section className="flex flex-col gap-5 w-full">

        <div className="flex items-center justify-between gap-2">
          <div className="input relative w-full sm:w-80">
            <input onChange={(e) => handleSearch(e)} type="text" className="focus:border-2 focus:border-neutral-300 outline-none w-full h-10 bg-white rounded-lg p-3" placeholder='category' />
            <CiSearch className='cursor-pointer absolute right-0 top-0 h-10 w-10 p-2 shadow-inner duration-300 hover:p-1' />
          </div>
          <button onClick={() => handleUploadFile()} className="flex items-center gap-2  h-10 px-2 md:px-4 text-white text-lg font-semibold rounded-lg bg-blue-500 duration-300 hover:bg-blue-700"><FiUpload />Export</button>
        </div>{/* search */}

        <BillsTable showData={showData} />

        <div className="flex items-center justify-between">
          <div className="font-semibold hidden md:block">
            Go to Page :
            <input placeholder={currentPage} type="number" onChange={ (e) => handleChangePages(e) } className='w-20 h-10 ms-1 focus:border-2 focus:border-neutral-300 duration-300 outline-none p-2 rounded-lg' />
          </div>
          <p className="font-semibold text-blue-500 text-md md:text-xl"><span className='text-black me-1 hidden sm:inline-block'>Page : </span>{currentPage} to {pages}</p>
          <div className="flex items-center gap-2">
            <button disabled={start === 0} onClick={handleFirstPages} className={`h-10 px-1 md:px-2 text-white text-sm md:text-lg font-semibold rounded-lg bg-blue-500 duration-300 hover:bg-blue-700 ${start === 0 && 'cursor-not-allowed opacity-50'}`}>First Page</button>
            <button disabled={start === 0} onClick={handleDecrease} className={`h-10 px-1 md:px-2 text-white text-sm md:text-lg font-semibold rounded-lg bg-blue-500 duration-300 hover:bg-blue-700 ${start === 0 && 'cursor-not-allowed opacity-50'}`}><FaChevronLeft /></button>
            <button disabled={end === allBillsData.length} onClick={handleIncrease} className={`h-10 px-1 md:px-2 text-white text-sm md:text-lg font-semibold rounded-lg bg-blue-500 duration-300 hover:bg-blue-700 ${end === allBillsData.length && 'cursor-not-allowed opacity-50'}`}><FaChevronRight /></button>
            <button disabled={end === allBillsData.length} onClick={handleLastPages} className={`h-10 px-1 md:px-2 text-white text-sm md:text-lg font-semibold rounded-lg bg-blue-500 duration-300 hover:bg-blue-700 ${end === allBillsData.length && 'cursor-not-allowed opacity-50'}`}>Last Page</button>
          </div>
        </div>

        </section>
    </section>
  )
}

export default Bills
