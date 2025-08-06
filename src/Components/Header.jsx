import { useContext } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import { AuthContext } from "./Providers/AuthProvider";
import { RiLogoutCircleLine } from "react-icons/ri";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("user sign out successfully");
      })
      .catch((error) => console.log("ERROR", error.message));
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/">Service</NavLink>
      </li>
      <li>
        <NavLink to="/">Contact</NavLink>
      </li>
      <li>
        {user && (
          <>
            <NavLink to="/profile">Profile</NavLink>
          </>
        )}
      </li>
    </>
  );

  return (
    <div className="">
      <div className="navbar bg-base-100 shadow-sm">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <p className="text-xl font-bold">
              Vi<span className="text-yellow-500">smo</span>
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <span>{user.email}</span>
              <a
                onClick={handleSignOut}
                className="flex items-center justify-center text-red-700 bg-slate-200 border-2 p-1.5 rounded-full"
              >
                <RiLogoutCircleLine size={18} />
              </a>
            </>
          ) : (
            <ul className="flex items-center text-center gap-2 font-semibold">
              <Link to="/login">
                <li className="w-20 px-2 py-1.5 bg-yellow-400 hover:bg-yellow-500 duration-300 rounded-box shadow">
                  Login
                </li>
              </Link>
              <Link to="/register">
                <li className="w-24 px-2 py-1.5 text-white bg-blue-600 hover:bg-blue-700 duration-300 rounded-box shadow">
                  Register
                </li>
              </Link>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
