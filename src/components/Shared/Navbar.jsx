

// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'
// import { ModeToggle } from '../mode-toggle';
// import { FaHome, FaBriefcase, FaConciergeBell, FaSignInAlt, FaUserPlus, FaEnvelope } from 'react-icons/fa';

// const Navbar = () => {
//   const NavLinks = [
//     {
//       title: "Home",
//       path: "/",
//       icon: <FaHome />
//     },
//     {
//       title:"Jobs",
//       path:"/jobs"
//     },
//     {
//       title:"Services",
//       path:"/services"
//     },
//     {
//       title: "Login",
//       path: "/login"
//     },
//     {
//       title: "Register",
//       path: "/register"
//     },
//     {
//       title:"ContactUs",
//       path:"/contactus",
//       icon: <FaEnvelope />

//     },
//   ];

//   return (
//     <div className="w-full h-[8vh] flex flex-row justify-center items-center shadow-sm shadow-primary/50 fixed top-0 bg-transparent z-50">
//       <div className="w-1/4 h-full text-font-bold flex justify-start items-center text-lg">
//         JobAura
//       </div>
//       <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8'>
//         {
//           NavLinks.map((links, index) => (
//             <li key={index} className='list-none flex items-center'>
//               <NavLink to={links.path} className="flex items-center gap-2">
//                 {links.title}
//               </NavLink>
//             </li>
//           ))
//         }        
//         <ModeToggle/>
//       </div>
//     </div>
//   )
// }

// export default Navbar;


import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBriefcase, FaConciergeBell, FaSignInAlt, FaUserPlus, FaEnvelope } from 'react-icons/fa';
import { ModeToggle } from '../mode-toggle';

const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/",
      icon: <FaHome />
    },
    {
      title: "Jobs",
      path: "/jobs",
      icon: <FaBriefcase />
    },
    {
      title: "Services",
      path: "/services",
      icon: <FaConciergeBell />
    },
    {
      title: "ContactUs",
      path: "/contactus",
      icon: <FaEnvelope />
    },
    {
      title: "Login",
      path: "/login",
      icon: <FaSignInAlt />
    },
    {
      title: "Register",
      path: "/register",
      icon: <FaUserPlus />
    },
  ];

  return (
    <div className="w-full h-[8vh] flex flex-row justify-center items-center shadow-sm shadow-primary/50 fixed top-0 bg-transparent z-50">
      <div className="w-1/4 h-full font-bold flex justify-start items-center text-lg">
        JobAura
      </div>
      <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8'>
        {
          NavLinks.map((links, index) => (
            <li key={index} className='list-none flex items-center'>
              <NavLink to={links.path} className="flex items-center gap-2">
                {links.icon}
                {links.title}
              </NavLink>
            </li>
          ))
        }
        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
