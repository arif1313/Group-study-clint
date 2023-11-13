import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AutContext } from "../Contex/ContexApi";

import avatar from '../../../public/images/304b221e61d7b1dcfdabbe0bcab4f1c8.jpg'

const Header = () => {
  const { user, LogOut } = useContext(AutContext);
  const handleLogOut = () => {
    LogOut()
      .then(res => console.log(res))
      .catch(error => console.error(error))
  }

  const someLink = <>
    <li ><NavLink className="navlink" to="/">Home</NavLink></li>

    <li><NavLink to="/login">Login</NavLink></li>
    <li><NavLink to="/sinup">Sign up</NavLink></li>
   
  {
    user&& <>
     <li><NavLink to="/creatass">Creat Assignment</NavLink></li>
     <li><NavLink to="/task">Your Task</NavLink></li>
     <li><NavLink to="/marked">Give Mark</NavLink></li>
    
    </>
  }
   
  </>

  return (
    <div className="">
      <div>
        <div className="navbar text-mainTextcolor font-bold">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {
                  someLink
                }
              </ul>
            </div>
            <h2 className="btn btn-ghost normal-case text-base md:text-3xl font-bold">Group</h2>
          </div>
        
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {
                someLink
              }
            </ul>
          </div>

          <div className="navbar-end">
            {
              user ? <> <div className=" ml-3 mr-4 text-base text-blck font-bold">{user.displayName}</div>
         
           <img className="rounded-full h-10 w-19 mr-4" src={user.photoURL?user.photoURL:avatar} alt="" />
                     <label onClick={handleLogOut} className=" btn btn-sm bg-buttonColor normal-case">LogOut</label>
              </> : <Link to="/login" className="btn  btn-sm bg-buttonColor ">login</Link>
            }
          </div>

        </div>
       
      </div>
    
   
    </div>
  );
};

export default Header;