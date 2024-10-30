import React, { useEffect, useState } from 'react'
import { links } from './../data/index';
import { Link, useLocation } from 'react-router-dom';
import { FaCaretSquareLeft, FaCaretSquareRight } from 'react-icons/fa';

const SideBar = () => {

   const [openSideBar, setOpenSideBar] = useState(true);
   let { pathname } = useLocation();
   const [isMobile, setIsMobile] = useState(false);

   useEffect(() => {
      const handleMediaQueryChange = (e) => {
         setOpenSideBar(!e.matches);
         setIsMobile(e.matches)
      };
      const mediaQuery = window.matchMedia('(max-width: 768px)');
      mediaQuery.addEventListener('change', handleMediaQueryChange);
      setOpenSideBar(!mediaQuery.matches);
      setIsMobile(mediaQuery.matches)
      return () => {
         mediaQuery.removeEventListener('change', handleMediaQueryChange);
      };
   }, []);
   // console.log(isMobile);

   return (
      <section className={`bg-blue-500 duration-300 h-[100vh] ${openSideBar?'w-72 px-5 py-8':'w-20 pb-5'} flex flex-col items-center gap-8`}>
         <p className={`flex items-center justify-between text-xl text-white font-semibold ${openSideBar&&'w-full'}`}>{openSideBar && "BI-Studio"} { !isMobile && (openSideBar ?<FaCaretSquareLeft onClick={()=>setOpenSideBar(false)} className='duration-300 hover:scale-110 hover:text-neutral-200 cursor-pointer text-2xl' />:<FaCaretSquareRight onClick={()=>setOpenSideBar(true)}  className='duration-300 hover:scale-110 hover:text-neutral-200 cursor-pointer text-2xl'/>) }</p>
         {isMobile && <p className='text-2xl sm:text-4xl font-semibold text-white -mt-3'>BI</p>}
         <ul className={`flex-1 flex flex-col gap-5 ${openSideBar&&'w-full'}`}>
            {links.map((link) => (
               <li key={link.id+15243}>
                  <Link to={link.to} className={`flex gap-2 items-center bg-black duration-300 text-xl text-white p-2 rounded-md ${pathname === link.to ? 'bg-opacity-100' : 'bg-opacity-50'}`}>
                     <span className="font-bold bg-blue-500 p-2 rounded-md">{link.icon}</span>
                     {openSideBar && link.content}
                  </Link>
               </li>
            ))}
         </ul>
         <div className={`flex gap-2 items-center bg-black bg-opacity-50 text-white p-2 rounded-md ${openSideBar&&'w-full'}`}>
            <span className="font-bold bg-blue-500 p-2 rounded-md">ME</span>
            {openSideBar && 
            <p className="flex flex-col gap-1"><span className='font-semibold'>Mostafa ElSayed</span><span>mostafa@gmail.com</span></p>
            }
         </div>
      </section>
   )
}

export default SideBar
