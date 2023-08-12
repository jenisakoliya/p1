"use client"
import React, { useState } from "react";
import { GiDistraction, GiTabletopPlayers } from "react-icons/gi";
import { MdCastForEducation, MdCasino, MdOutlineGirl } from "react-icons/md";
import { BiHappyBeaming, BiSolidCarCrash, BiFilterAlt } from "react-icons/bi";
import { SiApplearcade } from "react-icons/si";
import { FaPuzzlePiece } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";
import { BsClipboard2Check } from "react-icons/bs";
import { LuWholeWord } from "react-icons/lu";
import { TbMoodBoy } from "react-icons/tb";
import { TfiThemifyFavicon } from "react-icons/tfi";
import Content from "./Content";
import Link from "next/link";


const Sidebar = () => {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const [iconName, setIconName] = useState(null);
  
    const handleIconHover = (iconName) => {
      setHoveredIcon(iconName);
    };
  
    const handleIconLeave = () => {
      setHoveredIcon(null);
    };
  
    const handleIconName = (clickedname) => {
      setIconName(clickedname);
      console.log(clickedname);
    };
  
    // const sidebarBgColor = mode === "dark" ? "bg-gray-900" : "bg-gray-50";
    // const textColor = mode === "dark" ? "text-gray-100" : "text-gray-900";
  //   console.log(sidebarBgColor);
  
    const icons = [
      { icon: <GiDistraction size={25} />, label: "Action" },
      { icon: <BiSolidCarCrash size={25} />, label: "Racing" },
      { icon: <SiApplearcade size={25} />, label: "Arcade" },
      { icon: <FaPuzzlePiece size={25} />, label: "Puzzle" },
      { icon: <FcSportsMode size={25} />, label: "Sports" },
      { icon: <MdCastForEducation size={25} />, label: "Educational" },
      { icon: <BsClipboard2Check size={25} />, label: "Card & Board" },
      { icon: <GiTabletopPlayers size={25} />, label: "Multiplayer" },
      { icon: <MdCasino size={25} />, label: "Casino" },
      { icon: <LuWholeWord size={25} />, label: "Word game " },
      { icon: <BiFilterAlt size={25} />, label: "Advanture " },
      { icon: <BiHappyBeaming size={25} />, label: "Beauty" },
      { icon: <TfiThemifyFavicon size={25} />, label: "Horror" },
      { icon: <MdOutlineGirl size={25} />, label: "Girl" },
      { icon: <TbMoodBoy size={25} />, label: "Boy" },
    ];
  
  return (
    <>
       <nav>
      {
        <ul
          className={`flex bg-white  text-black cursor-pointer w-[40px] hover:w-[250px] h-full mt-14  `}
        >
          <div className="mt-5" onMouseLeave={handleIconLeave}>
            {icons.map((item, index) => (
              <li
                key={index}
                className="text-2xl pt-6 flex items-center gap-5 font-semibold"
                onMouseEnter={() => handleIconHover(item.label)}
                
                onClick={() => handleIconName(item.label)}
              >
                {hoveredIcon === null ? (
                  item.icon
                ) : (
                  <>
                    {item.icon} <span className="ml-2">{item.label}</span>
                  </>
                )}
              </li>
            ))}
          </div>
        </ul>
      }
      {/* {<Content mode={iconName}/>} */}
    </nav>
    
    </>
  )
}

export default Sidebar
