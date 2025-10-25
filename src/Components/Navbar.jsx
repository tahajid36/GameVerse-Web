import React, { use } from "react";
import logo from "../assets/ChatGPT Image Oct 22, 2025, 07_24_17 PM.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Auth/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';


const Navbar = () => {
  const { user, SignOut } = use(AuthContext);

  const notify = () => toast("User logged out succesfully")

  const handleSignOut = () => {
    SignOut()
      .then(() => {

      })
      .catch((error) => {
        console.log(error.message);
        
      });
  };

  return (
    <div className="">
      <div className="navbar flex justify-around ">
        {/* navbar start div  */}
        <div className="flex ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-30 p-2 shadow"
            >
              {/* responsive part of submenu  */}
              <NavLink to={"/"}>
                <li>
                  <a>Home</a>
                </li>
              </NavLink>
              <NavLink to={"/gamessection"}>
                <li>
                  <a>All Games</a>
                </li>
              </NavLink>
              <NavLink to={"/myprofile"}>
                <li>
                  <a>My Profile</a>
                </li>
              </NavLink>
            </ul>
          </div>
          <img className="h-15 w-15" src={logo} alt="" />
        </div>
        {/* navbar center div  */}
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink to={"/"}>
              <li>
                <a>Home</a>
              </li>
            </NavLink>
            <NavLink to={"/gamessection"}>
              <li>
                <a>All Games</a>
              </li>
            </NavLink>
            <NavLink to={"/myprofile"}>
              <li>
                <a>My Profile</a>
              </li>
            </NavLink>
          </ul>
        </div>
        {/* navbar end div  */}
        <div className=" flex  items-center justify-center">
          {user ? (
            <Link
              to="/auth/login"
              onClick={()=>{
                handleSignOut(), notify()
              }}
              className="btn dotmatrix text-red-600 btn-ghost join-item"
            >
              Log Out
            </Link>
          ) : (
            <Link
              to="/auth/login"
              className="btn dotmatrix text-red-600 btn-ghost btn-sm join-item"
            >
              LogIn/Register
            </Link>
          )}

          {user ? (
            <div
              class="avatar"
             
            >
              <div class="w-11 rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>
          ) : (
            <div
              class="avatar"
            >
              <div class="w-11 rounded-full" >
                <img  src="https://imgs.search.brave.com/RmV4khtF4a4Ja2H1UBPz2TLXwGfiUcfUGh7ezE7rw7Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZiL2E4/L2U0LzZiYThlNGU1/MjY4Zjg0YzM1MDdk/ZjcyZGM3ODk2ZDc3/LmpwZw" />
              </div>
            </div>
          )}
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Navbar;
