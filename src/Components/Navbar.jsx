import React, { use } from "react";
import logo from "../assets/ChatGPT Image Oct 22, 2025, 07_24_17 PM.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Auth/AuthProvider";

const Navbar = () => {
  const { user, SignOut } = use(AuthContext);

  const handleSignOut = () => {
    SignOut()
      .then(() => {
        alert("sign out succesfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="navbar shadow-sm">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
            </ul>
          </div>
          <img className="h-15 w-15" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
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
            <li>
              <a>Find us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex justify-center">
          {user ? (
            <Link
              to="/auth/login"
              onClick={handleSignOut}
              className="btn dotmatrix text-red-600 btn-ghost join-item"
            >
              Sign Out
            </Link>
          ) : (
            <Link
              to="/auth/login"
              className="btn dotmatrix text-red-600 btn-ghost join-item"
            >
              Sign In
            </Link>
          )}

          {user && <div class="avatar">
            <div class="w-11 rounded-full">
              <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
            </div>
          </div>}


        </div>
      </div>
    </div>
  );
};

export default Navbar;
