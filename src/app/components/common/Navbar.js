"use client"
import React, { useState} from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { GrFavorite } from "react-icons/gr";
import Image from "next/image";
// import {useTheme} from "next-themes";
// import {MoonIcon,SunIcon} from "@heroicons/react/solid";
import Sidebar from "./Sidebar";


const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // const {systemTheme,theme,setTheme}=useTheme();
    // const [mounted,setMounted]=useState(false);
    // useEffect(()=>{
    //   setMounted(true);
    // })
    // const renderThemeChanger =()=>{
    //   if (!mounted) return null;
    //     // console.log('Current theme:', theme);
    //     const currentTheme = theme === 'system' ? systemTheme : theme;
    //     if(currentTheme==='dark')
    //     {
    //         return(
    //             <SunIcon className="w-7 h-7" role="button" onClick={()=>setTheme('light')}/>
    //         )
    //     }
    //     else
    //     {
    //         return(
    //             <MoonIcon className="w-7 h-7" role="button" onClick={()=>setTheme('dark')}/>
    //         )
    //     }
    // }
   
    
    const handleSidebarToggle = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <>
    <div className="fixed top-0 left-0 w-full bg-white text-black transition-colors duration-300">
      <div className="px-7">
        <div className="flex items-center gap-5 justify-between ">
          <div className="flex items-center justify-between gap-56 lg:gap-5 md:gap-5">
            <AiOutlineMenu size={30} onClick={handleSidebarToggle}/>
            <Image
              src="/Images/logo.jpg"
              alt="My Logo"
              width={80}
              height={80}
            />
          </div>

          <div
            className={`relative hidden md:block w-full md:w-auto mb-4 md:mb-0 mr-4`}
          >
            {/* Input for search */}
            <input
              type="text"
              placeholder="Search here..."
              className="w-48 md:w-[300px] px-4 py-2 pl-10 rounded-full border focus:outline-none focus:ring focus:border-blue-500 transition-all duration-300 bg-white"
            />

            {/* Search icon */}
            <span className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400">
              <AiOutlineSearch size={20} />
            </span>
          </div>

          <div
            className={`hidden lg:flex items-center gap-5 text-3xl md:flex md:text-xl`}
          >
            <GrFavorite size={24} />
            <h1 className="">My Favourite</h1>
            <div className={`flex items-center gap-1 cursor-pointer `}>
              {/* <CiLight />
              <MdDarkMode /> */}
              {/* {renderThemeChanger()} */}
            </div>
          </div>
        </div>
      </div>
    </div>

    {isSidebarOpen && <Sidebar  />}
  </>
  )
}

export default Navbar
