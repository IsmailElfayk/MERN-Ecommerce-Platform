import React from "react";
import { assets } from "../assets/assets.js";
import { userUrl } from './../App';


const Navbar = ({setToken}) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img className="w-[max(10%,80px)]" src={assets.logo} alt="" />
    <div>

      <button onClick={()=> window.location.replace(userUrl)} className="cursor-pointer bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full mr-2 text-xs sm:text-sm">
        User Panel
      </button>
      <button onClick={()=>setToken("")} className="cursor-pointer bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">
        Logout
      </button>
    </div>
    </div>
  );
};

export default Navbar;
