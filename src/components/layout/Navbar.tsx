// import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import img1 from "../../assets/Navbar/bread-logo-and-symbol-free-vector.png";
import { useAppDispatch, useAppSelector } from '../../Page/Redux/Features/hooks';
import { logOut } from '@/Page/Redux/Features/auth/authSlice';
import { useCurrentUser } from '../../Page/Redux/Features/auth/authSlice';
import { useState } from 'react';
import { useEffect } from 'react';

const Navbar = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(useCurrentUser);
    
    const [theme, setTheme] = useState(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    useEffect(() => {
      localStorage.setItem("theme", theme as string);
      const localTheme = localStorage.getItem("theme") || "light";
      document.querySelector("html")?.setAttribute("data-theme", localTheme);
    }, [theme]);

    const handleToggle = (e:any) => {
      if (e.target.checked) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    };
  
    const handleLogout = () => {
      dispatch(logOut());
    }

    const navOptions = <>
        <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-orange-400 text-xl font-semibold' : 'text-xl font-semibold text-white')}>Home</NavLink>
        </li>
        <li>
            <NavLink to='/supplies' className={({ isActive }) => (isActive ? 'text-orange-400 text-xl font-semibold' : 'text-xl font-semibold text-white')}>All Supplies</NavLink>
        </li>
        {user && <li>
            <NavLink to='/dashboard' className={({isActive})=>(isActive?'text-orange-400 text-xl font-semibold':'text-xl font-semibold text-white')}>Dashboard</NavLink>
        </li>}
        <li>
            <NavLink to='/leaderboard' className={({isActive})=>(isActive?'text-orange-400 text-xl font-semibold':'text-xl font-semibold text-white')}>LeaderBoard</NavLink>
        </li>
        <li>
            <NavLink to='/gratitudeWall' className={({isActive})=>(isActive?'text-orange-400 text-xl font-semibold':'text-xl font-semibold text-white')}>Gratitude Wall</NavLink>
        </li>
        <li>
            <NavLink to='/about' className={({isActive})=>(isActive?'text-orange-400 text-xl font-semibold':'text-xl font-semibold text-white')}>About Us</NavLink>
        </li>
    </>

    return (
      <div className="navbar fixed z-10 bg-opacity-90 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="bg-black menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <div className="flex items-center gap-5 md:ml-5">
            <div>
              <img
                src={img1}
                alt=""
                className="w-[50px] md:w-[80px] hidden md:block"
              />
            </div>
            <div>
              <p className="uppercase md:text-3xl font-bold">Feed</p>
              <p className="md:text-xl uppercase text-orange-600">
                Forward Foundation
              </p>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end md:gap-4">
          <div>
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={theme === "light" ? false : true}
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          {user ? (
            <div>
              <button
                onClick={handleLogout}
                className="uppercase btn btn-warning md:mr-5"
              >
                LogOut
              </button>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <button className="uppercase btn btn-warning md:mr-5">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
};

export default Navbar;