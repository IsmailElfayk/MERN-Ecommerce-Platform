import React, { useState, useEffect, useContext } from "react";
import { assets } from "./../assets/assets";
import { ShopContext } from "../context/ShopContext";

import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { showSearch, setShowSearch, getCartCount, navigate , token, setToken, setCartItems} = useContext(ShopContext);

  const logout = ()=>{
    localStorage.removeItem('token')
    setToken("")
    setCartItems({})
    navigate('/login')
  }

  // useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 640) {
      setVisible(false);
    }
  };

  window.addEventListener("resize", handleResize);

  window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <div>
      <div className="flex items-center justify-between py-5 font-medium">
        <div className="w-[fit-content] cursor-pointer sm:hidden">
          <img
            src={assets.menu_icon}
            onClick={(self) => {
              setVisible(!visible);
            }}
            className={`w-5 cursor-pointer transform [transform:rotateY(180deg)] ${
              visible ? "hidden" : "block"
            }`}
            alt=""
          />
          <img
            src={assets.dropdown_icon}
            onClick={() => setVisible(!visible)}
            className={`h-4 w-3 m-1 rotate-180 ${
              !visible ? "hidden" : "block"
            }`}
            alt=""
          />
        </div>
        <Link to={"/"}>
          <img src={assets.logo} className="w-auto h-[30px]" alt="" />
        </Link>
        <ul className="hidden sm:flex items-center gap-5 text-sm text-gray-700">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1"
          >
            <p>COLLECTION</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>
        <div className="flex items-center gap-6">
          <Link to="/collection">
            <img
              src={assets.search_icon}
              className="w-5 cursor-pointer"
              alt=""
              onClick={() => {
                setShowSearch(!showSearch);
              }}
            />
          </Link>
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} alt="" className="w-5 min-w-5" />
            <p
              className={`absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ${
                getCartCount() == 0 ? "hidden" : ""
              }`}
            >
              {getCartCount()}
            </p>
          </Link>
          <div className="group relative">
              <img onClick={()=> token? null: navigate('/login')}
                src={assets.profile_icon}
                className="w-5 cursor-pointer"
                alt=""
              />
            {
              token &&             <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <Link to="/profile" className="cursor-pointer hover:text-black">
                  My Profile
                </Link>
                <Link to="/orders" className="cursor-pointer hover:text-black">
                  Orders
                </Link>
                <p onClick={()=>logout()} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
            }
          </div>
        </div>
      </div>
      <div
        className={` bg-white h-[100vh] overflow-hidden transition-all absolute left-0   ${
          visible ? "w-[70vw]" : "w-0"
        }`}
      >
        <div className="sideMenu flex flex-col">
          <hr />
          <NavLink
            onClick={() => setVisible(false)}
            className={"py-5 pl-6"}
            to="/"
          >
            HOME
          </NavLink>
          <hr />
          <NavLink
            onClick={() => setVisible(false)}
            className={"py-5 pl-6"}
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <hr />
          <NavLink
            onClick={() => setVisible(false)}
            className={"py-5 pl-6"}
            to="/about"
          >
            ABOUT
          </NavLink>
          <hr />
          <NavLink
            onClick={() => setVisible(false)}
            className={"py-5 pl-6"}
            to="/contact"
          >
            CONTACT
          </NavLink>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
